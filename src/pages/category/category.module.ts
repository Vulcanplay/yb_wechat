import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CategoryPage} from './category';
import {FilterCityModule} from "../../shared/filter-city/filter-city.module";
import {CategoryService} from "./CategoryService";

@NgModule({
  imports: [IonicModule,FilterCityModule],
  declarations: [
    CategoryPage
  ],
  entryComponents: [
    CategoryPage
  ],
  providers: [CategoryService],
  exports: [IonicModule]
})
export class CategoryModule {
}
