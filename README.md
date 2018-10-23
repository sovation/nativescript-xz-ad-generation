# NativeScript AdGeneration Plugin

## Installation


```javascript
tns plugin add nativescript-xz-ad-generation
```

## Usage 

### Import Module

```typescript
@NgModule({
    imports: [
    	NativeScriptCommonModule,
	    HomeRoutingModule,
	    XzAdGenerationModule, // <-- Add this!
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }

```

### Banner

```html
<XzAdGBanner locationId="48547" bannerWidth="320" bannerHeight="50"></XzAdGBanner>
```

### Native Ad

```html
<XzAdGLayout locationId="48635"> <!-- Use 48636 for Android -->
	<ng-template let-ad>
		<GridLayout class="ad-container" columns="100 *" rows="auto">
			<GridLayout rows="auto" col="0">
				<Image src="{{ ad.iconImageUrl ? ad.iconImageUrl : ad.mainImageUrl }}" width="100" height="100"></Image>
				<XzAdGInformationIconView *ngIf="ad.nativeAd" [nativeAd]="ad.nativeAd" verticalAlignment="top" horizontalAlignment="left"></XzAdGInformationIconView>
			</GridLayout>

			<StackLayout col="1">
				<Label [text]="ad.title" textWrap="true"></Label>
				<Label [text]="ad.sponsor" class="sponsor-name"></Label>
			</StackLayout>
		</GridLayout>
	</ng-template>
</XzAdGLayout>
```

## Demo

See demo-angular

```shell
npm run setup
# ios
npm run demo.ng.ios
# android
npm run demo.ng.android
```

## For Comitter

Build & Publish

```shell
cd publish
./pack.sh # For build
./publish.sh # For build & publish
```
   
## License

Apache License Version 2.0, January 2004
