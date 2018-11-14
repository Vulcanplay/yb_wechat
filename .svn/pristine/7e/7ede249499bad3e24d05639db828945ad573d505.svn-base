import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController } from "ionic-angular";
import { DomSanitizer } from "@angular/platform-browser";
import {EWPService} from "../../../EWPService";
import {NativeService} from "../../../../../../providers/NativeService";
@Component({
  selector: 'page-ewp-sb-series',
  templateUrl: 'series.html',
  providers: [EWPService]
})
export class SBGetSeriesPage {
  private sbSeries: any = [];
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public nativeService: NativeService,
              public _sanitizer:DomSanitizer,
              public ewpService: EWPService) {
  }

  ionViewDidEnter() {
    this.getSeries();
  }

  /**
   * 获取品牌
   * */
  getSeries() {
    this.ewpService.getSeries({brandId: this.navParams.get("brandId")}).subscribe(r => {
      if (r.Code == 200){
        this.sbSeries = r.DataList.Table;
      } else {
        this.nativeService.alertTip(r.Message);
        this.dismiss();
      }
    });
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  /**
   * 根据品牌查询车型
   * */
  havingDataDismiss(seriesId, seriesName) {
    this.viewCtrl.dismiss({
      seriesId: seriesId,
      seriesName: seriesName
    });
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
}
