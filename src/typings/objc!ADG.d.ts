
declare const enum ADGAdType {

	kADG_AdType_Sp = 0,

	kADG_AdType_Large = 1,

	kADG_AdType_Rect = 2,

	kADG_AdType_Tablet = 3,

	kADG_AdType_Free = 4
}

declare class ADGAdWebView extends UIView implements UIWebViewDelegate {

	static alloc(): ADGAdWebView; // inherited from NSObject

	static appearance(): ADGAdWebView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ADGAdWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ADGAdWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ADGAdWebView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ADGAdWebView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ADGAdWebView; // inherited from UIAppearance

	static new(): ADGAdWebView; // inherited from NSObject

	readonly adWebView: UIWebView;

	checkingWebViewFillerAd: boolean;

	delegate: any;

	isInterstitial: boolean;

	mraidEnabled: boolean;

	scrollEnabled: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isClicked(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isNoAd(callDelegate: boolean): boolean;

	loadHTMLStringBaseURL(HTML: string, baseURL: NSURL): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetNoAdCount(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setAdScale(scale: number): void;

	setFrame(rect: CGRect): void;

	setWebViewBackgroundColor(color: UIColor): void;

	setWebViewOpaque(opaque: boolean): void;

	stopLoading(): void;

	webViewDidFailLoadWithError(webView: UIWebView, error: NSError): void;

	webViewDidFinishLoad(webView: UIWebView): void;

	webViewDidStartLoad(webView: UIWebView): void;

	webViewShouldStartLoadWithRequestNavigationType(webView: UIWebView, request: NSURLRequest, navigationType: UIWebViewNavigationType): boolean;
}

interface ADGAdWebViewDelegate {

	adgAdWebViewDidFailLoadWithError?(webView: UIWebView, error: NSError): void;

	adgAdWebViewDidFinishLoad?(webView: UIWebView): void;

	adgAdWebViewShouldStartLoadWithRequestNavigationType?(webView: UIWebView, request: NSURLRequest, navigationType: UIWebViewNavigationType): boolean;

	adgNoAd?(): void;
}
declare var ADGAdWebViewDelegate: {

	prototype: ADGAdWebViewDelegate;
};

declare class ADGConstants extends NSObject {

	static alloc(): ADGConstants; // inherited from NSObject

	static kADGErrorCodetoString(code: kADGErrorCode): string;

	static new(): ADGConstants; // inherited from NSObject
}

declare class ADGData extends NSObject {

	static alloc(): ADGData; // inherited from NSObject

	static dataWithDictionary(dict: NSDictionary<any, any>): ADGData;

	static new(): ADGData; // inherited from NSObject

	readonly ext: NSObject;

	readonly label: string;

	readonly value: string;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dict: NSDictionary<any, any>): this;
}

declare const enum ADGHeaderBiddingParamKeys {

	AmznBidID = 0,

	AmznHostName = 1,

	AmznSlots = 2
}

declare class ADGImage extends NSObject {

	static alloc(): ADGImage; // inherited from NSObject

	static imageWithDictionary(dict: NSDictionary<any, any>): ADGImage;

	static new(): ADGImage; // inherited from NSObject

	readonly ext: NSObject;

	readonly height: number;

	readonly url: string;

	readonly width: number;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dict: NSDictionary<any, any>): this;
}

declare class ADGInformationIconView extends UIView {

	static alloc(): ADGInformationIconView; // inherited from NSObject

	static appearance(): ADGInformationIconView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ADGInformationIconView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ADGInformationIconView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ADGInformationIconView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ADGInformationIconView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ADGInformationIconView; // inherited from UIAppearance

	static new(): ADGInformationIconView; // inherited from NSObject

	backgroundType: kADGInformationIconViewBackgroundType;

	readonly optoutURL: string;

	constructor(o: { nativeAd: ADGNativeAd; });

	constructor(o: { nativeAd: ADGNativeAd; expandable: boolean; });

	initWithNativeAd(nativeAd: ADGNativeAd): this;

	initWithNativeAdExpandable(nativeAd: ADGNativeAd, expandable: boolean): this;

	updateFrameFromSuperview(corner: UIRectCorner): void;
}

declare class ADGInformationIconViewIconImageView extends UIImageView {

	static alloc(): ADGInformationIconViewIconImageView; // inherited from NSObject

	static appearance(): ADGInformationIconViewIconImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ADGInformationIconViewIconImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ADGInformationIconViewIconImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ADGInformationIconViewIconImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ADGInformationIconViewIconImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ADGInformationIconViewIconImageView; // inherited from UIAppearance

	static new(): ADGInformationIconViewIconImageView; // inherited from NSObject

	constructor(o: { URL: string; });

	changeIconWithType(type: kADGInformationIconViewBackgroundType): void;

	initWithURL(urlString: string): this;

	registerIconURLWithTypeUrlString(type: kADGInformationIconViewBackgroundType, urlString: string): void;
}

declare class ADGInformationIconViewLabel extends UILabel {

	static alloc(): ADGInformationIconViewLabel; // inherited from NSObject

	static appearance(): ADGInformationIconViewLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ADGInformationIconViewLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ADGInformationIconViewLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ADGInformationIconViewLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ADGInformationIconViewLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ADGInformationIconViewLabel; // inherited from UIAppearance

	static new(): ADGInformationIconViewLabel; // inherited from NSObject

	constructor(o: { text: string; });

	getWidthByText(): number;

	initWithText(text: string): this;

	setColorWithType(type: kADGInformationIconViewBackgroundType): void;
}

declare class ADGInterstitial extends NSObject implements ADGManagerViewControllerDelegate {

	static alloc(): ADGInterstitial; // inherited from NSObject

	static new(): ADGInterstitial; // inherited from NSObject

	static setDefaultSSLMode(isDefaultSSL: boolean): void;

	delegate: any;

	isFullscreen: boolean;

	rootViewController: UIViewController;

	ADGManagerViewControllerDidTapAd(adgManagerViewController: ADGManagerViewController): void;

	ADGManagerViewControllerFailInImpression(adgManagerViewController: ADGManagerViewController): void;

	ADGManagerViewControllerFailedToReceiveAdCode(adgManagerViewController: ADGManagerViewController, code: kADGErrorCode): void;

	ADGManagerViewControllerFinishImpression(adgManagerViewController: ADGManagerViewController): void;

	ADGManagerViewControllerOpenUrl(adgManagerViewController: ADGManagerViewController): void;

	ADGManagerViewControllerReadyMediationMediation(adgManagerViewController: ADGManagerViewController, mediation: any): void;

	ADGManagerViewControllerReceiveAd(adgManagerViewController: ADGManagerViewController): void;

	ADGManagerViewControllerReceiveAdMediationNativeAd(adgManagerViewController: ADGManagerViewController, mediationNativeAd: any): void;

	ADGManagerViewControllerReceiveAdMediationNativeAds(adgManagerViewController: ADGManagerViewController, mediationNativeAds: NSArray<any>): void;

	addHeaderBiddingParamWithKeyValue(key: ADGHeaderBiddingParamKeys, value: string): void;

	addHeaderBiddingParamsWithAmznAdResponse(adResponse: any): void;

	addRequestOptionParamWithCustomKeyValue(key: string, value: string): void;

	dismiss(): void;

	preload(): void;

	removeBackgroundTapGesture(): void;

	setAdBackGroundColor(color: UIColor): void;

	setAdScale(scale: number): void;

	setAdType(adType: ADGAdType): void;

	setBackgroundType(designType: number): void;

	setCloseButtonType(designType: number): void;

	setEnableSound(enableSound: boolean): void;

	setEnableTestMode(isTest: boolean): void;

	setFillerLimit(limit: number): void;

	setLandscapeBackgroundType(designType: number): void;

	setLandscapeCloseButtonType(designType: number): void;

	setLandscapeTemplateType(type: number): void;

	setLat(lat: number): void;

	setLocationId(locationId: string): void;

	setLon(lon: number): void;

	setMiddleware(middleware: ADGMiddleware): void;

	setOrientationReload(orientationReload: boolean): void;

	setPortraitBackgroundType(designType: number): void;

	setPortraitCloseButtonType(designType: number): void;

	setPortraitTemplateType(type: number): void;

	setPreventAccidentClick(preventAccidentClick: boolean): void;

	setSSLMode(isSSL: boolean): void;

	setSpan(span: number): void;

	setSpanIsPercentage(span: number, isPercentage: boolean): void;

	setTemplateType(type: number): void;

	setWindowBackground(color: UIColor): void;

	show(): boolean;
}

interface ADGInterstitialDelegate extends ADGManagerViewControllerDelegate {

	ADGInterstitialClose?(): void;
}
declare var ADGInterstitialDelegate: {

	prototype: ADGInterstitialDelegate;
};

declare class ADGLink extends NSObject {

	static alloc(): ADGLink; // inherited from NSObject

	static linkWithDictionary(dict: NSDictionary<any, any>): ADGLink;

	static new(): ADGLink; // inherited from NSObject

	readonly clicktrackers: NSArray<any>;

	readonly ext: NSObject;

	readonly fallback: string;

	readonly postClicktrackers: NSArray<any>;

	tapCallback: () => void;

	readonly url: string;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dict: NSDictionary<any, any>): this;

	setTapEvent(view: UIView): void;
}

declare const enum ADGLogLevel {

	kADGLogLevelDebug = 0,

	kADGLogLevelInfo = 1,

	kADGLogLevelWarning = 2,

	kADGLogLevelError = 3
}

declare class ADGLogger extends NSObject {

	static alloc(): ADGLogger; // inherited from NSObject

	static logLevel(): ADGLogLevel;

	static new(): ADGLogger; // inherited from NSObject

	static outputDebug(str: string): void;

	static outputDebugClsMethod(str: string, cls: typeof NSObject, sel: string): void;

	static outputDebugErrorClsMethod(str: string, error: NSObject, cls: typeof NSObject, sel: string): void;

	static outputError(str: string): void;

	static outputErrorClsMethod(str: string, cls: typeof NSObject, sel: string): void;

	static outputErrorErrorClsMethod(str: string, error: NSObject, cls: typeof NSObject, sel: string): void;

	static outputInfo(str: string): void;

	static outputInfoClsMethod(str: string, cls: typeof NSObject, sel: string): void;

	static outputWarning(str: string): void;

	static outputWarningClsMethod(strb: string, cls: typeof NSObject, sel: string): void;

	static setLogLevel(logLevel: ADGLogLevel): void;
}

declare class ADGManagerViewController extends UIViewController implements ADGAdWebViewDelegate {

	static alloc(): ADGManagerViewController; // inherited from NSObject

	static new(): ADGManagerViewController; // inherited from NSObject

	static setDefaultSSLMode(isDefaultSSL: boolean): void;

	static setLat(lat: number): void;

	static setLon(lon: number): void;

	adOrigin: CGPoint;

	adScale: number;

	adSize: CGSize;

	adType: ADGAdType;

	adgAdView: boolean;

	closeOriginInter: boolean;

	delegate: any;

	expandFrame: boolean;

	informationIconViewDefault: boolean;

	isInterstitial: boolean;

	locationid: string;

	preventAccidentClick: boolean;

	rootViewController: UIViewController;

	usePartsResponse: boolean;

	webViewScrollEnabled: boolean;

	constructor(o: { adParams: NSDictionary<any, any>; });

	constructor(o: { adParams: NSDictionary<any, any>; adView: UIView; });

	constructor(o: { locationID: string; adType: ADGAdType; rootViewController: UIViewController; });

	addAdContainerView(adContainerView: UIView): void;

	addHeaderBiddingParamWithKeyValue(key: ADGHeaderBiddingParamKeys, value: string): void;

	addHeaderBiddingParamsWithAmznAdResponse(adResponse: any): void;

	addMediationNativeAdView(mediationNativeAdView: UIView): void;

	addRequestOptionParamWithCustomKeyValue(key: string, value: string): void;

	adgAdWebViewDidFailLoadWithError(webView: UIWebView, error: NSError): void;

	adgAdWebViewDidFinishLoad(webView: UIWebView): void;

	adgAdWebViewShouldStartLoadWithRequestNavigationType(webView: UIWebView, request: NSURLRequest, navigationType: UIWebViewNavigationType): boolean;

	adgNoAd(): void;

	delegateViewManagement(view: UIView): void;

	delegateViewManagementNativeAd(view: UIView, nativeAd: any): void;

	disableCallingNativeAdTrackers(): void;

	disableCheckingWebViewFillerAd(): void;

	enableRetryingOnFailedMediation(): void;

	finishMediation(): void;

	getBeacon(): string;

	getLocationid(): string;

	initWithAdParams(params: NSDictionary<any, any>, parentView: UIView): this;

	initWithAdParamsAdView(params: NSDictionary<any, any>, parentView: UIView): this;

	initWithLocationIDAdTypeRootViewController(locationID: string, adType: ADGAdType, rootViewController: UIViewController): this;

	isReadyForInterstitial(): boolean;

	loadRequest(): void;

	pauseRefresh(): void;

	resumeRefresh(): void;

	resumeRefreshTimer(): void;

	setAutomaticallyRemoveOnReload(view: UIView): void;

	setBackGround(color: UIColor, opaque: boolean): void;

	setBackGroundOpaque(color: UIColor, opaque: boolean): void;

	setDelegateFailedLimit(delegate: any, failedLimit: number): void;

	setDivideShowing(devide: boolean): void;

	setEnableSound(enableSound: boolean): void;

	setEnableTestMode(isTest: boolean): void;

	setFillerLimit(limit: number): void;

	setFillerRetry(retry: boolean): void;

	setFlexibleWidth(percentage: number): void;

	setFrame(rect: CGRect): void;

	setLat(lat: number): void;

	setLon(lon: number): void;

	setMiddleware(mw: ADGMiddleware): void;

	setPreLoad(preLoad: boolean): void;

	setSSLMode(isSSL: boolean): void;

	show(): void;

	stopAutomaticLoad(): void;

	updateView(): void;

	waitShowing(): void;
}

interface ADGManagerViewControllerDelegate {

	ADGManagerViewControllerDidTapAd?(adgManagerViewController: ADGManagerViewController): void;

	ADGManagerViewControllerFailInImpression?(adgManagerViewController: ADGManagerViewController): void;

	ADGManagerViewControllerFailedToReceiveAdCode?(adgManagerViewController: ADGManagerViewController, code: kADGErrorCode): void;

	ADGManagerViewControllerFinishImpression?(adgManagerViewController: ADGManagerViewController): void;

	ADGManagerViewControllerOpenUrl?(adgManagerViewController: ADGManagerViewController): void;

	ADGManagerViewControllerReadyMediationMediation?(adgManagerViewController: ADGManagerViewController, mediation: any): void;

	ADGManagerViewControllerReceiveAd?(adgManagerViewController: ADGManagerViewController): void;

	ADGManagerViewControllerReceiveAdMediationNativeAd?(adgManagerViewController: ADGManagerViewController, mediationNativeAd: any): void;

	ADGManagerViewControllerReceiveAdMediationNativeAds?(adgManagerViewController: ADGManagerViewController, mediationNativeAds: NSArray<any>): void;
}
declare var ADGManagerViewControllerDelegate: {

	prototype: ADGManagerViewControllerDelegate;
};

declare class ADGMediaView extends UIView {

	static alloc(): ADGMediaView; // inherited from NSObject

	static appearance(): ADGMediaView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ADGMediaView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ADGMediaView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ADGMediaView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ADGMediaView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ADGMediaView; // inherited from UIAppearance

	static new(): ADGMediaView; // inherited from NSObject

	fullscreenVideoPlayerEnabled: boolean;

	nativeAd: ADGNativeAd;

	viewController: UIViewController;

	load(): void;
}

declare const enum ADGMiddleware {

	kADG_Mw_None = 0,

	kADG_Mw_Other = 1,

	kADG_Mw_Unity = 2,

	kADG_Mw_Titanium = 3,

	kADG_Mw_Cocos2dx = 4
}

declare class ADGNativeAd extends NSObject {

	static alloc(): ADGNativeAd; // inherited from NSObject

	static callTrackers(trackers: NSArray<any>): void;

	static callTrackersIsPostRequest(trackers: NSArray<any>, isPostRequest: boolean): void;

	static nativeAdWithDictionary(dict: NSDictionary<any, any>): ADGNativeAd;

	static new(): ADGNativeAd; // inherited from NSObject

	readonly canLoadMedia: boolean;

	readonly ctatext: ADGData;

	readonly desc: ADGData;

	readonly ext: NSObject;

	readonly iconImage: ADGImage;

	readonly imptrackers: NSArray<any>;

	readonly informationIconAccompanyingText: ADGData;

	readonly informationIconIconURL: ADGData;

	readonly informationIconOptoutURL: ADGData;

	informationIconViewDefault: boolean;

	readonly jstracker: string;

	readonly link: ADGLink;

	readonly mainImage: ADGImage;

	readonly nativeAdType: ADGNativeAdType;

	rootViewController: UIViewController;

	readonly sponsored: ADGData;

	readonly title: ADGTitle;

	readonly ver: number;

	readonly video: ADGVideo;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	callClickTracker(): void;

	callImptrackers(): void;

	callJstracker(): void;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	setTapEvent(view: UIView): void;

	setTapEventHandler(view: UIView, block: () => void): void;
}

declare const enum ADGNativeAdType {

	kUndefined = 0,

	kDefault = 1,

	kGunosyAds = 2,

	kAmebaJointAlliance = 3
}

declare class ADGNativeInterfaceChild extends NSObject {

	static alloc(): ADGNativeInterfaceChild; // inherited from NSObject

	static new(): ADGNativeInterfaceChild; // inherited from NSObject

	adId: string;

	beacon: string;

	callNativeAdTrackers: boolean;

	delegate: any;

	enableSound: boolean;

	expandFrame: boolean;

	isOriginInterstitial: boolean;

	isTest: boolean;

	param: NSDictionary<any, any>;

	rect: CGRect;

	rootViewCon: UIViewController;

	usePartsResponse: boolean;

	vastXML: string;

	viewCon: UIViewController;

	viewablePayment: boolean;

	checkOSVersion(): boolean;

	loadProcess(): boolean;

	sendCloseInterstitial(): void;

	sendCompleteMovieAd(): void;

	sendDidTapAd(): void;

	sendErrorClassName(): void;

	sendFailedToReceiveAd(): void;

	sendOpenUrl(): void;

	sendReadyMediation(mediation: any): void;

	sendReceiveAd(): void;

	sendReceiveNativeAd(nativeAd: any): void;

	sendReplayMovieAd(): void;

	sendResumeRefresh(): void;

	sendShowInterstitial(): void;

	startADGProcess(): void;

	startProcess(): void;

	stopProcess(): void;
}

interface ADGNativeInterfaceChildDelegate {

	ADGNativeInterfaceChildCloseInterstitial?(): void;

	ADGNativeInterfaceChildCompleteMovieAd?(): void;

	ADGNativeInterfaceChildDidTapAd?(): void;

	ADGNativeInterfaceChildErrorClassName?(): void;

	ADGNativeInterfaceChildFailedToReceiveAd?(): void;

	ADGNativeInterfaceChildOpenUrl?(): void;

	ADGNativeInterfaceChildReadyMediation?(mediation: any): void;

	ADGNativeInterfaceChildReceiveAd?(): void;

	ADGNativeInterfaceChildReceiveAd?(nativeAd: any): void;

	ADGNativeInterfaceChildReplayMovieAd?(): void;

	ADGNativeInterfaceChildResumeRefresh?(): void;

	ADGNativeInterfaceChildShowInterstitial?(): void;
}
declare var ADGNativeInterfaceChildDelegate: {

	prototype: ADGNativeInterfaceChildDelegate;
};

declare class ADGSettings extends NSObject {

	static alloc(): ADGSettings; // inherited from NSObject

	static isGeolocationEnabled(): boolean;

	static new(): ADGSettings; // inherited from NSObject

	static setGeolocationEnabled(enable: boolean): void;

	static fillerAdCheckEnable: boolean;

	static videoAdsPlaybackSoundInSilentModeEnabled: boolean;

	static videoAudioType: ADGVideoAudioType;
}

declare class ADGTitle extends NSObject {

	static alloc(): ADGTitle; // inherited from NSObject

	static new(): ADGTitle; // inherited from NSObject

	static titleWithDictionary(dict: NSDictionary<any, any>): ADGTitle;

	readonly ext: NSObject;

	readonly text: string;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dict: NSDictionary<any, any>): this;
}

declare class ADGVideo extends NSObject {

	static alloc(): ADGVideo; // inherited from NSObject

	static new(): ADGVideo; // inherited from NSObject

	static videoWithDictionary(dict: NSDictionary<any, any>): ADGVideo;

	readonly isValid: boolean;

	readonly vasttag: string;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dict: NSDictionary<any, any>): this;
}

declare const enum ADGVideoAudioType {

	Mix = 0,

	Solo = 1,

	SoloForce = 2
}

declare const enum kADGErrorCode {

	Unknown = 0,

	CommunicationError = 1,

	ReceivedFiller = 2,

	NoAd = 3,

	NeedConnection = 4,

	ExceedLimit = 5,

	TemplateFailed = 6
}

declare const enum kADGInformationIconViewBackgroundType {

	White = 0,

	Black = 1
}
