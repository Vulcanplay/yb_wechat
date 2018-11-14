import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, AlertController} from 'ionic-angular';
import {EWPSBOrderDatumPage} from "./datum/datum";

@Component({
  selector: 'page-ewp-sb-order',
  templateUrl: 'order.html'
})
export class EWPSBOrderPage {
  //价格对象
  private sbPrice: any = {
    OFFERINFO001:"",  //主键
    OFFERINFO002:"",  //品牌ID
    OFFERINFO003:"",  //品牌名称
    OFFERINFO004:"",  //车系主键
    OFFERINFO005:"",  //车系名称
    OFFERINFO006:"",  //服务名称
    OFFERINFO007:"",  //服务期限
    OFFERINFO008:0,   //经销商低价
    OFFERINFO009:0,   //经销商指导价
    OFFERINFO010:"",  //延保公里数
    OFFERINFO011:"",  //保险公司ID
    OFFERINFO012:"",  //保险公司名称
    OFFERINFO013:0    //是否删除
  };
  //报价对象
  private sbOffer:any = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) {
  }
  ionViewWillEnter(){
    this.sbPrice = this.navParams.get("sbPrice");
    this.sbOffer = this.navParams.get("sbOffer");
  }
  /**
   * 支付订单
   * */
  payOrder(){
    this.alertCtrl.create({
      title: '支付成功',
      enableBackdropDismiss: false,
      buttons: [{
        text: '确定',
        handler: () => {
          this.navCtrl.push(EWPSBOrderDatumPage);
        }
      }]
    }).present();
  }
}
