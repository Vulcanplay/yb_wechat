import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from "ionic-angular";
import { FilterBrandSeries } from "../../filter-brand-series/FilterBrandSeries";
@Component({
  selector: 'page-filter-configure',
  templateUrl: 'configure.html',
  providers: [FilterBrandSeries]
})
export class FilterConfigurePage {
  public series: any;

  private brandSeriesParams = {
    seriesId: '',
    seriesName: '',
    brandId: '',
    brandName: '',
    logo: '',
  };
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public filterBrandSeries: FilterBrandSeries) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewWillEnter() {
    this.brandSeriesParams.brandName = this.navParams.get("brandName");
    this.brandSeriesParams.logo = this.navParams.get("logo");
    this.getCarSeries(this.navParams.get('brandId'));
  }
  getCarSeries(brandId) {
    this.filterBrandSeries.getSeries({brandId: brandId}).subscribe(r => {
      this.series = r.DataList.Table;
    });
  }

  dismissToBrand(seriesId, brandId, brandName, seriesName) {
    this.brandSeriesParams.seriesId = seriesId;
    this.brandSeriesParams.seriesName = seriesName;
    this.brandSeriesParams.brandId = brandId;
    this.brandSeriesParams.brandName = brandName;
    this.viewCtrl.dismiss(this.brandSeriesParams);
  }

}
