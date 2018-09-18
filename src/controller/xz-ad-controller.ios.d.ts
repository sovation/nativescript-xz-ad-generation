import { XzAdControllerBase } from "./xz-ad-controller-base";
export declare class XzAdController extends XzAdControllerBase {
    private _adg;
    init(): this;
    initWithView(view: UIView, viewHeight: number, viewWidth: number, scale: number): this;
    dispose(): void;
    resumeAd(): void;
    loadRequest(): void;
    onReceiveNativeAd(ad: ADGNativeAd): void;
    onFailed(): void;
}
