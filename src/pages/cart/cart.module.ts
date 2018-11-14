import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CartPage} from './cart';
import {FilterCityModule} from "../../shared/filter-city/filter-city.module";

@NgModule({
  imports: [IonicModule,FilterCityModule],
  declarations: [
    CartPage
  ],
  entryComponents: [
    CartPage
  ],
  providers: [],
  exports: [IonicModule]
})
export class CartModule {
}
