import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FilterBrandSeriesPage} from "./filter-brand-series";
import{FilterBrandSeries} from "./FilterBrandSeries";

@NgModule({
  imports: [ IonicPageModule.forChild(FilterBrandSeriesPage)],
  declarations: [FilterBrandSeriesPage],
  providers: [FilterBrandSeries],
  exports: [FilterBrandSeriesPage]
})
export class ModalFromRightPageModule {}
