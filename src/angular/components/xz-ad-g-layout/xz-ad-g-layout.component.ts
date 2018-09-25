import {
	Component,
	OnInit,
	Input,
	ContentChild,
	TemplateRef,
	NgZone,
	OnDestroy,
	ElementRef, ViewChild, AfterViewInit
} from "@angular/core";
import { isIOS, Page } from "tns-core-modules/ui/page";
import { AdData, XzAdItem, NativeAdData } from "../../../xz-ad-common";
import { XzAdController } from "../../../xz-ad-controller";
import { screen } from "tns-core-modules/platform";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

@Component({
	moduleId: module.id,
	selector: "XzAdGLayout",
	templateUrl: "./xz-ad-g-layout.component.html"
})
export class XzAdGLayoutComponent implements OnInit, OnDestroy {
	@ViewChild("adContainer") adContainerRef: ElementRef;
	@Input() locationId: number;
	@Input() width: number;
	@ContentChild(TemplateRef) templateRef;

	adItem: XzAdItem;
	ad: NativeAdData = <NativeAdData>{
	};

	private _adController: XzAdController;

	constructor(private page: Page, private ngZone: NgZone) {
	}

	ngOnInit() {

		let adItem = <XzAdItem>{
			type: "native",
			locationId: this.locationId,
		};

		if ( adItem.type === "native" ) {
			setTimeout( () => {
				this._adController = new XzAdController(adItem);
				this._adController.initNativeAd( this.getContainerView() );
				this._adController.on("receiveNativeAd", this.onReceiveNativeAd, this);
			}, isIOS ? 1: 1000 ); // Androidは、遅延初期化しないとgetContainerViewがうまく動かなかった
		}
	}

	ngOnDestroy() {
		if ( this._adController ) {
			this._adController.dispose();
		}
		if( this.ad ){
			this.ad.nativeAd = null;
		}
	}

	/**
	 * ネイティブアド受信時
	 * @param data
	 */
	onReceiveNativeAd(data: NativeAdData) {

		this.ngZone.run(() => {
			this.ad = data;
			console.log(JSON.stringify(data));
		});
	}

	getContainerView(): any {
		let container = <StackLayout>this.adContainerRef.nativeElement;
		return container.ios || container.android;
	}

}
