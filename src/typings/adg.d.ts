/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export class ADG implements com.socdm.d.adgeneration.observer.Subject {
					public static class: java.lang.Class<com.socdm.d.adgeneration.ADG>;
					public setStorageEnabled(param0: boolean): void;
					public setLocationId(param0: string): void;
					public deleteObserver(param0: com.socdm.d.adgeneration.observer.Observer): void;
					public setInformationIconViewDefault(param0: boolean): void;
					public addRequestOptionParam(param0: string, param1: string): void;
					public pause(): void;
					public getLocationId(): string;
					public readyForInterstitial(): void;
					public destroyAdView(): void;
					public delegateViewManagement(param0: globalAndroid.view.View, param1: com.socdm.d.adgeneration.nativead.ADGNativeAd): void;
					public setActivity(param0: globalAndroid.content.Context): void;
					public setAdListener(param0: com.socdm.d.adgeneration.ADGListener): void;
					public setEnableMraidMode(param0: java.lang.Boolean): void;
					public show(): void;
					public setEnableTestMode(param0: boolean): void;
					public setFillerLimit(param0: number): void;
					public enableRetryingOnFailedMediation(): void;
					public delegateViewManagement(param0: globalAndroid.view.View): void;
					public disableCallingNativeAdTrackers(): void;
					public stopAutomaticLoad(): void;
					public isReadyForInterstitial(): boolean;
					public setFlexibleWidth(param0: number): void;
					public onWindowVisibilityChanged(param0: number): void;
					public stop(): void;
					public setDivideShowing(param0: boolean): void;
					public addObserver(param0: com.socdm.d.adgeneration.observer.Observer): void;
					public setFillerRetry(param0: boolean): void;
					public setPreLoad(param0: boolean): void;
					public setReloadWithVisibilityChanged(param0: boolean): void;
					public addHeaderBiddingParamsWithAmznAdResponse(param0: any): void;
					public sendMessage(param0: com.socdm.d.adgeneration.observer.ADGMessage): void;
					public updateView(): void;
					public setEnableSound(param0: boolean): void;
					public addMediationNativeAdView(param0: globalAndroid.view.View): void;
					public start(): void;
					public finishMediation(): void;
					public getAdListener(): com.socdm.d.adgeneration.ADGListener;
					public addHeaderBiddingParam(param0: com.socdm.d.adgeneration.ADGConsts.ADGHeaderBiddingParamKeys, param1: string): void;
					public setAdFrameSize(param0: com.socdm.d.adgeneration.ADG.AdFrameSize): void;
					public setPreventAccidentalClick(param0: boolean): void;
					public resumeRefreshTimer(): void;
					public setUsePartsResponse(param0: boolean): void;
					public setExpandFrame(param0: boolean): void;
					public isEnableSound(): boolean;
					public setAdScale(param0: number): void;
					public hasOwnInterstitialTemplate(): boolean;
					public isEnableTestMode(): boolean;
					public isReadyToDismissInterstitial(): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public setDatabasePath(param0: string): void;
					public setAutomaticallyRemoveOnReload(param0: globalAndroid.view.View): void;
					public setAdBackGroundColor(param0: number): void;
					public setIsInterstitial(param0: boolean): void;
					public getBeacon(): string;
					public setMiddleware(param0: com.socdm.d.adgeneration.ADGConsts.ADGMiddleware): void;
					public setWaitShowing(): void;
				}
				export module ADG {
					export class ADGWebChromeClient {
						public static class: java.lang.Class<com.socdm.d.adgeneration.ADG.ADGWebChromeClient>;
						public onCreateWindow(param0: globalAndroid.webkit.WebView, param1: boolean, param2: boolean, param3: globalAndroid.os.Message): boolean;
						public onConsoleMessage(param0: globalAndroid.webkit.ConsoleMessage): boolean;
					}
					export class ADGWebViewClient extends com.socdm.d.adgeneration.ADG.ADGWebViewClientBase {
						public static class: java.lang.Class<com.socdm.d.adgeneration.ADG.ADGWebViewClient>;
						public onPageStarted(param0: globalAndroid.webkit.WebView, param1: string, param2: globalAndroid.graphics.Bitmap): void;
						public shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): globalAndroid.webkit.WebResourceResponse;
						public shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: string): globalAndroid.webkit.WebResourceResponse;
						public onReceivedError(param0: globalAndroid.webkit.WebView, param1: number, param2: string, param3: string): void;
						public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
						public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
					}
					export class ADGWebViewClientBase {
						public static class: java.lang.Class<com.socdm.d.adgeneration.ADG.ADGWebViewClientBase>;
						public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
					}
					export class AdFrameSize {
						public static class: java.lang.Class<com.socdm.d.adgeneration.ADG.AdFrameSize>;
						public static SP: com.socdm.d.adgeneration.ADG.AdFrameSize;
						public static TABLET: com.socdm.d.adgeneration.ADG.AdFrameSize;
						public static LARGE: com.socdm.d.adgeneration.ADG.AdFrameSize;
						public static RECT: com.socdm.d.adgeneration.ADG.AdFrameSize;
						public static FREE: com.socdm.d.adgeneration.ADG.AdFrameSize;
						public getWidth(): number;
						public static values(): native.Array<com.socdm.d.adgeneration.ADG.AdFrameSize>;
						public setSize(param0: number, param1: number): com.socdm.d.adgeneration.ADG.AdFrameSize;
						public static valueOf(param0: string): com.socdm.d.adgeneration.ADG.AdFrameSize;
						public getHeight(): number;
					}
					export class RepeatRotationTimerTask {
						public static class: java.lang.Class<com.socdm.d.adgeneration.ADG.RepeatRotationTimerTask>;
						public run(): void;
						public constructor(param0: com.socdm.d.adgeneration.ADG);
					}
					export class RotationTimerTask {
						public static class: java.lang.Class<com.socdm.d.adgeneration.ADG.RotationTimerTask>;
						public run(): void;
						public constructor(param0: com.socdm.d.adgeneration.ADG);
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export class ADGConsts {
					public static class: java.lang.Class<com.socdm.d.adgeneration.ADGConsts>;
					public static SDKVERSION: string;
					public static _TAG: string;
					public static DOMAIN: string;
					public static AD_PATH: string;
					public static AD_URL: string;
					public static WEBVIEW_BASE_URL: string;
					public static TIMEOUT_INTERVAL: number;
					public static MEDIATION_NATIVE_AD_VIEW_TAG: string;
					public constructor();
				}
				export module ADGConsts {
					export class ADGErrorCode {
						public static class: java.lang.Class<com.socdm.d.adgeneration.ADGConsts.ADGErrorCode>;
						public static UNKNOWN: com.socdm.d.adgeneration.ADGConsts.ADGErrorCode;
						public static COMMUNICATION_ERROR: com.socdm.d.adgeneration.ADGConsts.ADGErrorCode;
						public static RECEIVED_FILLER: com.socdm.d.adgeneration.ADGConsts.ADGErrorCode;
						public static NO_AD: com.socdm.d.adgeneration.ADGConsts.ADGErrorCode;
						public static NEED_CONNECTION: com.socdm.d.adgeneration.ADGConsts.ADGErrorCode;
						public static EXCEED_LIMIT: com.socdm.d.adgeneration.ADGConsts.ADGErrorCode;
						public static TEMPLATE_FAILED: com.socdm.d.adgeneration.ADGConsts.ADGErrorCode;
						public static values(): native.Array<com.socdm.d.adgeneration.ADGConsts.ADGErrorCode>;
						public static valueOf(param0: string): com.socdm.d.adgeneration.ADGConsts.ADGErrorCode;
					}
					export class ADGHeaderBiddingParamKeys {
						public static class: java.lang.Class<com.socdm.d.adgeneration.ADGConsts.ADGHeaderBiddingParamKeys>;
						public static AMZN_BIDID: com.socdm.d.adgeneration.ADGConsts.ADGHeaderBiddingParamKeys;
						public static AMZN_HOSTNAME: com.socdm.d.adgeneration.ADGConsts.ADGHeaderBiddingParamKeys;
						public static AMZN_SLOTS: com.socdm.d.adgeneration.ADGConsts.ADGHeaderBiddingParamKeys;
						public static values(): native.Array<com.socdm.d.adgeneration.ADGConsts.ADGHeaderBiddingParamKeys>;
						public toString(): string;
						public static valueOf(param0: string): com.socdm.d.adgeneration.ADGConsts.ADGHeaderBiddingParamKeys;
					}
					export class ADGMiddleware {
						public static class: java.lang.Class<com.socdm.d.adgeneration.ADGConsts.ADGMiddleware>;
						public static NONE: com.socdm.d.adgeneration.ADGConsts.ADGMiddleware;
						public static OTHER: com.socdm.d.adgeneration.ADGConsts.ADGMiddleware;
						public static UNITY: com.socdm.d.adgeneration.ADGConsts.ADGMiddleware;
						public static TITANIUM: com.socdm.d.adgeneration.ADGConsts.ADGMiddleware;
						public static COCOS2DX: com.socdm.d.adgeneration.ADGConsts.ADGMiddleware;
						public static valueOf(param0: string): com.socdm.d.adgeneration.ADGConsts.ADGMiddleware;
						public static values(): native.Array<com.socdm.d.adgeneration.ADGConsts.ADGMiddleware>;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export abstract class ADGListener {
					public static class: java.lang.Class<com.socdm.d.adgeneration.ADGListener>;
					public onClickAd(): void;
					public getFailedLimit(): number;
					public onOpenUrl(): void;
					public constructor();
					public onReceiveAd(): void;
					public onReadyMediation(param0: any): void;
					public onFailedToReceiveAd(param0: com.socdm.d.adgeneration.ADGConsts.ADGErrorCode): void;
					public constructor(param0: number);
					public setFailedLimit(param0: number): void;
					public onReceiveAd(param0: any): void;
					public onReceiveAd(param0: native.Array<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export class ADGResponse {
					public static class: java.lang.Class<com.socdm.d.adgeneration.ADGResponse>;
					public shouldGetAdResponseFromServerNextTime: java.lang.Boolean;
					public setRotationTime(param0: number): void;
					public getSoc(): string;
					public isMediation(): boolean;
					public getScheduleId(): string;
					public nextAd(): java.lang.Boolean;
					public constructor(param0: org.json.JSONObject);
					public isNoAd(): boolean;
					public getNativeAd(): com.socdm.d.adgeneration.nativead.ADGNativeAd;
					public getRotationTime(): number;
					public isNativeAd(): boolean;
					public getAd(): string;
					public getOption(): com.socdm.d.adgeneration.ADGResponseLocationParamsOption;
					public getDiid(): string;
					public isInvalidResponse(): boolean;
					public setBeacon(param0: string): void;
					public getMediationParam(): string;
					public setDisplayType(param0: number): void;
					public getMediationClassName(): string;
					public getMediationMovie(): number;
					public setOption(param0: com.socdm.d.adgeneration.ADGResponseLocationParamsOption): void;
					public fix(): void;
					public setIdfa(param0: string): void;
					public setAnid(param0: string): void;
					public getVastxml(): string;
					public getMediationAdId(): string;
					public getDisplayType(): number;
					public getAnid(): string;
					public setDiid(param0: string): void;
					public getIdfa(): string;
					public getBeacon(): string;
					public setSoc(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export class ADGResponseAdObject {
					public static class: java.lang.Class<com.socdm.d.adgeneration.ADGResponseAdObject>;
					public getScheduleId(): string;
					public constructor(param0: org.json.JSONObject);
					public getNativeAd(): com.socdm.d.adgeneration.nativead.ADGNativeAd;
					public getMediationType(): number;
					public parse(param0: org.json.JSONObject): void;
					public getMediationAdId(): string;
					public getAd(): string;
					public setBeacon(param0: string): void;
					public getMediationParam(): string;
					public getBeacon(): string;
					public getMediationClassName(): string;
					public getVastXML(): string;
					public getMediationMovie(): number;
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export class ADGResponseLocationParamsOption {
					public static class: java.lang.Class<com.socdm.d.adgeneration.ADGResponseLocationParamsOption>;
					public constructor(param0: com.socdm.d.adgeneration.ADGResponseLocationParamsOption.Options);
					public isNativeAdIncludedTemplate(): java.lang.Boolean;
					public constructor();
					public isViewablePayment(): java.lang.Boolean;
					public static parse(param0: org.json.JSONObject): com.socdm.d.adgeneration.ADGResponseLocationParamsOption;
				}
				export module ADGResponseLocationParamsOption {
					export class Options {
						public static class: java.lang.Class<com.socdm.d.adgeneration.ADGResponseLocationParamsOption.Options>;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export class ADGSettings {
					public static class: java.lang.Class<com.socdm.d.adgeneration.ADGSettings>;
					public static isGeolocationEnabled(): boolean;
					public static getVideoAudioType(): com.socdm.d.adgeneration.video.VideoAudioType;
					public constructor();
					public static setVideoAudioType(param0: com.socdm.d.adgeneration.video.VideoAudioType): void;
					public static setGeolocationEnabled(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export class AdParams {
					public static class: java.lang.Class<com.socdm.d.adgeneration.AdParams>;
					public static scheduleCount: number;
					public constructor(param0: globalAndroid.content.Context);
					public clearScheduleId(): void;
					public setIsMRAIDEnabled(param0: java.lang.Boolean): void;
					public setOptionParam(param0: string, param1: string): void;
					public clearOptionParams(): void;
					public getLocationId(): string;
					public setFillerLimit(param0: number): void;
					public shouldClearScheduleId(param0: com.socdm.d.adgeneration.ADGResponse): boolean;
					public setLocationId(param0: string): void;
					public addScheduleId(param0: com.socdm.d.adgeneration.ADGResponse): void;
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export class BuildConfig {
					public static class: java.lang.Class<com.socdm.d.adgeneration.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export class InADGListener extends com.socdm.d.adgeneration.ADGListener {
					public static class: java.lang.Class<com.socdm.d.adgeneration.InADGListener>;
					public onClickAd(): void;
					public onReceiveAd(): void;
					public onReadyMediation(param0: any): void;
					public onFailedToReceiveAd(param0: com.socdm.d.adgeneration.ADGConsts.ADGErrorCode): void;
					public onFailedToReceiveAdIfNotExceedLimitCallback(param0: com.socdm.d.adgeneration.InADGListener.ListenerCallback): void;
					public onReceiveAd(param0: any): void;
					public onReceiveAd(param0: native.Array<any>): void;
				}
				export module InADGListener {
					export class ListenerCallback {
						public static class: java.lang.Class<com.socdm.d.adgeneration.InADGListener.ListenerCallback>;
						/**
						 * Constructs a new instance of the com.socdm.d.adgeneration.InADGListener$ListenerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							invoke(): void;
						});
						public constructor();
						public invoke(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export class ADGInterstitial {
						public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.ADGInterstitial>;
						public setWindowBackground(param0: number): void;
						public naviBarStatusBarHidden(param0: boolean): void;
						public setBackgroundType(param0: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public addHeaderBiddingParam(param0: com.socdm.d.adgeneration.ADGConsts.ADGHeaderBiddingParamKeys, param1: string): void;
						public dismiss(): void;
						public setLandscapeCloseButtonType(param0: number): void;
						public setEnableTestMode(param0: boolean): void;
						public setSpan(param0: number): void;
						public setAdFrameSize(param0: com.socdm.d.adgeneration.ADG.AdFrameSize): void;
						public setReady(param0: boolean): void;
						public setCloseButtonType(param0: number): void;
						public preload(): void;
						public setLandscapeBackgroundType(param0: number): void;
						public setFillerLimit(param0: number): void;
						public show(): boolean;
						public setTemplateType(param0: number): void;
						public setActivity(param0: globalAndroid.content.Context): void;
						public callADGShow(): void;
						public setAdScale(param0: number): void;
						public setPortraitTemplateType(param0: com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateType): void;
						public addHeaderBiddingParamsWithAmznAdResponse(param0: any): void;
						public setEnableSound(param0: boolean): void;
						public setPortraitCloseButtonType(param0: number): void;
						public setLandscapeTemplateType(param0: number): void;
						public setSpan(param0: number, param1: boolean): void;
						public isShow(): boolean;
						public setFullScreen(param0: boolean): void;
						public isReady(): boolean;
						public setLocationId(param0: string): void;
						public setPortraitBackgroundType(param0: number): void;
						public setShow(param0: boolean): void;
						public setPreventAccidentalClick(param0: boolean): void;
						public setAdListener(param0: com.socdm.d.adgeneration.interstitial.ADGInterstitialListener): void;
						public isEnableSound(): boolean;
						public setLandscapeTemplateType(param0: com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateType): void;
						public setMiddleware(param0: com.socdm.d.adgeneration.ADGConsts.ADGMiddleware): void;
						public addRequestOptionParam(param0: string, param1: string): void;
						public setPortraitTemplateType(param0: number): void;
						public setAdBackGroundColor(param0: number): void;
					}
					export module ADGInterstitial {
						export class ADGListenerProxy extends com.socdm.d.adgeneration.ADGListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.ADGInterstitial.ADGListenerProxy>;
							public onReceiveAd(param0: native.Array<any>): void;
							public onReceiveAd(): void;
							public onClickAd(): void;
							public onReceiveAd(param0: any): void;
							public onFailedToReceiveAd(param0: com.socdm.d.adgeneration.ADGConsts.ADGErrorCode): void;
						}
						export class CloseAction {
							public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.ADGInterstitial.CloseAction>;
							public onClick(param0: globalAndroid.view.View): void;
						}
						export class ShowRunnable {
							public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.ADGInterstitial.ShowRunnable>;
							public constructor(param0: com.socdm.d.adgeneration.interstitial.ADGInterstitial);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export abstract class ADGInterstitialListener extends com.socdm.d.adgeneration.ADGListener {
						public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.ADGInterstitialListener>;
						public constructor();
						public onCloseInterstitial(): void;
						public constructor(param0: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export class ADGInterstitialRecipient extends com.socdm.d.adgeneration.observer.ADGRecipient {
						public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.ADGInterstitialRecipient>;
						public constructor(param0: com.socdm.d.adgeneration.interstitial.ADGInterstitial);
						public onMessage(param0: com.socdm.d.adgeneration.observer.ADGMessage): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export class ShowController {
						public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.ShowController>;
						public keySet(): java.util.Set;
						public isShow(param0: string): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public remove(param0: string): void;
						public load(): void;
						public cache(param0: string, param1: number, param2: boolean): void;
						public reset(param0: string): void;
						public next(param0: string): void;
						public constructor(param0: globalAndroid.content.Context, param1: string);
						public cache(param0: string, param1: number, param2: number, param3: boolean): void;
						public containsKey(param0: string): boolean;
						public save(): void;
						public clear(): void;
						public cache(param0: string, param1: com.socdm.d.adgeneration.interstitial.ShowController.AdShowCount): void;
					}
					export module ShowController {
						export class AdShowCount {
							public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.ShowController.AdShowCount>;
							public next(): void;
							public constructor(param0: com.socdm.d.adgeneration.interstitial.ShowController, param1: number, param2: number, param3: boolean);
							public isShow(): boolean;
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export abstract class BaseTemplate {
							public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.BaseTemplate>;
							public setBackgroundFactory(param0: com.socdm.d.adgeneration.interstitial.templates.partsfactory.BackgroundFactory): void;
							public setBackgroundType(param0: number): void;
							public setCloseButtonType(param0: number): void;
							public setCloseButtonFactory(param0: com.socdm.d.adgeneration.interstitial.templates.partsfactory.CloseButtonFactory): void;
							public getContainer(): globalAndroid.view.ViewGroup;
							public getBackgroundFactory(): com.socdm.d.adgeneration.interstitial.templates.partsfactory.BackgroundFactory;
							public getGapForDisplay(param0: number, param1: number): number;
							public initTemplate(): void;
							public getAdgLayout(): com.socdm.d.adgeneration.interstitial.templates.layout.ADGLayout;
							public createCloseButton(param0: globalAndroid.view.View.OnClickListener): void;
							public getGapForDisplay(param0: number): number;
							public refresh(): void;
							public createCloseButton(): void;
							public getCloseButtonLayout(): com.socdm.d.adgeneration.interstitial.templates.layout.CloseButtonLayout;
							public getCloseButtonFactory(): com.socdm.d.adgeneration.interstitial.templates.partsfactory.CloseButtonFactory;
							public constructor(param0: globalAndroid.content.Context);
							public setContainer(param0: globalAndroid.view.ViewGroup): void;
							public checkViews(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export class FullScreenTemplate extends com.socdm.d.adgeneration.interstitial.templates.BaseTemplate {
							public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.FullScreenTemplate>;
							public initTemplate(): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export class Landscape300x250Template extends com.socdm.d.adgeneration.interstitial.templates.BaseTemplate {
							public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.Landscape300x250Template>;
							public initTemplate(): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export class Portrait300x250Template extends com.socdm.d.adgeneration.interstitial.templates.BaseTemplate {
							public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.Portrait300x250Template>;
							public initTemplate(): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export class TemplateFactory {
							public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.TemplateFactory>;
							public constructor();
							public static create(param0: globalAndroid.content.Context, param1: com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateType, param2: com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateOrientation): com.socdm.d.adgeneration.interstitial.templates.BaseTemplate;
						}
						export module TemplateFactory {
							export class TemplateOrientation {
								public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateOrientation>;
								public static PORTRAIT: com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateOrientation;
								public static LANDSCAPE: com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateOrientation;
								public static values(): native.Array<com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateOrientation>;
								public static valueOf(param0: string): com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateOrientation;
							}
							export class TemplateType {
								public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateType>;
								public static TEMPLATE_TYPE_300x250_1: com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateType;
								public static TEMPLATE_TYPE_FULL_SCREEN: com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateType;
								public static fromIndex(param0: number): com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateType;
								public static values(): native.Array<com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateType>;
								public static valueOf(param0: string): com.socdm.d.adgeneration.interstitial.templates.TemplateFactory.TemplateType;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export module layout {
							export class ADGLayout {
								public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.layout.ADGLayout>;
								public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
								public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
								public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
								public addView(param0: globalAndroid.view.View): void;
								public constructor(param0: globalAndroid.content.Context);
								public addView(param0: globalAndroid.view.View, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export module layout {
							export class CloseButtonLayout {
								public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.layout.CloseButtonLayout>;
								public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
								public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
								public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
								public addView(param0: globalAndroid.view.View): void;
								public constructor(param0: globalAndroid.content.Context);
								public addView(param0: globalAndroid.view.View, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export module parts {
							export class CBImageView implements com.socdm.d.adgeneration.interstitial.templates.parts.CloseButton {
								public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.parts.CBImageView>;
								public get(): com.socdm.d.adgeneration.interstitial.templates.parts.CBImageView;
								public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: string);
								public get(): globalAndroid.view.View;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export module parts {
							export class CloseButton {
								public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.parts.CloseButton>;
								/**
								 * Constructs a new instance of the com.socdm.d.adgeneration.interstitial.templates.parts.CloseButton interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									get(): globalAndroid.view.View;
								});
								public constructor();
								public get(): globalAndroid.view.View;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export module partsfactory {
							export class Background315x300Factory extends com.socdm.d.adgeneration.interstitial.templates.partsfactory.BackgroundFactory {
								public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.partsfactory.Background315x300Factory>;
								public getAvailableItems(): java.util.List;
								public constructor(param0: globalAndroid.content.Context);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export module partsfactory {
							export abstract class BackgroundFactory {
								public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.partsfactory.BackgroundFactory>;
								public getAvailableItems(): java.util.List;
								public get(param0: number): globalAndroid.graphics.drawable.BitmapDrawable;
								public constructor(param0: globalAndroid.content.Context);
								public intToString3(param0: number): string;
								public fileName(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export module partsfactory {
							export class CloseButton300x30Factory extends com.socdm.d.adgeneration.interstitial.templates.partsfactory.CloseButtonFactory {
								public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.partsfactory.CloseButton300x30Factory>;
								public getAvailableItems(): java.util.List;
								public constructor(param0: globalAndroid.content.Context);
								public getHeight(): number;
								public getWidth(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export module partsfactory {
							export class CloseButton40x40Factory extends com.socdm.d.adgeneration.interstitial.templates.partsfactory.CloseButtonFactory {
								public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.partsfactory.CloseButton40x40Factory>;
								public getAvailableItems(): java.util.List;
								public constructor(param0: globalAndroid.content.Context);
								public getHeight(): number;
								public getWidth(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module interstitial {
					export module templates {
						export module partsfactory {
							export abstract class CloseButtonFactory {
								public static class: java.lang.Class<com.socdm.d.adgeneration.interstitial.templates.partsfactory.CloseButtonFactory>;
								public setDesignType(param0: number): void;
								public getAvailableItems(): java.util.List;
								public constructor(param0: globalAndroid.content.Context);
								public getDesignType(): number;
								public get(): com.socdm.d.adgeneration.interstitial.templates.parts.CloseButton;
								public intToString3(param0: number): string;
								public getContext(): globalAndroid.content.Context;
								public getHeight(): number;
								public fileName(param0: number): string;
								public getWidth(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class ADGNativeInterface {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.ADGNativeInterface>;
						public setParam(param0: string): void;
						public static isNormalCondition(): boolean;
						public setViewablePayment(param0: boolean): void;
						public setBeacon(param0: string): void;
						public setMovie(param0: number): void;
						public setAdId(param0: string): void;
						public stopChild(): void;
						public setEnableSound(param0: java.lang.Boolean): void;
						public finishChild(): void;
						public static isValidClassName(param0: string): boolean;
						public setExpandFrame(param0: boolean): void;
						public setRotateTimer(param0: number): void;
						public isLateImp(): java.lang.Boolean;
						public isProcessing(): boolean;
						public setEnableTestMode(param0: java.lang.Boolean): void;
						public constructor();
						public loadChild(): java.lang.Boolean;
						public setListener(param0: com.socdm.d.adgeneration.mediation.ADGNativeInterfaceListener): void;
						public setContext(param0: globalAndroid.content.Context): void;
						public startChild(): void;
						public setClassName(param0: string): void;
						public setSize(param0: number, param1: number): void;
						public setLayout(param0: globalAndroid.view.ViewGroup): void;
						public setCallNativeAdTrackers(param0: java.lang.Boolean): void;
						public isShowingOriginInterstitial(): boolean;
						public isOriginInterstitial(): boolean;
						public setUsePartsResponse(param0: java.lang.Boolean): void;
					}
					export module ADGNativeInterface {
						export class ReachRotateTask {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.ADGNativeInterface.ReachRotateTask>;
							public run(): void;
						}
						export class TimeoutTask {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.ADGNativeInterface.TimeoutTask>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export abstract class ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild>;
						public ct: globalAndroid.content.Context;
						public listener: com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChildListener;
						public adId: string;
						public param: string;
						public layout: globalAndroid.view.ViewGroup;
						public width: java.lang.Integer;
						public height: java.lang.Integer;
						public enableSound: java.lang.Boolean;
						public enableTestMode: java.lang.Boolean;
						public usePartsResponse: java.lang.Boolean;
						public callNativeAdTrackers: java.lang.Boolean;
						public expandFrame: java.lang.Boolean;
						public viewablePayment: java.lang.Boolean;
						public beacon: string;
						public setParam(param0: string): void;
						public setEnableTestMode(param0: java.lang.Boolean): void;
						public constructor();
						public setContext(param0: globalAndroid.content.Context): void;
						public finishProcess(): void;
						public setViewablePayment(param0: boolean): void;
						public loadProcess(): boolean;
						public setBeacon(param0: string): void;
						public setListener(param0: com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChildListener): void;
						public setSize(param0: number, param1: number): void;
						public setLayout(param0: globalAndroid.view.ViewGroup): void;
						public setCallNativeAdTrackers(param0: java.lang.Boolean): void;
						public setAdId(param0: string): void;
						public isOriginInterstitial(): boolean;
						public setUsePartsResponse(param0: java.lang.Boolean): void;
						public setEnableSound(param0: java.lang.Boolean): void;
						public setExpandFrame(param0: boolean): void;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
						public errorProcess(param0: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export abstract class ADGNativeInterfaceChildListener {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChildListener>;
						public onReceiveAd(param0: any): void;
						public onShowInterstitial(): void;
						public constructor();
						public onFailedToReceiveAd(): void;
						public onClickAd(): void;
						public onCompleteMovieAd(): void;
						public onCloseInterstitial(): void;
						public onReceiveAd(): void;
						public onReadyMediation(param0: any): void;
						public onReplayMovieAd(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export abstract class ADGNativeInterfaceListener {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.ADGNativeInterfaceListener>;
						public onReceiveAd(param0: any): void;
						public constructor();
						public onFailedToReceiveAd(): void;
						public onReachRotateTime(): void;
						public onClickAd(): void;
						public onCompleteMovieAd(): void;
						public onCloseInterstitial(): void;
						public onReceiveAd(): void;
						public onReadyMediation(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class AJAMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AJAMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class AmazonMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AmazonMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
						public errorProcess(param0: java.lang.Exception): void;
					}
					export module AmazonMediation {
						export class AdInterfaceHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AmazonMediation.AdInterfaceHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class AppVadorInterstitialMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AppVadorInterstitialMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
						public errorProcess(param0: java.lang.Exception): void;
					}
					export module AppVadorInterstitialMediation {
						export class AdInterfaceHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AppVadorInterstitialMediation.AdInterfaceHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class AppVadorMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AppVadorMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
						public errorProcess(param0: java.lang.Exception): void;
					}
					export module AppVadorMediation {
						export class AdInterfaceHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AppVadorMediation.AdInterfaceHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class AudienceNetworkInterstitialMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AudienceNetworkInterstitialMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
						public errorProcess(param0: java.lang.Exception): void;
					}
					export module AudienceNetworkInterstitialMediation {
						export class AudienceNetworkHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AudienceNetworkInterstitialMediation.AudienceNetworkHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class AudienceNetworkMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AudienceNetworkMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
						public errorProcess(param0: java.lang.Exception): void;
					}
					export module AudienceNetworkMediation {
						export class AdSize {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AudienceNetworkMediation.AdSize>;
							public static BANNER_320_50: com.socdm.d.adgeneration.mediation.AudienceNetworkMediation.AdSize;
							public static INTERSTITIAL: com.socdm.d.adgeneration.mediation.AudienceNetworkMediation.AdSize;
							public static BANNER_HEIGHT_50: com.socdm.d.adgeneration.mediation.AudienceNetworkMediation.AdSize;
							public static BANNER_HEIGHT_90: com.socdm.d.adgeneration.mediation.AudienceNetworkMediation.AdSize;
							public static RECTANGLE_HEIGHT_250: com.socdm.d.adgeneration.mediation.AudienceNetworkMediation.AdSize;
							public static values(): native.Array<com.socdm.d.adgeneration.mediation.AudienceNetworkMediation.AdSize>;
							public getWidth(): number;
							public getHeight(): number;
							public static valueOf(param0: string): com.socdm.d.adgeneration.mediation.AudienceNetworkMediation.AdSize;
						}
						export class AudienceNetworkHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AudienceNetworkMediation.AudienceNetworkHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class AudienceNetworkNativeBannerMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AudienceNetworkNativeBannerMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public errorProcess(param0: java.lang.Exception): void;
					}
					export module AudienceNetworkNativeBannerMediation {
						export class AdListenerHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AudienceNetworkNativeBannerMediation.AdListenerHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class AudienceNetworkNativeMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AudienceNetworkNativeMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
						public errorProcess(param0: java.lang.Exception): void;
					}
					export module AudienceNetworkNativeMediation {
						export class AdListenerHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AudienceNetworkNativeMediation.AdListenerHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
						export class NativeAdViewProvider {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AudienceNetworkNativeMediation.NativeAdViewProvider>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
						export class NativeAdsManagerListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.AudienceNetworkNativeMediation.NativeAdsManagerListener>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class FiveInterstitialMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.FiveInterstitialMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
					}
					export module FiveInterstitialMediation {
						export class FiveAdListenerHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.FiveInterstitialMediation.FiveAdListenerHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class FiveMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.FiveMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
					}
					export module FiveMediation {
						export class FiveAdListenerHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.FiveMediation.FiveAdListenerHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class GADAdMobAdvancedMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.GADAdMobAdvancedMediation>;
						public constructor();
						public createProxyInstance(param0: java.lang.Class, param1: java.lang.reflect.InvocationHandler): any;
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
					}
					export module GADAdMobAdvancedMediation {
						export class AdMobListenerHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.GADAdMobAdvancedMediation.AdMobListenerHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
						export class AppInstallAdLoadedListenerHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.GADAdMobAdvancedMediation.AppInstallAdLoadedListenerHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
						export class ContentAdLoadedListenerHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.GADAdMobAdvancedMediation.ContentAdLoadedListenerHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class GADAdMobExpressMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.GADAdMobExpressMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
					}
					export module GADAdMobExpressMediation {
						export class AdMobListenerHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.GADAdMobExpressMediation.AdMobListenerHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class GADAdMobInterstitialMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.GADAdMobInterstitialMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
					}
					export module GADAdMobInterstitialMediation {
						export class AdMobListenerHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.GADAdMobInterstitialMediation.AdMobListenerHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class GADAdMobMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.GADAdMobMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
					}
					export module GADAdMobMediation {
						export class AdMobAdSizes {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.GADAdMobMediation.AdMobAdSizes>;
							public static SMART_BANNER: com.socdm.d.adgeneration.mediation.GADAdMobMediation.AdMobAdSizes;
							public static BANNER: com.socdm.d.adgeneration.mediation.GADAdMobMediation.AdMobAdSizes;
							public static LARGE_BANNER: com.socdm.d.adgeneration.mediation.GADAdMobMediation.AdMobAdSizes;
							public static IAB_MRECT: com.socdm.d.adgeneration.mediation.GADAdMobMediation.AdMobAdSizes;
							public static IAB_BANNER: com.socdm.d.adgeneration.mediation.GADAdMobMediation.AdMobAdSizes;
							public static IAB_LEADERBOARD: com.socdm.d.adgeneration.mediation.GADAdMobMediation.AdMobAdSizes;
							public static valueOf(param0: string): com.socdm.d.adgeneration.mediation.GADAdMobMediation.AdMobAdSizes;
							public static values(): native.Array<com.socdm.d.adgeneration.mediation.GADAdMobMediation.AdMobAdSizes>;
						}
						export class AdMobListenerHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.GADAdMobMediation.AdMobListenerHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class GunosyAdsMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.GunosyAdsMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class MoPubInterstitialMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.MoPubInterstitialMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
					}
					export module MoPubInterstitialMediation {
						export class MoPubListenerHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.MoPubInterstitialMediation.MoPubListenerHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class MoPubMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.MoPubMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
					}
					export module MoPubMediation {
						export class MoPubListenerHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.MoPubMediation.MoPubListenerHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class MoPubNativeMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.MoPubNativeMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
					}
					export module MoPubNativeMediation {
						export class MoPubListenerHandler {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.MoPubNativeMediation.MoPubListenerHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class SideMenuMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.SideMenuMediation>;
						public callBeacon(): void;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
						public errorProcess(param0: java.lang.Exception): void;
					}
					export module SideMenuMediation {
						export class MyWebChromeClient {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.SideMenuMediation.MyWebChromeClient>;
							public onCreateWindow(param0: globalAndroid.webkit.WebView, param1: boolean, param2: boolean, param3: globalAndroid.os.Message): boolean;
						}
						export class MyWebViewClient {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.SideMenuMediation.MyWebViewClient>;
							public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mediation {
					export class VASTMediation extends com.socdm.d.adgeneration.mediation.ADGNativeInterfaceChild {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.VASTMediation>;
						public constructor();
						public finishProcess(): void;
						public loadProcess(): boolean;
						public startProcess(): void;
						public stopProcess(): void;
						public checkOSVersion(): boolean;
					}
					export module VASTMediation {
						export class VideoAdListener extends com.socdm.d.adgeneration.video.ADGPlayerAdListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.mediation.VASTMediation.VideoAdListener>;
							public onReadyToPlayAd(): void;
							public onClickAd(): void;
							public onFailedToPlayAd(param0: com.socdm.d.adgeneration.video.ADGPlayerError): void;
							public onStartVideo(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mraid {
					export class MRAIDBridge {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mraid.MRAIDBridge>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mraid {
					export class MRAIDCommand {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mraid.MRAIDCommand>;
						public static CLOSE: com.socdm.d.adgeneration.mraid.MRAIDCommand;
						public static EXPAND: com.socdm.d.adgeneration.mraid.MRAIDCommand;
						public static USE_CUSTOM_CLOSE: com.socdm.d.adgeneration.mraid.MRAIDCommand;
						public static OPEN: com.socdm.d.adgeneration.mraid.MRAIDCommand;
						public static RESIZE: com.socdm.d.adgeneration.mraid.MRAIDCommand;
						public static SET_ORIENTATION_PROPERTIES: com.socdm.d.adgeneration.mraid.MRAIDCommand;
						public static UNSPECIFIED: com.socdm.d.adgeneration.mraid.MRAIDCommand;
						public static valueOf(param0: string): com.socdm.d.adgeneration.mraid.MRAIDCommand;
						public static values(): native.Array<com.socdm.d.adgeneration.mraid.MRAIDCommand>;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mraid {
					export class MRAIDHandler {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mraid.MRAIDHandler>;
						public static matchesMRAIDScheme(param0: string): boolean;
						public static createMRAIDInjectionResponse(param0: globalAndroid.content.Context): globalAndroid.webkit.WebResourceResponse;
						public constructor(param0: globalAndroid.content.Context);
						public static matchesInjectionUrl(param0: string): boolean;
						public initializeState(): void;
						public static injectMRAIDScriptTag(param0: string): string;
						public setWebView(param0: globalAndroid.webkit.WebView): void;
						public setIsInterstitial(param0: boolean): void;
						public getWebView(): globalAndroid.webkit.WebView;
						public setIsViewable(param0: boolean): void;
						public handleUrlLoading(param0: string): com.socdm.d.adgeneration.mraid.MRAIDHandlerResult;
						public static getCurrentHandler(param0: native.Array<com.socdm.d.adgeneration.mraid.MRAIDHandler>, param1: globalAndroid.webkit.WebView): com.socdm.d.adgeneration.mraid.MRAIDHandler;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mraid {
					export class MRAIDHandlerResult {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mraid.MRAIDHandlerResult>;
						public getOpenURL(): globalAndroid.net.Uri;
						public getShouldLoadRequest(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mraid {
					export class MRAIDPlacementType {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mraid.MRAIDPlacementType>;
						public static INLINE: com.socdm.d.adgeneration.mraid.MRAIDPlacementType;
						public static INTERSTITIAL: com.socdm.d.adgeneration.mraid.MRAIDPlacementType;
						public static valueOf(param0: string): com.socdm.d.adgeneration.mraid.MRAIDPlacementType;
						public static values(): native.Array<com.socdm.d.adgeneration.mraid.MRAIDPlacementType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mraid {
					export class MRAIDScreenMetrics {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mraid.MRAIDScreenMetrics>;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module mraid {
					export class MRAIDState {
						public static class: java.lang.Class<com.socdm.d.adgeneration.mraid.MRAIDState>;
						public static LOADING: com.socdm.d.adgeneration.mraid.MRAIDState;
						public static DEFAULT: com.socdm.d.adgeneration.mraid.MRAIDState;
						public static RESIZED: com.socdm.d.adgeneration.mraid.MRAIDState;
						public static EXPANDED: com.socdm.d.adgeneration.mraid.MRAIDState;
						public static HIDDEN: com.socdm.d.adgeneration.mraid.MRAIDState;
						public static values(): native.Array<com.socdm.d.adgeneration.mraid.MRAIDState>;
						public static valueOf(param0: string): com.socdm.d.adgeneration.mraid.MRAIDState;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export class ADGData {
						public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGData>;
						public getLabel(): string;
						public getExt(): any;
						public constructor(param0: org.json.JSONObject);
						public getValue(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export class ADGImage {
						public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGImage>;
						public getWidth(): number;
						public getUrl(): string;
						public getExt(): any;
						public constructor(param0: org.json.JSONObject);
						public getHeight(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export class ADGInformationIconView {
						public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGInformationIconView>;
						public constructor(param0: globalAndroid.content.Context, param1: com.socdm.d.adgeneration.nativead.ADGNativeAd, param2: boolean, param3: com.socdm.d.adgeneration.nativead.ADGInformationIconView.Corner, param4: com.socdm.d.adgeneration.nativead.ADGInformationIconView.BackgroundType);
						public getOptOutUrl(): string;
						public constructor(param0: globalAndroid.content.Context, param1: com.socdm.d.adgeneration.nativead.ADGNativeAd);
					}
					export module ADGInformationIconView {
						export class BackgroundType {
							public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGInformationIconView.BackgroundType>;
							public static WHITE: com.socdm.d.adgeneration.nativead.ADGInformationIconView.BackgroundType;
							public static BLACK: com.socdm.d.adgeneration.nativead.ADGInformationIconView.BackgroundType;
							public static values(): native.Array<com.socdm.d.adgeneration.nativead.ADGInformationIconView.BackgroundType>;
							public static valueOf(param0: string): com.socdm.d.adgeneration.nativead.ADGInformationIconView.BackgroundType;
						}
						export class Corner {
							public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGInformationIconView.Corner>;
							public static TOP_LEFT: com.socdm.d.adgeneration.nativead.ADGInformationIconView.Corner;
							public static TOP_RIGHT: com.socdm.d.adgeneration.nativead.ADGInformationIconView.Corner;
							public static BOTTOM_LEFT: com.socdm.d.adgeneration.nativead.ADGInformationIconView.Corner;
							public static BOTTOM_RIGHT: com.socdm.d.adgeneration.nativead.ADGInformationIconView.Corner;
							public static valueOf(param0: string): com.socdm.d.adgeneration.nativead.ADGInformationIconView.Corner;
							public static values(): native.Array<com.socdm.d.adgeneration.nativead.ADGInformationIconView.Corner>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export class ADGLink {
						public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGLink>;
						public getFallback(): string;
						public getClicktrackers(): java.util.ArrayList;
						public callOnClick(): void;
						public setClickEvent(param0: globalAndroid.view.View, param1: com.socdm.d.adgeneration.nativead.ADGNativeAdOnClickListener): void;
						public getUrl(): string;
						public getExt(): any;
						public constructor(param0: org.json.JSONObject);
						public getPostClicktrackers(): java.util.ArrayList;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export class ADGMediaView {
						public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGMediaView>;
						public setIsTiny(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public setFullscreenVideoPlayerEnabled(param0: boolean): void;
						public static safeRemoveFromParentView(param0: globalAndroid.view.ViewGroup): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public load(): void;
						public destroy(): void;
						public setAdgNativeAd(param0: com.socdm.d.adgeneration.nativead.ADGNativeAd): void;
						public isFullscreenVideoPlayerEnabled(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
					export module ADGMediaView {
						export class VideoAdListener extends com.socdm.d.adgeneration.video.ADGPlayerAdListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGMediaView.VideoAdListener>;
							public onReadyToPlayAd(): void;
							public onClickAd(): void;
							public onFailedToPlayAd(param0: com.socdm.d.adgeneration.video.ADGPlayerError): void;
							public onStartVideo(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export class ADGNativeAd {
						public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGNativeAd>;
						public setClickEvent(param0: globalAndroid.content.Context, param1: globalAndroid.view.View, param2: com.socdm.d.adgeneration.nativead.ADGNativeAdOnClickListener): void;
						public getVideo(): com.socdm.d.adgeneration.nativead.ADGVideo;
						public getInformationIcon(): com.socdm.d.adgeneration.nativead.ADGData;
						public getCtatext(): com.socdm.d.adgeneration.nativead.ADGData;
						public getLink(): com.socdm.d.adgeneration.nativead.ADGLink;
						public canLoadMedia(): boolean;
						public getExt(): any;
						public getIconImage(): com.socdm.d.adgeneration.nativead.ADGImage;
						public getInformationIconViewDefault(): boolean;
						public getOptout(): com.socdm.d.adgeneration.nativead.ADGData;
						public getJstracker(): string;
						public callJstracker(param0: globalAndroid.content.Context): void;
						public getMainImage(): com.socdm.d.adgeneration.nativead.ADGImage;
						public setMultiNativeAdBeacon(param0: string): void;
						public getSponsored(): com.socdm.d.adgeneration.nativead.ADGData;
						public getImptrackers(): java.util.ArrayList;
						public constructor(param0: org.json.JSONObject);
						public getMultiNativeAdBeacon(): string;
						public getDesc(): com.socdm.d.adgeneration.nativead.ADGData;
						public static callTrackers(param0: java.util.List, param1: boolean): void;
						public static callTrackers(param0: java.util.List): void;
						public setInformationIconViewDefault(param0: boolean): void;
						public callOnClick(): void;
						public getAccompany(): com.socdm.d.adgeneration.nativead.ADGData;
						public callClickTracker(): void;
						public getVer(): java.lang.Integer;
						public getNativeAdType(): com.socdm.d.adgeneration.nativead.ADGNativeAdType;
						public setClickEvent(param0: globalAndroid.view.View): void;
						public getTitle(): com.socdm.d.adgeneration.nativead.ADGTitle;
					}
					export module ADGNativeAd {
						export class AssetID {
							public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID>;
							public static NONE: com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID;
							public static TITLE: com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID;
							public static MAIN_IMAGE: com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID;
							public static ICON_IMAGE: com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID;
							public static SPONSORED: com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID;
							public static DESC: com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID;
							public static CTATEXT: com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID;
							public static VIDEO: com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID;
							public static ACCOMPANY: com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID;
							public static OPTOUT: com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID;
							public static INFORMATION_ICON: com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID;
							public static values(): native.Array<com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID>;
							public static valueOf(param0: string): com.socdm.d.adgeneration.nativead.ADGNativeAd.AssetID;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export abstract class ADGNativeAdOnClickListener {
						public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGNativeAdOnClickListener>;
						public constructor();
						public onClickAd(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export class ADGNativeAdType {
						public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGNativeAdType>;
						public static Undefined: com.socdm.d.adgeneration.nativead.ADGNativeAdType;
						public static Default: com.socdm.d.adgeneration.nativead.ADGNativeAdType;
						public static GunosyAds: com.socdm.d.adgeneration.nativead.ADGNativeAdType;
						public static AmebaJointAlliance: com.socdm.d.adgeneration.nativead.ADGNativeAdType;
						public static KEY: string;
						public static values(): native.Array<com.socdm.d.adgeneration.nativead.ADGNativeAdType>;
						public static valueOf(param0: string): com.socdm.d.adgeneration.nativead.ADGNativeAdType;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export class ADGTitle {
						public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGTitle>;
						public getExt(): any;
						public constructor(param0: org.json.JSONObject);
						public getText(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export class ADGVideo {
						public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.ADGVideo>;
						public getVasttag(): string;
						public constructor(param0: org.json.JSONObject);
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export module icon {
						export class ADGAnimation {
							public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.icon.ADGAnimation>;
							public initialize(param0: number, param1: number, param2: number, param3: number): void;
							public constructor(param0: globalAndroid.view.View, param1: number, param2: number, param3: number);
							public applyTransformation(param0: number, param1: globalAndroid.view.animation.Transformation): void;
							public willChangeBounds(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export module icon {
						export class ADGImageView {
							public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.icon.ADGImageView>;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: java.lang.Integer, param3: java.lang.Integer);
						}
						export module ADGImageView {
							export class AsyncTaskHttpRequest {
								public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.icon.ADGImageView.AsyncTaskHttpRequest>;
								public constructor(param0: com.socdm.d.adgeneration.nativead.icon.ADGImageView, param1: globalAndroid.widget.ImageView, param2: java.lang.Integer, param3: java.lang.Integer);
							}
							export class BitmapCache {
								public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.icon.ADGImageView.BitmapCache>;
								public static getBitmapFromMemoryCache(param0: string): globalAndroid.graphics.Bitmap;
								public static createCacheIfNeeded(): void;
								public static addBitmapToMemoryCache(param0: string, param1: globalAndroid.graphics.Bitmap): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export module template {
						export class ADGNativeAdTemplateBannerView extends com.socdm.d.adgeneration.nativead.template.ADGNativeAdTemplateBase {
							public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.template.ADGNativeAdTemplateBannerView>;
							public destroy(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public setListener(param0: com.socdm.d.adgeneration.nativead.template.ADGNativeAdTemplateListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public apply(param0: com.socdm.d.adgeneration.nativead.ADGNativeAd): java.lang.Boolean;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export module template {
						export abstract class ADGNativeAdTemplateBase {
							public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.template.ADGNativeAdTemplateBase>;
							public destroy(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public setListener(param0: com.socdm.d.adgeneration.nativead.template.ADGNativeAdTemplateListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public apply(param0: com.socdm.d.adgeneration.nativead.ADGNativeAd): java.lang.Boolean;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export module template {
						export class ADGNativeAdTemplateFactory {
							public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.template.ADGNativeAdTemplateFactory>;
							public constructor();
							public static createTemplate(param0: globalAndroid.content.Context, param1: globalAndroid.graphics.Point): com.socdm.d.adgeneration.nativead.template.ADGNativeAdTemplateBase;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export module template {
						export class ADGNativeAdTemplateListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.template.ADGNativeAdTemplateListener>;
							/**
							 * Constructs a new instance of the com.socdm.d.adgeneration.nativead.template.ADGNativeAdTemplateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onClickAd(): void;
							});
							public constructor();
							public onClickAd(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module nativead {
					export module template {
						export class ADGNativeAdTemplateRectView extends com.socdm.d.adgeneration.nativead.template.ADGNativeAdTemplateBase {
							public static class: java.lang.Class<com.socdm.d.adgeneration.nativead.template.ADGNativeAdTemplateRectView>;
							public destroy(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public setListener(param0: com.socdm.d.adgeneration.nativead.template.ADGNativeAdTemplateListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public apply(param0: com.socdm.d.adgeneration.nativead.ADGNativeAd): java.lang.Boolean;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module observer {
					export class ADGMessage {
						public static class: java.lang.Class<com.socdm.d.adgeneration.observer.ADGMessage>;
						public constructor(param0: string, param1: any);
						public getType(): string;
						public getMessage(): any;
						public setType(param0: string): void;
						public setMessage(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module observer {
					export abstract class ADGRecipient extends com.socdm.d.adgeneration.observer.Observer {
						public static class: java.lang.Class<com.socdm.d.adgeneration.observer.ADGRecipient>;
						public tag: string;
						public onMessage(param0: com.socdm.d.adgeneration.observer.ADGMessage): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module observer {
					export class Observer {
						public static class: java.lang.Class<com.socdm.d.adgeneration.observer.Observer>;
						/**
						 * Constructs a new instance of the com.socdm.d.adgeneration.observer.Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onMessage(param0: com.socdm.d.adgeneration.observer.ADGMessage): void;
						});
						public constructor();
						public onMessage(param0: com.socdm.d.adgeneration.observer.ADGMessage): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module observer {
					export class Subject {
						public static class: java.lang.Class<com.socdm.d.adgeneration.observer.Subject>;
						/**
						 * Constructs a new instance of the com.socdm.d.adgeneration.observer.Subject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							sendMessage(param0: com.socdm.d.adgeneration.observer.ADGMessage): void;
							addObserver(param0: com.socdm.d.adgeneration.observer.Observer): void;
							deleteObserver(param0: com.socdm.d.adgeneration.observer.Observer): void;
						});
						public constructor();
						public sendMessage(param0: com.socdm.d.adgeneration.observer.ADGMessage): void;
						public addObserver(param0: com.socdm.d.adgeneration.observer.Observer): void;
						public deleteObserver(param0: com.socdm.d.adgeneration.observer.Observer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class AES256Cipher {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.AES256Cipher>;
						public constructor();
						public static encrypt(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>): native.Array<number>;
						public static decrypt(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class AdIDUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.AdIDUtils>;
						public static getAdOptOut(): boolean;
						public constructor();
						public static traceFromException(param0: java.lang.Throwable): void;
						public static getGooglePSSet(): boolean;
						public static isFinished(): boolean;
						public static initAdIdThread(param0: globalAndroid.content.Context): void;
						public static checkProcess(param0: globalAndroid.content.Context, param1: com.socdm.d.adgeneration.utils.AdIDUtils.ProcessListener): void;
						public static getAdID(): string;
					}
					export module AdIDUtils {
						export class ProcessListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.utils.AdIDUtils.ProcessListener>;
							/**
							 * Constructs a new instance of the com.socdm.d.adgeneration.utils.AdIDUtils$ProcessListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								finishProcess(): void;
							});
							public constructor();
							public finishProcess(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class AssetUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.AssetUtils>;
						public constructor();
						public static getBitmap(param0: globalAndroid.content.Context, param1: string): globalAndroid.graphics.Bitmap;
						public static getMRAIDSource(param0: globalAndroid.content.Context): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class AsyncTaskListener {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.AsyncTaskListener>;
						/**
						 * Constructs a new instance of the com.socdm.d.adgeneration.utils.AsyncTaskListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: any): void;
							onError(param0: java.lang.Exception): void;
						});
						public constructor();
						public onSuccess(param0: any): void;
						public onError(param0: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class AsyncTaskUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.AsyncTaskUtils>;
						public constructor();
						public static stop(param0: globalAndroid.os.AsyncTask): void;
						public static execute(param0: globalAndroid.os.AsyncTask, param1: native.Array<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class BeaconUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.BeaconUtils>;
						public constructor();
						public static applyUserAgent(param0: globalAndroid.content.Context): void;
						public static callBeacon(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class BitUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.BitUtils>;
						public constructor();
						public static isBitON(param0: number, param1: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class ClassUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.ClassUtils>;
						public constructor();
						public static getEnum(param0: string, param1: string): java.lang.Enum;
						public static getPrivateField(param0: any, param1: string): any;
						public static getEnumSet(param0: string): java.util.EnumSet;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class DateUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.DateUtils>;
						public constructor();
						public static parseDate(param0: string): java.util.Date;
						public static formatDate(param0: java.util.Date): string;
						public static isPast(param0: string): boolean;
						public static isPast(param0: java.util.Date): boolean;
						public static addDates(param0: java.lang.Integer): java.util.Date;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class DisplayUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.DisplayUtils>;
						public constructor();
						public static getWC(): number;
						public static getClientOrigin(param0: globalAndroid.app.Activity): globalAndroid.graphics.Point;
						public static getClientSize(param0: globalAndroid.app.Activity): globalAndroid.graphics.Point;
						public static getScreenSize(param0: globalAndroid.content.Context): com.socdm.d.adgeneration.utils.DisplayUtils.Size;
						public static getDip(param0: globalAndroid.content.res.Resources, param1: number): number;
						public static getFP(): number;
						public static getPixels(param0: globalAndroid.content.res.Resources, param1: number): number;
					}
					export module DisplayUtils {
						export class Size {
							public static class: java.lang.Class<com.socdm.d.adgeneration.utils.DisplayUtils.Size>;
							public getWidth(): number;
							public getHeight(): number;
							public constructor(param0: number, param1: number);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class GeolocationProvider {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.GeolocationProvider>;
						public static getInstance(param0: globalAndroid.content.Context): com.socdm.d.adgeneration.utils.GeolocationProvider;
						public isValidLocation(): boolean;
						public lastKnownLocation(): globalAndroid.location.Location;
						public updateLocation(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class HttpURLConnectionTask {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.HttpURLConnectionTask>;
						public constructor(param0: string, param1: com.socdm.d.adgeneration.utils.AsyncTaskListener);
						public getUserAgent(): string;
						public getMethod(): string;
						public setUserAgent(param0: string): void;
						public getConnection(): java.net.HttpURLConnection;
						public setMethod(param0: string): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class HttpUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.HttpUtils>;
						public static getUserAgent(param0: globalAndroid.content.Context): string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class JsonUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.JsonUtils>;
						public static optInteger(param0: org.json.JSONObject, param1: string): java.lang.Integer;
						public static toJsonStr(param0: string): string;
						public constructor();
						public static JSONArrayToArrayList(param0: org.json.JSONArray): java.util.ArrayList;
						public static toJson(param0: org.json.JSONObject): string;
						public static mapToJson(param0: java.util.Map): org.json.JSONObject;
						public static optInteger(param0: org.json.JSONArray, param1: number): java.lang.Integer;
						public static fromJson(param0: string): org.json.JSONObject;
						public static toJson(param0: org.json.JSONArray): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class LimitCounter {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.LimitCounter>;
						public static NO_LIMIT: number;
						public constructor(param0: number);
						public isLimit(): boolean;
						public count(): void;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class LogUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.LogUtils>;
						public constructor();
						public static setLogLevel(param0: number): void;
						public static v(): void;
						public static d(): void;
						public static w(param0: string, param1: java.lang.Throwable): void;
						public static i(): void;
						public static d(param0: string): void;
						public static w(param0: string): void;
						public static v(param0: string): void;
						public static e(param0: string): void;
						public static i(param0: string): void;
						public static e(param0: string, param1: java.lang.Throwable): void;
						public static getMetaInfo(param0: java.lang.StackTraceElement): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class NetworkUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.NetworkUtils>;
						public constructor();
						public static isNetworkConnected(param0: globalAndroid.content.Context): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class NumberUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.NumberUtils>;
						public constructor();
						public static getHeight(param0: number, param1: number, param2: number, param3: number): number;
						public static getWidth(param0: number, param1: number, param2: number, param3: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class SharedPreferencesUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.SharedPreferencesUtils>;
						public constructor();
						public static commitOrApply(param0: globalAndroid.content.SharedPreferences.Editor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class StringUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.StringUtils>;
						public static EMPTY: string;
						public static extendRequestParam(param0: java.lang.StringBuilder, param1: string, param2: string): void;
						public static join(param0: java.util.Iterator, param1: string): string;
						public constructor();
						public static queryToMap(param0: string): java.util.Map;
						public static join(param0: java.util.Collection, param1: string): string;
						public static urlEncode(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class TimerUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.TimerUtils>;
						public constructor();
						public static timerTask(param0: java.lang.Runnable): java.util.TimerTask;
						public static stopTimer(param0: java.util.Timer): void;
						public static run(param0: java.util.TimerTask): void;
						public static renew(param0: java.util.Timer): java.util.Timer;
						public static timerTaskWithUIThread(param0: globalAndroid.app.Activity, param1: java.lang.Runnable): java.util.TimerTask;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class UIUtils {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.UIUtils>;
						public constructor();
						public static findViewsWithClass(param0: globalAndroid.view.View, param1: java.lang.Class, param2: java.util.List): void;
						public static findViewsWithClass(param0: globalAndroid.view.View, param1: java.lang.Class): java.util.List;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module utils {
					export class Viewability {
						public static class: java.lang.Class<com.socdm.d.adgeneration.utils.Viewability>;
						public getViewableState(): com.socdm.d.adgeneration.utils.Viewability.ViewableState;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View, param2: number);
						public start(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View);
						public setListener(param0: com.socdm.d.adgeneration.utils.Viewability.ViewabilityListener): void;
						public stop(): void;
					}
					export module Viewability {
						export class ViewabilityListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.utils.Viewability.ViewabilityListener>;
							/**
							 * Constructs a new instance of the com.socdm.d.adgeneration.utils.Viewability$ViewabilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onChange(param0: boolean): void;
							});
							public constructor();
							public onChange(param0: boolean): void;
						}
						export class ViewableState {
							public static class: java.lang.Class<com.socdm.d.adgeneration.utils.Viewability.ViewableState>;
							public static unmeasured: com.socdm.d.adgeneration.utils.Viewability.ViewableState;
							public static inView: com.socdm.d.adgeneration.utils.Viewability.ViewableState;
							public static outView: com.socdm.d.adgeneration.utils.Viewability.ViewableState;
							public static values(): native.Array<com.socdm.d.adgeneration.utils.Viewability.ViewableState>;
							public static valueOf(param0: string): com.socdm.d.adgeneration.utils.Viewability.ViewableState;
						}
						export class ViewableTask {
							public static class: java.lang.Class<com.socdm.d.adgeneration.utils.Viewability.ViewableTask>;
							public stop(): void;
							public start(): void;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export class ADGPlayerAdListener {
						public static class: java.lang.Class<com.socdm.d.adgeneration.video.ADGPlayerAdListener>;
						/**
						 * Constructs a new instance of the com.socdm.d.adgeneration.video.ADGPlayerAdListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onReadyToPlayAd(): void;
							onFailedToPlayAd(param0: com.socdm.d.adgeneration.video.ADGPlayerError): void;
							onStartVideo(): void;
							onClickAd(): void;
						});
						public constructor();
						public onStartVideo(): void;
						public onClickAd(): void;
						public onReadyToPlayAd(): void;
						public onFailedToPlayAd(param0: com.socdm.d.adgeneration.video.ADGPlayerError): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export class ADGPlayerAdManager implements com.socdm.d.adgeneration.video.broadcast.ScreenStateBroadcastReceiver.ScreenStateBroadcastReceiverListener, com.socdm.d.adgeneration.video.vast.VastRequest.VastRequestListener {
						public static class: java.lang.Class<com.socdm.d.adgeneration.video.ADGPlayerAdManager>;
						public static AD_CONFIGURATION_KEY: string;
						public constructor(param0: globalAndroid.content.Context);
						public load(): void;
						public destroy(): void;
						public onExitFullscreen(param0: com.socdm.d.adgeneration.video.config.AdConfiguration): void;
						public onAdViewInvisible(): void;
						public onReadyToPlayAd(): void;
						public setAdListener(param0: com.socdm.d.adgeneration.video.ADGPlayerAdListener): void;
						public setViewablePayment(param0: java.lang.Boolean): void;
						public failedToLoadVastAd(param0: com.socdm.d.adgeneration.video.ADGPlayerError): void;
						public onScreenOn(): void;
						public setIsTiny(param0: boolean): void;
						public onStartVideo(): void;
						public showAd(param0: globalAndroid.view.ViewGroup): void;
						public onClick(): void;
						public isReady(): boolean;
						public isFullscreenVideoPlayerEnabled(): boolean;
						public setNativeAd(param0: com.socdm.d.adgeneration.nativead.ADGNativeAd): void;
						public vastAdDidLoaded(param0: com.socdm.d.adgeneration.video.vast.VastAd): void;
						public onAdViewVisible(): void;
						public unregisterBroadcastReceivers(): void;
						public getAdConfiguration(): com.socdm.d.adgeneration.video.config.AdConfiguration;
						public onClickThrough(): void;
						public setFullscreenVideoPlayerEnabled(param0: boolean): void;
						public onFailedToPlayAd(param0: com.socdm.d.adgeneration.video.ADGPlayerError): void;
						public load(param0: string): void;
						public onScreenOff(): void;
					}
					export module ADGPlayerAdManager {
						export class OnActivityLifecycleCallbacks {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.ADGPlayerAdManager.OnActivityLifecycleCallbacks>;
							public onActivityPaused(param0: globalAndroid.app.Activity): void;
							public onActivityStarted(param0: globalAndroid.app.Activity): void;
							public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivityResumed(param0: globalAndroid.app.Activity): void;
							public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
							public onActivityStopped(param0: globalAndroid.app.Activity): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export class ADGPlayerError {
						public static class: java.lang.Class<com.socdm.d.adgeneration.video.ADGPlayerError>;
						public static CACHE_SERVICE_ERROR: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static EXCEED_FILE_SIZE: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static FAILED_TO_PREPARE_MEDIA: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static FILE_NOT_FOUND: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static HARDWARE_ACCELERATION_DISABLED: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static HTTP_REQUEST_TIMEOUT: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static MEDIA_ERROR_UNKNOWN: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static MOVIE_FORCED_CLOSED: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static NEED_CONNECTION: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static NETWORK_ERROR: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static NO_AD: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static PARSE_ERROR: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static SERVER_ERROR: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static SETTING_ERROR: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static TIMEOUT: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static UNKNOWN: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static UNSPECIFIED: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static USER_CANCEL: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static PUBLICATION_NOT_FOUND: com.socdm.d.adgeneration.video.ADGPlayerError;
						public static values(): native.Array<com.socdm.d.adgeneration.video.ADGPlayerError>;
						public static valueOf(param0: string): com.socdm.d.adgeneration.video.ADGPlayerError;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export class ADGPlayerFullscreenActivity implements com.socdm.d.adgeneration.video.broadcast.ScreenStateBroadcastReceiver.ScreenStateBroadcastReceiverListener, com.socdm.d.adgeneration.video.view.VastPlayer.VastVideoEventListener {
						public static class: java.lang.Class<com.socdm.d.adgeneration.video.ADGPlayerFullscreenActivity>;
						public static AD_CONFIGURATION_KEY: string;
						public onPlaying(): void;
						public onScreenOn(): void;
						public constructor();
						public onStartVideo(): void;
						public onError(param0: com.socdm.d.adgeneration.video.ADGPlayerError): void;
						public onDestroy(): void;
						public onChangeAudioVolume(param0: boolean): void;
						public finish(): void;
						public onCompletion(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onPrepared(): void;
						public onScreenOff(): void;
					}
					export module ADGPlayerFullscreenActivity {
						export class OnClickThroughAdListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.ADGPlayerFullscreenActivity.OnClickThroughAdListener>;
							public onClick(param0: globalAndroid.view.View): void;
						}
						export class OnCloseListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.ADGPlayerFullscreenActivity.OnCloseListener>;
							public onClick(param0: globalAndroid.view.View): void;
						}
						export class OnReplayListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.ADGPlayerFullscreenActivity.OnReplayListener>;
							public onClick(param0: globalAndroid.view.View): void;
						}
						export class OnSoundOffListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.ADGPlayerFullscreenActivity.OnSoundOffListener>;
							public onClick(param0: globalAndroid.view.View): void;
						}
						export class OnSoundOnListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.ADGPlayerFullscreenActivity.OnSoundOnListener>;
							public onClick(param0: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export class VideoAudioType {
						public static class: java.lang.Class<com.socdm.d.adgeneration.video.VideoAudioType>;
						public static MIX: com.socdm.d.adgeneration.video.VideoAudioType;
						public static SOLO: com.socdm.d.adgeneration.video.VideoAudioType;
						public static values(): native.Array<com.socdm.d.adgeneration.video.VideoAudioType>;
						public static valueOf(param0: string): com.socdm.d.adgeneration.video.VideoAudioType;
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module broadcast {
						export class AdManagerBroadcastReceiver {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.broadcast.AdManagerBroadcastReceiver>;
							public static ACTION_READY_TO_PLAY: string;
							public static ACTION_PLAYING: string;
							public static ACTION_START: string;
							public static ACTION_FIRST_QUARTILE: string;
							public static ACTION_MIDPOINT: string;
							public static ACTION_THIRD_QUARTILE: string;
							public static ACTION_COMPLETION: string;
							public static ACTION_CLICK: string;
							public static ACTION_CLICK_THROUGH: string;
							public static ACTION_UNMUTE: string;
							public static ACTION_MUTE: string;
							public static ACTION_CLOSE: string;
							public static ACTION_REPLAY: string;
							public static ACTION_FAILED_TO_PLAY: string;
							public static ACTION_FINISH: string;
							public unregister(): void;
							public static getIntentFilter(): globalAndroid.content.IntentFilter;
							public static broadcastAction(param0: globalAndroid.content.Context, param1: number, param2: string, param3: com.socdm.d.adgeneration.video.config.AdConfiguration): void;
							public static broadcastAction(param0: globalAndroid.content.Context, param1: number, param2: string): void;
							public register(param0: globalAndroid.content.Context): void;
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							public constructor(param0: com.socdm.d.adgeneration.video.ADGPlayerAdManager, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module broadcast {
						export class FullscreenActivityBroadcastReceiver {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.broadcast.FullscreenActivityBroadcastReceiver>;
							public static ACTION_FINISH: string;
							public unregister(): void;
							public register(param0: globalAndroid.content.Context): void;
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							public static getHtmlInterstitialIntentFilter(): globalAndroid.content.IntentFilter;
							public constructor(param0: com.socdm.d.adgeneration.video.ADGPlayerFullscreenActivity, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module broadcast {
						export class ScreenStateBroadcastReceiver {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.broadcast.ScreenStateBroadcastReceiver>;
							public unregister(): void;
							public static getIntentFilter(): globalAndroid.content.IntentFilter;
							public register(param0: globalAndroid.content.Context): void;
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							public constructor(param0: com.socdm.d.adgeneration.video.broadcast.ScreenStateBroadcastReceiver.ScreenStateBroadcastReceiverListener);
						}
						export module ScreenStateBroadcastReceiver {
							export class ScreenStateBroadcastReceiverListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.broadcast.ScreenStateBroadcastReceiver.ScreenStateBroadcastReceiverListener>;
								/**
								 * Constructs a new instance of the com.socdm.d.adgeneration.video.broadcast.ScreenStateBroadcastReceiver$ScreenStateBroadcastReceiverListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onScreenOff(): void;
									onScreenOn(): void;
								});
								public constructor();
								public onScreenOff(): void;
								public onScreenOn(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module cache {
						export class CacheService {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.cache.CacheService>;
							public constructor();
							public static initialize(param0: globalAndroid.content.Context): void;
							public static initializeDiskCache(param0: globalAndroid.content.Context): boolean;
							public static getFromDiskCache(param0: string): native.Array<number>;
							public static getDiskCacheDirectory(param0: globalAndroid.content.Context): java.io.File;
							public static putToDiskCacheAsync(param0: string, param1: native.Array<number>): void;
							public static createValidDiskCacheKey(param0: string): string;
							public static getFilePathDiskCache(param0: string): string;
							public static putToDiskCache(param0: string, param1: java.io.InputStream): boolean;
							public static getFromDiskCacheAsync(param0: string, param1: com.socdm.d.adgeneration.video.cache.CacheService.DiskLruCacheGetListener): void;
							public static containsKeyDiskCache(param0: string): boolean;
							public static putToDiskCache(param0: string, param1: native.Array<number>): boolean;
						}
						export module CacheService {
							export class DiskLruCacheGetListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.cache.CacheService.DiskLruCacheGetListener>;
								/**
								 * Constructs a new instance of the com.socdm.d.adgeneration.video.cache.CacheService$DiskLruCacheGetListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onComplete(param0: string, param1: native.Array<number>): void;
								});
								public constructor();
								public onComplete(param0: string, param1: native.Array<number>): void;
							}
							export class DiskLruCacheGetTask {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.cache.CacheService.DiskLruCacheGetTask>;
								public onCancelled(): void;
							}
							export class DiskLruCachePutTask {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.cache.CacheService.DiskLruCachePutTask>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module cache {
						export class CachingDownloadTask {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.cache.CachingDownloadTask>;
							public onCancelled(): void;
							public constructor(param0: com.socdm.d.adgeneration.video.cache.CachingDownloadTask.CachingDownloadTaskListener);
						}
						export module CachingDownloadTask {
							export class CachingDownloadTaskListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.cache.CachingDownloadTask.CachingDownloadTaskListener>;
								/**
								 * Constructs a new instance of the com.socdm.d.adgeneration.video.cache.CachingDownloadTask$CachingDownloadTaskListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onComplete(param0: boolean): void;
								});
								public constructor();
								public onComplete(param0: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module cache {
						export class DiskLruCache {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.cache.DiskLruCache>;
							public static open(param0: java.io.File, param1: number, param2: number, param3: number): com.socdm.d.adgeneration.video.cache.DiskLruCache;
							public size(): number;
							public close(): void;
							public edit(param0: string): com.socdm.d.adgeneration.video.cache.DiskLruCache.Editor;
							public remove(param0: string): boolean;
							public getDirectory(): java.io.File;
							public get(param0: string): com.socdm.d.adgeneration.video.cache.DiskLruCache.Snapshot;
							public flush(): void;
							public delete(): void;
						}
						export module DiskLruCache {
							export class Editor {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.cache.DiskLruCache.Editor>;
								public set(param0: number, param1: string): void;
								public commit(): void;
								public abort(): void;
								public newInputStream(param0: number): java.io.InputStream;
								public newOutputStream(param0: number): java.io.OutputStream;
							}
							export module Editor {
								export class FaultHidingOutputStream {
									public static class: java.lang.Class<com.socdm.d.adgeneration.video.cache.DiskLruCache.Editor.FaultHidingOutputStream>;
									public close(): void;
									public write(param0: native.Array<number>, param1: number, param2: number): void;
									public write(param0: number): void;
									public flush(): void;
								}
							}
							export class Entry {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.cache.DiskLruCache.Entry>;
								public getDirtyFile(param0: number): java.io.File;
								public getLengths(): string;
								public getCleanFile(param0: number): java.io.File;
							}
							export class Snapshot {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.cache.DiskLruCache.Snapshot>;
								public getInputStream(param0: number): java.io.InputStream;
								public close(): void;
								public getLength(param0: number): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module cache {
						export class DiskLruCacheStrictLineReader {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.cache.DiskLruCacheStrictLineReader>;
							public close(): void;
							public constructor(param0: java.io.InputStream, param1: number, param2: java.nio.charset.Charset);
							public readLine(): string;
							public constructor(param0: java.io.InputStream, param1: java.nio.charset.Charset);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module cache {
						export class DiskLruCacheUtil {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.cache.DiskLruCacheUtil>;
							public static US_ASCII: java.nio.charset.Charset;
							public static UTF_8: java.nio.charset.Charset;
							public static deleteContents(param0: java.io.File): void;
							public static readFully(param0: java.io.Reader): string;
							public static closeQuietly(param0: java.io.Closeable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module config {
						export class AdConfiguration {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.config.AdConfiguration>;
							public constructor(param0: com.socdm.d.adgeneration.video.vast.VastAd);
							public getVastAd(): com.socdm.d.adgeneration.video.vast.VastAd;
							public isSoundEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module config {
						export class Const {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.config.Const>;
							public static SHARED_PREFERENCES_KEY: string;
							public static HTTP_REQUEST_CONNECTION_TIMEOUT: number;
							public static HTTP_REQUEST_READ_TIMEOUT: number;
							public static UI_INLINE_LINK_BUTTON_URL: string;
							public static UI_INLINE_REPLAY_BUTTON_URL: string;
							public static UI_CLOSE_BUTTON_URL: string;
							public static UI_LINK_BUTTON_URL: string;
							public static UI_SOUND_ON_BUTTON_URL: string;
							public static UI_SOUND_OFF_BUTTON_URL: string;
							public static ADMANAGER_BROADCAST_IDENTIFIER_KEY: string;
							public static ADACTIVITY_BROADCAST_IDENTIFIER_KEY: string;
							public static HTTP_REQUEST_TIMEOUT: number;
							public static STOP_TRACKING: boolean;
							public static MINVERSION: number;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module utils {
						export class AdRequestTask {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.utils.AdRequestTask>;
							public static SUCCESS: string;
							public static FAILED: string;
							public onCancelled(): void;
							public constructor(param0: com.socdm.d.adgeneration.video.utils.AdRequestTask.AdRequestTaskListener, param1: globalAndroid.content.Context);
						}
						export module AdRequestTask {
							export class AdRequestTaskListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.utils.AdRequestTask.AdRequestTaskListener>;
								/**
								 * Constructs a new instance of the com.socdm.d.adgeneration.video.utils.AdRequestTask$AdRequestTaskListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onPostExecute(param0: java.util.Map, param1: string): void;
									onCancelled(): void;
								});
								public constructor();
								public onPostExecute(param0: java.util.Map, param1: string): void;
								public onCancelled(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module utils {
						export class DeviceUtils {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.utils.DeviceUtils>;
							public static diskCacheSizeBytes(param0: java.io.File): number;
							public static getDeviceDimensions(param0: globalAndroid.content.Context): globalAndroid.graphics.Point;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module utils {
						export class Dips {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.utils.Dips>;
							public constructor();
							public static dipsToFloatPixels(param0: number, param1: globalAndroid.content.Context): number;
							public static asFloatPixels(param0: number, param1: globalAndroid.content.Context): number;
							public static pixelsToFloatDips(param0: number, param1: globalAndroid.content.Context): number;
							public static asIntPixels(param0: number, param1: globalAndroid.content.Context): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module utils {
						export class Streams {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.utils.Streams>;
							public constructor();
							public static readStream(param0: java.io.InputStream, param1: native.Array<number>): void;
							public static copyContent(param0: java.io.InputStream, param1: java.io.OutputStream): void;
							public static closeStream(param0: java.io.Closeable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module utils {
						export class Utils {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.utils.Utils>;
							public constructor();
							public static sha1(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module utils {
						export class Views {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.utils.Views>;
							public constructor();
							public static removeFromParent(param0: globalAndroid.view.View): void;
							public static clearChild(param0: globalAndroid.view.ViewGroup): void;
							public static setImageFromAssets(param0: globalAndroid.content.Context, param1: globalAndroid.widget.ImageView, param2: string): void;
							public static hasHardwareAcceleration(param0: globalAndroid.app.Activity): boolean;
							public static setBackground(param0: globalAndroid.view.View, param1: globalAndroid.graphics.drawable.Drawable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module vast {
						export class MediaFile {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.vast.MediaFile>;
							public constructor();
							public getWidth(): number;
							public getBitrate(): number;
							public setType(param0: string): void;
							public getUrl(): java.net.URL;
							public setDelivery(param0: string): void;
							public getDelivery(): string;
							public getHeight(): number;
							public setUrl(param0: java.net.URL): void;
							public setWidth(param0: number): void;
							public setHeight(param0: number): void;
							public setBitrate(param0: number): void;
							public getType(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module vast {
						export class VastAd {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.vast.VastAd>;
							public setAdTitle(param0: string): void;
							public getImpressions(): java.util.ArrayList;
							public pause(): void;
							public setCurrentTime(param0: number): void;
							public getTrackingEvents(): java.util.HashMap;
							public fullscreen(): void;
							public static isAbsoluteTracker(param0: string): boolean;
							public midpoint(): void;
							public static isPercentageTracker(param0: string): boolean;
							public progress(param0: number, param1: number): void;
							public getClickTrackings(): java.util.ArrayList;
							public setBestMediaFileNetworkUrl(param0: string): void;
							public setDescription(param0: string): void;
							public clickThrough(param0: globalAndroid.content.Context): void;
							public getDuration(): number;
							public getAdId(): string;
							public setClickThrough(param0: string): void;
							public setErrors(param0: java.util.ArrayList): void;
							public getBestMediaFileNetworkUrl(): string;
							public release(): void;
							public setSkipOffsetString(param0: string): void;
							public impressions(): void;
							public setProgressTrackings(param0: java.util.ArrayList): void;
							public mute(): void;
							public setVastVersion(param0: string): void;
							public getMediaFiles(): java.util.ArrayList;
							public setCreativeId(param0: string): void;
							public setAdId(param0: string): void;
							public resume(): void;
							public inView(): void;
							public setAdvertiser(param0: string): void;
							public getBestMediaFileUrl(): string;
							public setBestMediaFileDiskUrl(param0: string): void;
							public static parseAbsoluteOffset(param0: string): java.lang.Integer;
							public compareStateNext(param0: com.socdm.d.adgeneration.video.vast.VastEventState): boolean;
							public setAdSystem(param0: string): void;
							public setDurationString(param0: string): void;
							public exitFullscreen(): void;
							public start(): void;
							public outView(): void;
							public constructor();
							public getProgressTrackings(): java.util.ArrayList;
							public thirdQuartile(): void;
							public unmute(): void;
							public trackEvent(param0: com.socdm.d.adgeneration.video.vast.VastTrackingEvent): void;
							public getErrors(): java.util.ArrayList;
							public getVastEventState(): com.socdm.d.adgeneration.video.vast.VastEventState;
							public complete(): void;
							public getCurrentTime(): number;
							public firstQuartile(): void;
						}
						export module VastAd {
							export class VastProgress {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.vast.VastAd.VastProgress>;
								public constructor(param0: string, param1: java.net.URL);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module vast {
						export class VastEventState {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.vast.VastEventState>;
							public static NONE: com.socdm.d.adgeneration.video.vast.VastEventState;
							public static IMPRESSION: com.socdm.d.adgeneration.video.vast.VastEventState;
							public static START: com.socdm.d.adgeneration.video.vast.VastEventState;
							public static FIRST_QUARTILE: com.socdm.d.adgeneration.video.vast.VastEventState;
							public static MIDPOINT: com.socdm.d.adgeneration.video.vast.VastEventState;
							public static THIRD_QUARTILE: com.socdm.d.adgeneration.video.vast.VastEventState;
							public static COMPLETE: com.socdm.d.adgeneration.video.vast.VastEventState;
							public static values(): native.Array<com.socdm.d.adgeneration.video.vast.VastEventState>;
							public static valueOf(param0: string): com.socdm.d.adgeneration.video.vast.VastEventState;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module vast {
						export class VastRequest extends com.socdm.d.adgeneration.video.utils.AdRequestTask.AdRequestTaskListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.vast.VastRequest>;
							public cancel(): void;
							public loadXML(param0: string): void;
							public onCancelled(): void;
							public constructor(param0: com.socdm.d.adgeneration.video.vast.VastRequest.VastRequestListener, param1: globalAndroid.content.Context);
							public getVastAd(): com.socdm.d.adgeneration.video.vast.VastAd;
							public onPostExecute(param0: java.util.Map, param1: string): void;
						}
						export module VastRequest {
							export class VastRequestListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.vast.VastRequest.VastRequestListener>;
								/**
								 * Constructs a new instance of the com.socdm.d.adgeneration.video.vast.VastRequest$VastRequestListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									vastAdDidLoaded(param0: com.socdm.d.adgeneration.video.vast.VastAd): void;
									failedToLoadVastAd(param0: com.socdm.d.adgeneration.video.ADGPlayerError): void;
								});
								public constructor();
								public failedToLoadVastAd(param0: com.socdm.d.adgeneration.video.ADGPlayerError): void;
								public vastAdDidLoaded(param0: com.socdm.d.adgeneration.video.vast.VastAd): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module vast {
						export class VastTrackingEvent {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.vast.VastTrackingEvent>;
							public static CREATIVE_VIEW: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static START: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static FIRST_QUARTILE: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static MIDPOINT: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static THIRD_QUARTILE: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static COMPLETE: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static MUTE: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static UNMUTE: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static PAUSE: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static REWIND: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static RESUME: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static FULLSCREEN: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static EXIT_FULLSCREEN: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static EXPAND: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static COLLAPSE: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static ACCEPT_INVITATION_LINEAR: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static CLOSE_LINEAR: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static SKIP: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static PROGRESS: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static EXT_INVIEW: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static EXT_OUTVIEW: com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static valueOf(param0: string): com.socdm.d.adgeneration.video.vast.VastTrackingEvent;
							public static values(): native.Array<com.socdm.d.adgeneration.video.vast.VastTrackingEvent>;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module view {
						export class AdView implements com.socdm.d.adgeneration.video.view.VastPlayer.VastVideoEventListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.view.AdView>;
							public onDetachedFromWindow(): void;
							public onPlaying(): void;
							public getCompleted(): boolean;
							public pause(): void;
							public onStartVideo(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public release(): void;
							public reset(): void;
							public onCompletion(): void;
							public constructor(param0: globalAndroid.content.Context, param1: com.socdm.d.adgeneration.video.ADGPlayerAdManager);
							public onChangeAudioVolume(param0: boolean): void;
							public onMeasure(param0: number, param1: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context, param1: com.socdm.d.adgeneration.video.ADGPlayerAdManager, param2: boolean);
							public startAd(): void;
							public onPrepared(): void;
							public onWindowVisibilityChanged(param0: number): void;
							public resume(): void;
							public onError(param0: com.socdm.d.adgeneration.video.ADGPlayerError): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module AdView {
							export class OnClickAdListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.view.AdView.OnClickAdListener>;
								public onClick(param0: globalAndroid.view.View): void;
							}
							export class OnClickThroughAdListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.view.AdView.OnClickThroughAdListener>;
								public onClick(param0: globalAndroid.view.View): void;
							}
							export class OnCloseListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.view.AdView.OnCloseListener>;
								public onClick(param0: globalAndroid.view.View): void;
							}
							export class OnReplayListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.view.AdView.OnReplayListener>;
								public onClick(param0: globalAndroid.view.View): void;
							}
							export class OnSoundOffListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.view.AdView.OnSoundOffListener>;
								public onClick(param0: globalAndroid.view.View): void;
							}
							export class OnSoundOnListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.view.AdView.OnSoundOnListener>;
								public onClick(param0: globalAndroid.view.View): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module view {
						export class VastPlayer implements com.socdm.d.adgeneration.video.view.VideoView.VideoViewListener {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.view.VastPlayer>;
							public isViewable(): boolean;
							public setVastVideoEventListener(param0: com.socdm.d.adgeneration.video.view.VastPlayer.VastVideoEventListener): void;
							public onDetachedFromWindow(): void;
							public onError(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public pause(): void;
							public unmute(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setVastAdThenLoadVideo(param0: com.socdm.d.adgeneration.video.vast.VastAd): void;
							public setVastAd(param0: com.socdm.d.adgeneration.video.vast.VastAd): void;
							public isInPlaybackState(): boolean;
							public release(): void;
							public mute(): void;
							public onCompletion(): void;
							public onChangeAudioVolume(param0: boolean): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public play(): void;
							public replay(): void;
							public onPrepared(): void;
							public onWindowVisibilityChanged(param0: number): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module VastPlayer {
							export class Runner {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.view.VastPlayer.Runner>;
								public constructor(param0: com.socdm.d.adgeneration.video.view.VastPlayer, param1: com.socdm.d.adgeneration.video.view.VastPlayer);
								public stop(): void;
								public run(): void;
								public start(): void;
							}
							export class VastVideoEventListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.view.VastPlayer.VastVideoEventListener>;
								/**
								 * Constructs a new instance of the com.socdm.d.adgeneration.video.view.VastPlayer$VastVideoEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onStartVideo(): void;
									onPrepared(): void;
									onPlaying(): void;
									onCompletion(): void;
									onError(param0: com.socdm.d.adgeneration.video.ADGPlayerError): void;
									onChangeAudioVolume(param0: boolean): void;
								});
								public constructor();
								public onPrepared(): void;
								public onPlaying(): void;
								public onStartVideo(): void;
								public onCompletion(): void;
								public onError(param0: com.socdm.d.adgeneration.video.ADGPlayerError): void;
								public onChangeAudioVolume(param0: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module socdm {
		export module d {
			export module adgeneration {
				export module video {
					export module view {
						export class VideoView {
							public static class: java.lang.Class<com.socdm.d.adgeneration.video.view.VideoView>;
							public setVolume(param0: number, param1: number): void;
							public canSeekBackward(): boolean;
							public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
							public pause(): void;
							public isInPlaybackState(): boolean;
							public canPause(): boolean;
							public getCurrentPosition(): number;
							public onMeasure(param0: number, param1: number): void;
							public start(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public getDuration(): number;
							public getBufferPercentage(): number;
							public canSeekForward(): boolean;
							public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
							public setVideoViewListener(param0: com.socdm.d.adgeneration.video.view.VideoView.VideoViewListener): void;
							public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public stopPlayback(): void;
							public seekTo(param0: number): void;
							public isPlaying(): boolean;
							public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
							public getAudioSessionId(): number;
							public setVideoURL(param0: string): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module VideoView {
							export class AudioFocusChangeListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.view.VideoView.AudioFocusChangeListener>;
								public onAudioFocusChange(param0: number): void;
							}
							export class VideoViewListener {
								public static class: java.lang.Class<com.socdm.d.adgeneration.video.view.VideoView.VideoViewListener>;
								/**
								 * Constructs a new instance of the com.socdm.d.adgeneration.video.view.VideoView$VideoViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onCompletion(): void;
									onPrepared(): void;
									onError(): void;
									onChangeAudioVolume(param0: boolean): void;
								});
								public constructor();
								public onError(): void;
								public onPrepared(): void;
								public onCompletion(): void;
								public onChangeAudioVolume(param0: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:

