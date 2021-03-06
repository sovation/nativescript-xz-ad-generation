import { XzAdControllerBase } from "./xz-ad-controller-base";
import { EventData } from "tns-core-modules/data/observable";
import { NativeAdData, XzAdItem } from './xz-ad-common'
import {View} from "tns-core-modules/ui/core/view";

// iOS用の広告コントローラ
export class XzAdController extends XzAdControllerBase {

	private _adg: ADGManagerViewController;
	private _delegate: any;
	private _tapTargetView: WeakRef<UIView>;

	/**
	 * ネイティブアドを初期化
	 * @param parentView
	 */
	public initNativeAd(parentView: View): this {

		if( this.adItem.type !== "native" ){
			console.log("Unsupported ad type ==> ", this.adItem.type );
			return null;
		}

		if( parentView == null ){
			throw new Error("no parent view!");
		}

		let targetView = parentView.ios as UIView;
		let parentWidth = targetView.frame.size.width;
		let parentHeight = targetView.frame.size.height;
		let pl = isNaN(+parentView.style.paddingLeft) ? 0 : +parentView.style.paddingLeft;
		let pr = isNaN(+parentView.style.paddingRight) ? 0 : +parentView.style.paddingRight;
		let pt = isNaN(+parentView.style.paddingTop) ? 0 : +parentView.style.paddingTop;
		let adWidth = parentWidth - (pl+pr); // 表示領域から余白を除いた文を広告領域とする
		let adHeight = parentHeight/parentWidth * adWidth;

		this._tapTargetView = new WeakRef<UIView>(targetView);

		let adgparam: NSDictionary<string, string> = NSMutableDictionary.alloc<string,string>().init();
		adgparam.setValueForKey(""+this.adItem.locationId, "locationid");
		adgparam.setValueForKey(ADGAdType.kADG_AdType_Free, "adtype");

		this._adg = ADGManagerViewController.alloc().initWithAdParams(adgparam, targetView);
		this._delegate = ADGManagerViewControllerDelegateImpl.initWithOwner(new WeakRef(this));
		this._adg.delegate = this._delegate;

		this._adg.usePartsResponse = true;
		// インフォメーションアイコンのデフォルト表示
		// デフォルト表示しない場合は必ずADGInformationIconViewの設置を実装してください
		this._adg.informationIconViewDefault = false;

		// HTMLテンプレートを使用したネイティブ広告を表示するためには以下のように配置するViewを指定します
		this._adg.adSize = CGSizeMake(adWidth, adHeight);
		// コンテナのpaddingを考慮(これがないと、常にx,y=0,0からの描画になります)
		this._adg.adOrigin = CGPointMake(pl, pt);

		this._adg.loadRequest();

		return this;
	}

	// Viewを指定して初期化
	public initWithView(view: UIView, viewHeight: number, viewWidth: number, scale: number): this {
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
		this._adg.adScale = scale;
		this._adg.delegate = ADGManagerViewControllerDelegateImpl.initWithOwner(new WeakRef(this));

		this._adg.loadRequest();
		return this;
	}

	public dispose(){
		if( this._adg ){
			this._adg.delegate = null;
			this._adg = null;
		}
	}

	// 広告をリロードしてローテーションを再開
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
			locationId: this.adItem.locationId,
			object: null
		};

		if( ad ){
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
			adData.nativeAd = ad;

			if( this._tapTargetView.get() ){
				ad.setTapEvent(this._tapTargetView.get());
			}
		} else {
			adData.isHTML = true;
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

	getAdItem(): XzAdItem {
		return this.adItem;
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

	/**
	 * 広告受信時
	 * @param adgManagerViewController
	 */
	ADGManagerViewControllerReceiveAd(adgManagerViewController: ADGManagerViewController){
		if( this._owner && this._owner.get() ){
			const controller = this._owner.get();
			// HTML型のネイティブ広告の場合
			if( controller.getAdItem().type == 'native' ){
				this._owner.get().onReceiveNativeAd(null);
			}
		}
	}

	/**
	 * 広告受信失敗時
	 * @param adgManagerViewController
	 * @param code
	 */
	ADGManagerViewControllerFailedToReceiveAdCode?(adgManagerViewController: ADGManagerViewController, code: kADGErrorCode): void {

		let failed = false;
		switch( code ){
			case kADGErrorCode.NoAd: console.log("no ad"); failed=true; break;
			case kADGErrorCode.NeedConnection: console.log("need connection"); failed=true; break;
			case kADGErrorCode.ExceedLimit: console.log("exceed limit"); failed=true; break;
			default:
				console.log("retry...");
				if( this._owner && this._owner.get() ){
					this._owner.get().loadRequest();
				}
				break;
		}

		if(failed && this._owner && this._owner.get() ){
			this._owner.get().onFailed();
		}

	}

	/**
	 * ネイティブ広告の受信時
	 * @param adgManagerViewController
	 * @param mediationNativeAd
	 */
	ADGManagerViewControllerReceiveAdMediationNativeAd(adgManagerViewController: ADGManagerViewController, mediationNativeAd: any): void {
		if( mediationNativeAd.isKindOfClass(ADGNativeAd.class()) ){
			const nativeAd: ADGNativeAd = <ADGNativeAd>mediationNativeAd;
			if( this._owner && this._owner.get() ){
				this._owner.get().onReceiveNativeAd(nativeAd);
			}
		}
	}

}
