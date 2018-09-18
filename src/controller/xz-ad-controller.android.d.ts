import { XzAdControllerBase } from "./xz-ad-controller-base";
export declare class XzAdController extends XzAdControllerBase {
    private _adg;
    private getAdListener();
    init(): this;
    initWithView(view: any, viewHeight: number, viewWidth: number, scale: number): this;
    resumeAd(): void;
    dispose(): void;
    onReceiveAd(ad: any): void;
}
