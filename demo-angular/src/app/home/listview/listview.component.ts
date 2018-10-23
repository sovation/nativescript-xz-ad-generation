import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { UpdateAdData } from "nativescript-xz-ad-generation/angular/components/xz-ad-g-layout/xz-ad-g-layout.component";
import { ListView } from "tns-core-modules/ui/list-view";

interface Item {
	template: "item" | "ad" | "no-ad";
	data: string;
	locationId: number;
	adLoaded: boolean;
}

@Component({
	moduleId: module.id,
	templateUrl: "./listview.component.html",
})
export class ListViewComponent implements OnInit {

	items: Item[] = [];
	@ViewChild("listview") listviewRef: ElementRef;

	constructor() {
	}

	ngOnInit(): void {
		this.initItems();
	}

	initItems(){
		let idx = 0;
		let adCount=0;
		let templateKey: string;
		// prepare data
		while( idx<100 ){
			let hasAd = (idx+1)%10 === 0;
			adCount++;

			if( hasAd ){
				templateKey = "ad";
			} else {
				templateKey = "item";
			}

			this.items.push(<Item>{
				template: templateKey,
				data: `item ${idx+1}`,
				locationId: adCount%2 === 1 ? 70919 : 70919
			});
			idx++;
		}
	}

	templateSelector = (item: Item, index: number, items: any) => {
		return item.template;
	}

	onUpdateAd(data: UpdateAdData){
		let item = this.items[ data.id ];

		if( !data.adAvailable ){
			item.template = "no-ad";
		}
		this.refreshItemAt(data.id);
	}

	/**
	 * 指定したインデックスのアイテムを再描画
	 * @param index
	 */
	refreshItemAt(index: number) {
		let lv = <ListView>this.listviewRef.nativeElement;
		if( lv.ios ){
			let tv: UITableView = lv.ios;
			let indexArray = NSMutableArray.alloc<NSIndexPath>().init();
			indexArray.addObject( NSIndexPath.indexPathForRowInSection(index-1, 0) );
			indexArray.addObject( NSIndexPath.indexPathForRowInSection(index, 0) );
			UIView.performWithoutAnimation(() => {
				tv.reloadRowsAtIndexPathsWithRowAnimation(indexArray, UITableViewRowAnimation.None);
			});
		}
	}
}
