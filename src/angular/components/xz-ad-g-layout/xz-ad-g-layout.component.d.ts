import { OnInit, NgZone, OnDestroy, ElementRef, EventEmitter } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { XzAdItem, NativeAdData } from "../../../xz-ad-common";
import { EventData } from "tns-core-modules/data/observable";
export interface UpdateAdData extends EventData {
    id: number;
    adAvailable: boolean;
}
export declare class XzAdGLayoutComponent implements OnInit, OnDestroy {
    private page;
    private ngZone;
    adContainerRef: ElementRef;
    locationId: number;
    width: number;
    id: number;
    updateAd: EventEmitter<UpdateAdData>;
    templateRef: any;
    adItem: XzAdItem;
    ad: NativeAdData;
    private _adController;
    constructor(page: Page, ngZone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    dispose(): void;
    reloadAd(): void;
    loadAd(): void;
    onReceiveNativeAd(data: NativeAdData): void;
    onFailReceiveAd(): void;
    getContainerView(): any;
}