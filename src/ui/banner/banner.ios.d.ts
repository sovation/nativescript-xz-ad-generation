import { EventData } from "tns-core-modules/ui/core/view";
import { BannerBase } from "./banner-base";
export declare class Banner extends BannerBase {
    private _ios;
    private _adController;
    private _viewWidth;
    private _viewHeight;
    private _adScale;
    readonly ios: any;
    createNativeView(): any;
    onLoaded(): void;
    disposeNativeView(): void;
    loadAd(): void;
    onFail(args: EventData): void;
    protected updateAd(): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
}
