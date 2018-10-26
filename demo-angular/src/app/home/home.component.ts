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

	nativeAdLocationId: number = isIOS ? 44942 : 44941;
	nativeAdHtmlLocationId = isIOS ? 72243 : 72244;

	constructor(private routerExt: RouterExtensions) {
	}

	ngOnInit(): void {
	}

	onTapListViewSample(){
		this.routerExt.navigate(["home/listview"]);
	}
}
