import {
	Component,
	OnInit,
	Input,
	ContentChild,
	TemplateRef,
	NgZone,
	OnDestroy,
	ElementRef, ViewChild, AfterViewInit, Output, EventEmitter, OnChanges, SimpleChanges
} from "@angular/core";
import { isAndroid, isIOS, Page } from 'tns-core-modules/ui/page'
import { AdData, XzAdItem, NativeAdData } from "../../../xz-ad-common";
import { XzAdController } from "../../../xz-ad-controller";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { EventData } from "tns-core-modules/data/observable";
import { first } from 'rxjs/operators'

export interface UpdateAdData extends EventData {
	id: number;
	adAvailable: boolean; // 広告が利用可能か
}

const DEFAULT_AD_WIDTH = 320;
const DEFAULT_AD_HEIGHT = 100;

@Component({
	selector: "XzAdGLayout",
	template: `
		<GridLayout #adContainer>
			<ng-template [ngTemplateOutlet]="templateRef"
	             [ngTemplateOutletContext]="{$implicit: ad}">
			</ng-template>
		</GridLayout>
	`
})
export class XzAdGLayoutComponent implements OnInit, OnDestroy, OnChanges {
	@ViewChild("adContainer", {static: false}) adContainerRef: ElementRef;
	@Input() locationId: number;
	@Input() adWidth: number;
	@Input() adHeight: number;
	@Input() id: number;
	@Input() hideOnFail: boolean;
	@Output() updateAd: EventEmitter<UpdateAdData> = new EventEmitter<UpdateAdData>();
	@ContentChild(TemplateRef, {static: false}) templateRef;

	adItem: XzAdItem;
	ad: NativeAdData = <NativeAdData>{
	};

	private _adController: XzAdController;

	constructor(private page: Page, private ngZone: NgZone) {
	}

	ngOnInit() {
		this.loadAd();
	}

	ngOnDestroy() {
		this.dispose();
	}

	ngOnChanges(changes: SimpleChanges): void {
		if( "locationId" in changes && !changes.locationId.firstChange){
			if( changes.locationId.currentValue ){
				this.locationId = changes.locationId.currentValue;
				this.dispose();
				this.loadAd();
			}
		}
	}

	dispose(){
		if( this._adController ) {
			this._adController.off("receiveNativeAd", this.onReceiveNativeAd, this);
			this._adController.off("fail", this.onFailReceiveAd, this );
			this._adController.dispose();
		}
		if( this.ad ){
			this.ad.nativeAd = null;
			this.ad = <NativeAdData>{};
		}
	}

	reloadAd(){
		this.ad = <NativeAdData>{};
		this._adController.resumeAd();
	}

	loadAd(){
		let adItem = <XzAdItem>{
			type: "native",
			locationId: this.locationId,
			width: this.adWidth || DEFAULT_AD_WIDTH,
			height: this.adHeight || DEFAULT_AD_HEIGHT
		};

		if ( adItem.type === "native" ) {
			setTimeout( () => {
				this._adController = new XzAdController(adItem);
				this._adController.initNativeAd( this.getContainerView() );
				this._adController.on("receiveNativeAd", this.onReceiveNativeAd, this);
				this._adController.on("fail", this.onFailReceiveAd, this );
			}, isIOS ? 1: 1000 ); // Androidは、遅延初期化しないとgetContainerViewがうまく動かなかった
		}
	}

	/**
	 * ネイティブアド受信時
	 * @param data
	 */
	onReceiveNativeAd(data: NativeAdData) {

		this.ngZone.run(() => {
			this.ad = data;

			// 失敗時にビューを隠す設定の場合
			if( this.hideOnFail ){
				const view = this.adContainerRef.nativeElement as StackLayout;
				view.height = 'auto';
			}

			// HTMLアドの場合は、ビューサイズの調整が必要
			if( this.adHeight && this.ad.isHTML ){
				const view = this.adContainerRef.nativeElement as StackLayout;
				const firstView = view.getChildAt(0);
				if( isIOS ){
					// 広告縦サイズ＋下余白を新しいサイズとして設定（上余白は設定しなくても自動で入る)
					const paddingBottom = isNaN(+firstView.style.paddingBottom) ? 0 : +firstView.style.paddingBottom;
					firstView.height = this.adHeight + paddingBottom;
				} else {
					// Android
					firstView.height = this.adHeight;
				}
			}

			// Notify to parent component
			this.updateAd.emit({
				id: this.id,
				adAvailable: true,
				eventName: "updateAd",
				object: null
			});
		});
	}

	/**
	 * ネイティブアドの受信失敗時
	 */
	onFailReceiveAd(){
		this.ngZone.run( () => {
			this.ad = <NativeAdData>{
				loadFailed: true
			};

			// 失敗時にビューを隠す設定の場合
			if( this.hideOnFail ){
				const view = this.adContainerRef.nativeElement as StackLayout;
				view.height = 0;
			}

			// Notify to parent component
			this.updateAd.emit({
				id: this.id,
				adAvailable: false,
				eventName: "updateAd",
				object: null
			});
		});
	}

	getContainerView(): any {
		let container = <StackLayout>this.adContainerRef.nativeElement;

		let view = container.getChildAt(0);
		if( view ){
			if( isIOS ){
				let nativeView = view.ios as UIView;
				container.height = nativeView.frame.size.height;
			}
			return view;
		} else {
			throw new Error("no view found for ad");
		}
	}

}
