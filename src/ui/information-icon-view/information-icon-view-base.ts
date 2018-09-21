import { ContentView, Property, ViewBase } from "tns-core-modules/ui/content-view";

export const nativeAdProperty = new Property<ViewBase, any>({
	name: "nativeAd",
});

export abstract class InformationIconViewBase extends ContentView {
	protected _nativeAd: any;

	public [nativeAdProperty.getDefault](): any {
		return this._nativeAd;
	}

	public [nativeAdProperty.setNative](value: any) {
		this._nativeAd = value;
		this.loadNativeAd();
	}
	abstract loadNativeAd();

}

nativeAdProperty.register(InformationIconViewBase);
