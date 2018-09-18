import { XzAdGBannerBase } from "./xz-ad-g-banner-base";
export declare class XzAdGBanner extends XzAdGBannerBase {
    private _adg;
    private _adController;
    private _initialized;
    readonly android: any;
    createNativeView(): any;
    disposeNativeView(): void;
    loadAd(): void;
    onFail(): void;
    updateAd(): void;
}
