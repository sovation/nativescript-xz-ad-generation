import { View } from "tns-core-modules/ui/core/view";
import { Property } from "tns-core-modules/ui/core/view";
import { ContentView, ViewBase } from "tns-core-modules/ui/content-view";

export const locationIdProperty = new Property<ViewBase, number>({
	name: "locationId",
});

export const bannerWidthProperty = new Property<ViewBase, number>({
	name: "bannerWidth",
});

export const bannerHeightProperty = new Property<ViewBase, number>({
	name: "bannerHeight",
});

export abstract class XzAdGBannerBase extends ContentView {

	protected _locationId: number;
	protected _bannerHeight: number;
	protected _bannerWidth: number;

	public [locationIdProperty.getDefault](): number {
		return this._locationId;
	}

	// 広告枠IDをセット
	public [locationIdProperty.setNative](value: number) {
		this._locationId = value;
		console.log("location ID is set ", value);
		this.updateAd();
	}

	// バナーの高さをセット
	public [bannerHeightProperty.setNative](value: number) {
		this._bannerHeight = value;
		this.updateAd();
	}

	// バナーの横幅をセット
	public [bannerWidthProperty.setNative](value: number) {
		this._bannerWidth = value;
		this.updateAd();
	}

	public abstract createNativeView(): any;
	protected abstract updateAd(): void;

}

locationIdProperty.register(XzAdGBannerBase);
bannerHeightProperty.register(XzAdGBannerBase);
bannerWidthProperty.register(XzAdGBannerBase);
