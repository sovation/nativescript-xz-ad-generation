import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { isIOS } from "tns-core-modules/platform";

@Component({
	selector: "Home",
	moduleId: module.id,
	templateUrl: "./home.component.html",
	styleUrls: ["./home.css"]
})
export class HomeComponent implements OnInit {

	nativeAdLocationId: number = 48635;
	nativeAdHtmlLocationId = isIOS ? 44942 : 44941;

	constructor(private routerExt: RouterExtensions) {
	}

	ngOnInit(): void {
	}

	onTapListViewSample(){
		this.routerExt.navigate(["home/listview"]);
	}

	changeAd(){
		this.nativeAdLocationId = this.nativeAdLocationId == 48635 ? 44942 : 48635;
	}
}
