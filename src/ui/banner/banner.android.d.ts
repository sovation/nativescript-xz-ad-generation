import { BannerBase } from "./banner-base";
export declare class Banner extends BannerBase {
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
