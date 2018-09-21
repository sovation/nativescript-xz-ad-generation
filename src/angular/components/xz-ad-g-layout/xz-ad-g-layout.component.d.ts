import { OnInit, NgZone, OnDestroy, ElementRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { XzAdItem, NativeAdData } from "../../../xz-ad-common";
export declare class XzAdGLayoutComponent implements OnInit, OnDestroy {
    private page;
    private ngZone;
    adContainerRef: ElementRef;
    locationId: number;
    width: number;
    templateRef: any;
    adItem: XzAdItem;
    ad: NativeAdData;
    private _adController;
    constructor(page: Page, ngZone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onReceiveNativeAd(data: NativeAdData): void;
    getContainerView(): any;
}
