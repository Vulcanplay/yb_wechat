import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { PaymentOrderPage } from "../payment-order/payment-order";
import { DomSanitizer } from "@angular/platform-browser";
import { FILE_SERVE_URL } from "../../../../providers/Constants";
import { EWPService } from "../EWPService";
import { UserInfo } from '../../../../model/UserInfo';
@Component({
  selector: 'page-ewp-confirm-order',
  templateUrl: 'confirm-order.html'
})
export class ConfirmOrderPage {
  public typeText: string;
  public YBXQ: any[] = [];
  public YBJG: any = {};
  public vehicle: any = {};
  public userinfo: UserInfo;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private platform: Platform,
    public eWPService: EWPService,
    public modalCtrl: ModalController,
    public _sanitizer: DomSanitizer) {
  }
  ionViewWillEnter() {
    this.typeText = "提交订单";
    //详情
    this.YBXQ = this.navParams.get("YBXQ");
    this.vehicle = this.navParams.get("vehicle");
    this.YBJG = this.navParams.get("YBJG");
    this.userinfo = this.navParams.get('userinfo');
  }

  paymentOrder() {
    //提交订单存储
    let params = {
      YBCP001: this.navParams.get("YBCP001"),  //延保产品ID
      DD006: '0',   //是否发票
      DD008: this.YBXQ[0].YBJG003,  //实付价格
      DD015: '0', //是否活动渠道0.非活动渠道1.活动渠道
      DD017: '1', //订单来源0订单 1购物车
      YBJG001: this.navParams.get("YBJG001"),//延保价格ID
      MJCL001: this.vehicle.MJCL001,//买家车辆ID
      MJXX001: this.userinfo.Userid//买家信息ID
    };
    this.eWPService.addOrderForBuy(params).subscribe(r => {
      if (r.data.status) {
        let orderid = r.data.orderid;
        let userid = r.data.userid;
        let orderguid = r.data.orderguid;
        this.navCtrl.push(PaymentOrderPage, { orderid: orderid, userid: userid, orderguid: orderguid });
      }
      else {
        this.alertCtrl.create({
          title: '提交订单失败，请稍后重试',
          buttons: [{ text: '取消' },
          {
            text: '确定',
            handler: () => {
              this.platform.exitApp();
            }
          }]
        }).present();
        return false;
      }
    });
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${FILE_SERVE_URL + image})`);
  }
}
