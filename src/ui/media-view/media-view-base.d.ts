import { ContentView, Property, ViewBase } from "tns-core-modules/ui/content-view";
export declare const nativeAdProperty: Property<ViewBase, any>;
export declare abstract class MediaViewBase extends ContentView {
    protected _nativeAd: any;
    abstract loadNativeAd(): any;
}
