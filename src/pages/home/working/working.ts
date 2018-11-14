import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';

declare var pdfjsLib;
@Component({
  selector: 'page-home-working',
  templateUrl: 'working.html'
})
export class HomeWorkingPage {
  public title = "";
  public pdfSrc = "//cdn.mozilla.net/pdfjs/tracemonkey.pdf";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {

  }
  ionViewDidEnter(){

    switch (this.navParams.get("params")){
      case 0:
        this.title = "奖励规则";
        break;
      case 1:
        this.title = "车辆各部位维修价格";
        break;
      case 2:
        this.title = "全国售后合作伙伴(含4S店)加盟中";
        break;
      case 3:
        this.title = "理赔流程";
        break;
    }
  }
}
