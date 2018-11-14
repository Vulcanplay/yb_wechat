import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, AlertController, ViewController} from 'ionic-angular';
import { Storage } from "@ionic/storage";
import {OrderService} from "../OrderService";
import {NativeService} from "../../../../providers/NativeService";
import {Utils} from "../../../../providers/Utils";
import {PreviewPicturePage} from "../../../../shared/preview-picture/preview-picture";
import {FWXY_SERVE_URL, SB_HT_SERVE_URL} from "../../../../providers/Constants";
import {SignaturePadMSBPage} from "../../../../shared/signature-pad-sanbao/signature-pad-m";

@Component({
  selector: 'page-sanbao-order-details',
  templateUrl: 'details.html'
})
export class SanBaoOrderDetailsPage {
  //列表控制
  public itemPower = [true, false, false, false];
  //今天
  public toDay: any = '';
  //提交参数
  public params: any = {
    OFFERORDERINFO001:"", //订单ID
    OFFERORDERINFO002:"", //报价ID
    OFFERORDERINFO003:"", //购买人ID
    OFFERORDERINFO004:"", //购买人姓名
    OFFERORDERINFO005:"", //销售人员ID
    OFFERORDERINFO006:"", //销售人员姓名
    OFFERORDERINFO007:"", //购买人车品牌ID
    OFFERORDERINFO008:"", //购买人车品牌名称
    OFFERORDERINFO009:"", //购买人车系ID
    OFFERORDERINFO010:"", //购买人车系名称
    OFFERORDERINFO011:"", //服务名称
    OFFERORDERINFO012:"", //服务期限
    OFFERORDERINFO013: 0, //购买价
    OFFERORDERINFO014: 0, //三包公里数
    OFFERORDERINFO015:"", //保险公司名称
    OFFERORDERINFO016: 0, //是否支付
    OFFERORDERINFO017: 1, //支付方式 1.微信 2.POS
    OFFERORDERINFO018: 0, //是否删除
    OFFERORDERINFO019:"", //车辆VIN识别码
    OFFERORDERINFO020:"", //发动机号
    OFFERORDERINFO021:"", //车牌号码
    OFFERORDERINFO022: 0, //购买人电话号码
    OFFERORDERINFO023: 0, //证件号码类型
    OFFERORDERINFO024: 0, //身份证号
    OFFERORDERINFO025:"", //保修起始日期
    OFFERORDERINFO026:"", //保修终止日期
    OFFERORDERINFO027: 0, //保修合同购买时里程表读数
    OFFERORDERINFO028:"", //新车出厂日期
    OFFERORDERINFO029:"", //购车发票日期
    OFFERORDERINFO030:null, //车辆购买价
    OFFERORDERINFO031:null, //新车购买发票抬头
    OFFERORDERINFO032:null, //是否四区
    OFFERORDERINFO033:null, //是否涡轮增压
    OFFERORDERINFO034:null, //车型
    OFFERORDERINFO035:"", //服务协议文件名称
    OFFERORDERINFO036:"", //合同路径
    OFFERORDERINFO037: 0, //车龄
    OFFERORDERINFO038:"", //POS订单编号
    OFFERORDERINFO039:"", //订单编号
    OFFERCONTRACTINF040:"", //合同编号
    OFFERCONTRACTINF041: 1, //合同状态0 有效 1无效合同
    OFFERORDERINFO041:"", //通讯地址
    OFFERORDERINFO040: 0, //指导价
    OFFERORDERINFO043: 0, //最低价
    OFFERCONTRACTINF001: "", //合同ID
  };

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams,
              public nativeService: NativeService,
              public alertCtrl: AlertController,
              public storage: Storage,
              public orderService: OrderService,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    //获取今日时间
    this.toDay = Utils.dateFormat(new Date(), 'YYYY-MM-DD').toString();
    this.params = this.navParams.get("item");
  }

  /**
   * 提交信息
   * */
  submit(hasAlert){
    if (this.params.OFFERORDERINFO004 === '' ||
      this.params.OFFERORDERINFO024 === '' ||
      this.params.OFFERORDERINFO041 === '' ||
      this.params.OFFERORDERINFO019 === '' ||
      this.params.OFFERORDERINFO020 === ''){
      this.nativeService.alertTip("请补全信息。");
    } else if (this.params.OFFERORDERINFO022 === ''){
      this.nativeService.alertTip("电话号码不能为空，且必须是数字。");
    } else if (this.params.OFFERORDERINFO022.length > 11){
      this.nativeService.alertTip("电话号码长度不能超过11位。");
    } else if (this.params.OFFERORDERINFO024 === ''){
      this.nativeService.alertTip("身份证号码不能为空，且必须是数字。");
    } else if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.params.OFFERORDERINFO024)){
      this.nativeService.alertTip("身份证号码只能15位或18位。");
    } else if (this.params.OFFERORDERINFO041.length > 50){
      this.nativeService.alertTip("通讯地址不能超过50位。");
    } else if (this.params.OFFERORDERINFO019.length > 50){
      this.nativeService.alertTip("车架号不能超过50位。");
    } else if (this.params.OFFERORDERINFO020.length > 50){
      this.nativeService.alertTip("发动机号不能超过50位。");
    } else if (this.params.OFFERORDERINFO027 === ''){
      this.nativeService.alertTip("当前行驶公里数不能为空，且必须是数字。");
    } else if (this.params.OFFERORDERINFO027 > 3000){
      this.nativeService.alertTip("当前行驶公里数不能大于3000。");
    } else if (this.params.OFFERORDERINFO013 < this.params.OFFERORDERINFO043) {
      this.nativeService.alertTip("购买价不能低于最低价（" + this.params.OFFERORDERINFO043.toFixed(2) + "）。");
    } else {
      /*this.orderService.saveSBInfo(this.params).subscribe(r => {
        if(r.Code == 200){
          if(hasAlert){
            this.nativeService.alertTip("修改成功");
          } else {
            let p = {
              orderid: this.params.OFFERORDERINFO039,
              fee: this.params.OFFERORDERINFO013,
              htid: this.params.OFFERCONTRACTINF001
            };
            let modal = this.modalCtrl.create(PaySanBaoModal, p, {
              enterAnimation: 'pp-modal-from-right-enter',
              leaveAnimation: 'pp-modal-from-right-leave'
            });
            modal.present();
            modal.onDidDismiss(data => {

            });
          }
        } else {
          this.nativeService.alertTip(r.Message);
        }
      });*/
    }
  }

  /**
   * 分项收缩控制
   * */
  itemToggle(index) {
    this.itemPower[index] = !this.itemPower[index];
  }

  /**
   * 去支付
   * */
  goPay(){
    this.submit(false);
  }

  /**
   * 去签字 （已支付并未签字）
   * */
  orderDetailsSignature(){
    let modal = this.modalCtrl.create(SignaturePadMSBPage, {htid: this.params.OFFERCONTRACTINF001}, {
      enterAnimation: 'center-modal-from-right-enter',
      leaveAnimation: 'center-modal-from-right-leave'
    });
    modal.present();
  }

  /**
   * 合同图片预览
   * */
  viewPhoto(picturePaths) {
    this.modalCtrl.create(PreviewPicturePage, { 'initialSlide': 0, 'picturePaths': [SB_HT_SERVE_URL + picturePaths] }).present();
  }

  /**
   * 服务协议图片预览
   * */
  viewPhotoFWXY(picturePaths) {
    this.modalCtrl.create(PreviewPicturePage, { 'initialSlide': 0, 'picturePaths': [FWXY_SERVE_URL + picturePaths] }).present();
  }
}
