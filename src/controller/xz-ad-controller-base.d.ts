import { Observable } from "tns-core-modules/data/observable";
import { EventData } from "tns-core-modules/data/observable";
import { XzAdItem } from "../xz-ad-item";
export interface AdData extends EventData {
    title: string;
    description: string;
    mainImageUrl: string;
    mainImageWidth: number;
    mainImageHeight: number;
    iconImageUrl: string;
    iconImageWidth: number;
    iconImageHeight: number;
    ctaText: string;
    linkUrl: string;
    sponsor: string;
}
export interface NativeAdData extends AdData {
}
export declare abstract class XzAdControllerBase extends Observable {
    protected adItem: XzAdItem;
    constructor(adItem: XzAdItem);
}
