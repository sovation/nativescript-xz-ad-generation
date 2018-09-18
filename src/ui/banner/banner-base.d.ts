import { Property } from "tns-core-modules/ui/core/view";
import { ContentView, ViewBase } from "tns-core-modules/ui/content-view";
export declare const locationIdProperty: Property<ViewBase, number>;
export declare const bannerWidthProperty: Property<ViewBase, number>;
export declare const bannerHeightProperty: Property<ViewBase, number>;
export declare abstract class BannerBase extends ContentView {
    protected _locationId: number;
    protected _bannerHeight: number;
    protected _bannerWidth: number;
    abstract createNativeView(): any;
    protected abstract updateAd(): void;
}
