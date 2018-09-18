import { NativeAdData, XzAdControllerBase } from "./xz-ad-controller-base";
import { EventData } from "tns-core-modules/data/observable";

// iOS用の広告コントローラ
export class XzAdController extends XzAdControllerBase {

	private _adg: ADGManagerViewController;

	public init(): this {

		let adgparam: NSDictionary<string, string> = NSMutableDictionary.alloc<string,string>().init();
		adgparam.setValueForKey(""+this.adItem.locationId, "locationid");

		let parentView: UIView;
		parentView = UIView.alloc().init();
		this._adg = ADGManagerViewController.alloc().initWithAdParams(adgparam, parentView);
		this._adg.delegate = ADGManagerViewControllerDelegateImpl.initWithOwner(new WeakRef(this));

		// バナーの種類ごとに初期化
		if( this.adItem.type === "native" ){
			// ネイティブ広告
			this._adg.usePartsResponse = true;
			// インフォメーションアイコンのデフォルト表示
			// デフォルト表示しない場合は必ずADGInformationIconViewの設置を実装してください
			this._adg.informationIconViewDefault = false;

		} else {
			console.log("Unsupported ad type ==> ", this.adItem.type );
			return null;
		}

		this._adg.loadRequest();

		return this;
	}

	// Viewを指定して初期化
	public initWithView(view: UIView, viewHeight: number, viewWidth: number, scale: number): this {
		console.log("init view...");
		// バナーの種類ごとに初期化
		if( this.adItem.type !== "banner" ){
			return null;
		}

		let adgparam: NSDictionary<string, string> = NSMutableDictionary.alloc<string,string>().init();
		adgparam.setValueForKey(""+this.adItem.locationId, "locationid"); // stringでないとクラッシュするためキャスト
		adgparam.setValueForKey(ADGAdType.kADG_AdType_Free, "adtype");
		adgparam.setValueForKey(viewWidth, "w");
		adgparam.setValueForKey(viewHeight, "h");

		this._adg = ADGManagerViewController.alloc().initWithAdParams(adgparam, view);
		this._adg.setAdScale(scale);
		// this._adg.delegate = ADGManagerViewControllerDelegateImpl.initWithOwner(new WeakRef(this));

		this._adg.loadRequest();
		return this;
	}

	public dispose(){
		if( this._adg ){
			this._adg.delegate = null;
			this._adg = null;
		}
	}

	// 広告表示を再開
	public resumeAd(){
		if( this._adg ){
			this._adg.resumeRefresh();
		}
	}

	public loadRequest(){
		this._adg.loadRequest();
	}

	// ネイティブアドを受信したとき
	public onReceiveNativeAd(ad: ADGNativeAd){
		let adData = <NativeAdData>{
			eventName: "receiveNativeAd",
			object: null
		};

		if( ad.mainImage ){
			adData.mainImageUrl = ad.mainImage.url;
			adData.mainImageHeight = ad.mainImage.height;
			adData.mainImageWidth = ad.mainImage.width;
		}

		if( ad.iconImage ){
			adData.iconImageUrl = ad.iconImage.url;
			adData.iconImageHeight = ad.iconImage.height;
			adData.iconImageWidth = ad.iconImage.width;
		}

		if( ad.desc ){
			adData.description = ad.desc.value;
		}

		if( ad.title ){
			adData.title = ad.title.text;
		}

		if( ad.sponsored ){
			adData.sponsor = ad.sponsored.value;
		}

		this.notify(adData);
	}

	// アドの受信失敗時
	public onFailed(){
		this.notify(<EventData>{
			eventName: "fail",
			object: null
		});
	}

}

class ADGManagerViewControllerDelegateImpl extends NSObject implements ADGManagerViewControllerDelegate {

	public static ObjCProtocols = [ADGManagerViewControllerDelegate];

	private _owner: WeakRef<XzAdController>;

	// インスタンス生成
	public static initWithOwner(owner: WeakRef<XzAdController>): ADGManagerViewControllerDelegateImpl {
		let ins = <ADGManagerViewControllerDelegateImpl>ADGManagerViewControllerDelegateImpl.new();
		ins._owner = owner;
		return ins;
	}

	ADGManagerViewControllerFailedToReceiveAdCode?(adgManagerViewController: ADGManagerViewController, code: kADGErrorCode): void {

		let failed = false;
		switch( code ){
			case kADGErrorCode.NoAd: console.log("no ad"); failed=true; break;
			case kADGErrorCode.NeedConnection: console.log("need connection"); failed=true; break;
			case kADGErrorCode.ExceedLimit: console.log("exceed limit"); failed=true; break;
			default:
				console.log("retry...");
				this._owner.get().loadRequest();
				break;
		}

		if(failed){
			this._owner.get().onFailed();
		}

	}

	ADGManagerViewControllerReceiveAdMediationNativeAd(adgManagerViewController: ADGManagerViewController, mediationNativeAd: any): void {

		if( mediationNativeAd.isKindOfClass(ADGNativeAd.class()) ){
			let nativeAd: ADGNativeAd = <ADGNativeAd>mediationNativeAd;
			console.log( nativeAd.title.text );
			this._owner.get().onReceiveNativeAd(nativeAd);
		}
	}
}
