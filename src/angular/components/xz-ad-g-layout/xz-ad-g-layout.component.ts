import {
	Component,
	OnInit,
	Input,
	ContentChild,
	TemplateRef,
	NgZone,
	OnDestroy,
	ElementRef, ViewChild, AfterViewInit, Output, EventEmitter, OnChanges
} from "@angular/core";
import { isIOS, Page } from "tns-core-modules/ui/page";
import { AdData, XzAdItem, NativeAdData } from "../../../xz-ad-common";
import { XzAdController } from "../../../xz-ad-controller";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { EventData } from "tns-core-modules/data/observable";

export interface UpdateAdData extends EventData {
	id: number;
	adAvailable: boolean; // 広告が利用可能か
}

@Component({
	moduleId: module.id,
	selector: "XzAdGLayout",
	templateUrl: "./xz-ad-g-layout.component.html"
})
export class XzAdGLayoutComponent implements OnInit, OnDestroy {
	@ViewChild("adContainer") adContainerRef: ElementRef;
	@Input() locationId: number;
	@Input() width: number;
	@Input() id: number;
	@Output() updateAd: EventEmitter<UpdateAdData> = new EventEmitter<UpdateAdData>();
	@ContentChild(TemplateRef) templateRef;

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

	dispose(){
		if ( this._adController ) {
			this._adController.dispose();
		}
		if( this.ad ){
			this.ad.nativeAd = null;
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
			this.ad = <NativeAdData>{};

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
		return container.ios || container.android;
	}

}
