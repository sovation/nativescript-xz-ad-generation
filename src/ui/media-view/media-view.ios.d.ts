import { MediaViewBase } from "./media-view-base";
export declare class MediaView extends MediaViewBase {
    private _mediaView;
    constructor();
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
    loadNativeAd(): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
}
