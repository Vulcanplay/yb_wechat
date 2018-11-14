import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController } from "ionic-angular";
import { FilterConfigurePage } from "./configure/configure";
import { DomSanitizer } from "@angular/platform-browser";
import { FilterBrandSeries } from "../filter-brand-series/FilterBrandSeries";
import { BrandType } from "../../model/Type";
import {NativeService} from "../../providers/NativeService";
@Component({
  selector: 'page-filter-brand-series',
  templateUrl: 'filter-brand-series.html',
  providers: [FilterBrandSeries]
})
export class FilterBrandSeriesPage {
  public brandType: BrandType;
  A: any[];
  B: any[];
  C: any[];
  D: any[];
  E: any[];
  F: any[];
  G: any[];
  H: any[];
  I: any[];
  J: any[];
  K: any[];
  L: any[];
  M: any[];
  N: any[];
  O: any[];
  P: any[];
  Q: any[];
  R: any[];
  S: any[];
  T: any[];
  U: any[];
  V: any[];
  W: any[];
  X: any[];
  Y: any[];
  Z: any[];
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public nativeService: NativeService,
              public _sanitizer:DomSanitizer,
              public filterBrandSeries: FilterBrandSeries) {
  }

  ionViewDidEnter() {
    this.getBrand();
  }

  /**
   * 获取品牌
   * */
  getBrand() {
    this.filterBrandSeries.getBrand().subscribe(r => {
      if (r.Code == 200){
        this.brandType = r.DataList;
        this.A = r.DataList.A;
        this.B = r.DataList.B;
        this.D = r.DataList.D;
        this.F = r.DataList.F;
        this.G = r.DataList.G;
        this.H = r.DataList.H;
        this.J = r.DataList.J;
        this.K = r.DataList.K;
        this.L = r.DataList.L;
        this.M = r.DataList.M;
        this.Q = r.DataList.Q;
        this.T = r.DataList.T;
        this.S = r.DataList.S;
        this.Z = r.DataList.Z;
      } else {
        this.nativeService.alertTip(r.Message);
      }
    });
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  /**
   * 根据品牌查询车型
   * */
  filterConfigureModal(brandId, brandName, logo) {
    let modal = this.modalCtrl.create(FilterConfigurePage, { brandId: brandId, brandName: brandName, logo: logo},{
      enterAnimation: 'modal-from-right-enter',
      leaveAnimation: 'modal-from-right-leave'
    });
    modal.present();
    modal.onDidDismiss(data => {
      if (data != null) {
        this.viewCtrl.dismiss(data);
      }
    });
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
}
