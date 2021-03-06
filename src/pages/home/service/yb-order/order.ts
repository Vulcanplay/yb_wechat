import { Component } from '@angular/core';
import { Storage } from "@ionic/storage";
import { ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { EWPYBOrderDatumPage } from "./datum/datum";
import { DomSanitizer } from "@angular/platform-browser";
import { NativeService } from "../../../../providers/NativeService";
import { SignInPage } from "../../../login/sign-in/sign-in";
import {EWPService} from "../EWPService";
import {ServiceContractPage} from "../details/service-contract/service-contract";
import {YBServiceContractPage} from "./service-contract/service-contract";
import {PAY_URL} from "../../../../providers/Constants";

@Component({
  selector: 'page-ewp-yb-order',
  templateUrl: 'order.html'
})
export class EWPYBOrderPage {
  public isHasLogin: boolean = false;
  public userInfo;
  //报价数组
  private ybPriceArray: any = [];
  //价格对象
  private ybPrice:any = {
    PRODUCT001:"",        //主键
    PRODUCT002:"",        //产品种类ID
    PRODUCT003:null,      //适用产品基础车型ID
    PRODUCT004:"",        //保险公司项目ID  todo
    PRODUCT005:null,         //保车年限
    PRODUCT006:0,         //原价 todo
    PRODUCT007:null,       //现价 todo
    PRODUCT008:0,         //是否删除
    PRODUCT009:0,         //赔偿限额值
    PRODUCT010:0,       //指导价 todo
    PRODUCT011:null,      //服务条款模板ID
    PRODUCT012:0,         //保车公里数
    PRODUCT013:"",        //保险公司ID
    PRODUCT014:0,         //四驱加价值
    PRODUCT015:0,         //排量加价值
    PRODUCT016:null,      //排量临界ID
    PRODUCT017:null,      //赔付排量临界ID
    PRODUCT018:0,         //适用车型价格范围
    PRODUCT019:0,        //车龄
    PRODUCT020:null,      //出保范围
    PC002:null,           //车品牌 todo
    PC003:null,           //车系 todo
    BXGS002:"",           //保险公司名称 todo
    BXXM004:"",           //保项名称 todo
    BXXM005:null,         //保项说明
    ACTIVITYPRODUCT008:null,//活动赠送优惠券ID
    ISACTIVI:0,            //是否活动(0：否  1：是)
    tc: false,
    tcId: "",
    active: false
  };
  //报价对象
  private ybOffer:any = {
    brandId: "",          //品牌ID
    carseriseId: "",      //车系ID
    brandName: "",        //品牌名称
    carseriseName: "",    //车系名称
    priceList: "-1",      //价格区间
    firstTime: "",        //初次等级日期
    mileage: null,        //当前行驶公里数
    activeId: "",       //活动ID
    productTypeId: "",  //产品种类ID
    isAgree: false,       //已知悉承保车辆标准
    brandLogo: "",        //品牌LOGO
  };
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public _sanitizer: DomSanitizer,
              public alertCtrl: AlertController,
              public storage: Storage,
              public ewpService: EWPService,
              public nativeService: NativeService) {
  }
  ionViewWillEnter(){
    this.ybPriceArray = this.navParams.get("ybPrice");
    this.ybOffer = this.navParams.get("ybOffer");
    this.init();
    this.storage.get('wx_user').then(userInfo => {
      if (userInfo != null) {
        this.userInfo = userInfo;
        this.isHasLogin = true;
      }
    });
  }

  //提交参数
  private submitParams: any = {
    USERID:'',//发送人ID
    CUSTOMID:'',//客户ID
    ORDER004:'',//保险公司ID
    ORDER005:'',//原价
    ORDER006:'',//现价
    ORDER007:'',//指导价
    ORDER011:'',//保险项目名称
    ORDER012:'',//保险公司名称
    ORDER010:'',//品牌
    ORDER027:'',//车系
    PRODUCT001:"",//产品种类主键
    ACTIVEID:'0043E0DC-E05F-4ACB-8520-6C59D3C0A511',//活动ID
    isAgree: false, //同意条款
    //是否上传签名
    uploaded: false,
    //签名后返回的URI
    uploadedUri: '',
  };
  /**
   * 提交
   * */
  public orderId: any = "";
  submit(){
    if (this.orderId != ""){
      this.navCtrl.push(EWPYBOrderDatumPage, {userInfo: this.userInfo, ybOffer: this.ybOffer ,orderId: this.orderId});
    } else {
      if(!this.isHasLogin){
        this.nativeService.alertTip("请登录后提交~");
        this.signIn();
        return false;
      } else {
        if (!this.submitParams.uploaded && this.submitParams.uploadedUri == '') {
          this.nativeService.alertTip("请阅读合同，并签字。");
          return false;
        } else {
          this.submitParams.USERID = "E474FD4E-4257-4220-BFF1-6953A94DD111"; //TODO remove
          this.submitParams.CUSTOMID = this.userInfo.KHZH001;
          this.submitParams.ORDER004 = this.ybPrice.PRODUCT013;
          this.submitParams.ORDER005 = this.ybPrice.PRODUCT006;
          this.submitParams.ORDER006 = this.ybPrice.PRODUCT007;
          this.submitParams.ORDER007 = this.ybPrice.PRODUCT010;
          this.submitParams.ORDER011 = this.ybPrice.BXXM004;
          this.submitParams.ORDER012 = this.ybPrice.BXGS002;
          this.submitParams.ORDER010 = this.ybPrice.PC002;
          this.submitParams.ORDER027 = this.ybPrice.PC002;
          this.submitParams.PRODUCT001 = this.ybPrice.PRODUCT001;
          this.ewpService.submitYBPrice(this.submitParams).subscribe(r => {
            if(r.Code == 200){
              this.orderId = r.DataList.Table1[0].OrderId;
              /*this.navCtrl.push(EWPYBOrderDatumPage, {userInfo: this.userInfo, ybOffer: this.ybOffer ,orderId: this.orderId});*/
              window.location.href = PAY_URL + "icar/authFreePay.do?payType=999&orderId="+r.DataList.Table1[0].OrderPayId+"&totalFee="+this.ybPrice.PRODUCT007+"&backUrl=" + window.location.href.substring(7, window.location.href.indexOf('?') == -1 ? window.location.href.length - 1 : window.location.href.indexOf('?') - 1);
            } else {
              this.nativeService.alertTip(r.Message);
            }
          });
        }
      }
    }
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
          this.navCtrl.push(EWPYBOrderDatumPage);
        }
      }]
    }).present();
  }
  /**
   * 签字
   * */
  serviceContract(){
    let modal = this.modalCtrl.create(YBServiceContractPage, { BXGS: this.ybPrice.PRODUCT013 == '7FE47047-A5A0-4850-975B-AD4F619295A3' ? 'tb' : 'rb' });
    modal.present();
    modal.onDidDismiss(data => {
      //是否完成签字
      if(data){
        this.submitParams.uploaded = data.uploaded;
        this.submitParams.uploadedUri = data.uploadedUri;
      }
    });
  }
  /**
   * 选择保项
   * */
  setYbPrice(item){
    if (item.PRODUCT001 == this.ybPrice.PRODUCT001){ return false; }
    for (let obj of this.ybPriceArray){
      obj.active = false;
    }
    item.active = true;
    this.ybPrice = item;
  }
  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
  /**
   * 弹出信息
   * */
  alertInfoWindow(title, type){
    this.nativeService.alertInfoWindow(title, type);
  }
  /**
   * 选择套餐
   * */
  tcSelected: boolean = false;
  selected(){
    this.ybOffer.productTypeId = this.ybPrice.tcId;
    this.ewpService.getYBPrice(this.ybOffer).subscribe( r => {
      if(r.Code == 200){
        this.ybPriceArray = r.DataList.Table;
        this.init();
      } else {
        this.nativeService.alertTip(r.Message);
      }
    });
  }
  /**
   * 登录
   * */
  signIn() {
    let profileModal = this.modalCtrl.create(SignInPage);
    profileModal.present();
    profileModal.onDidDismiss(data => {
      if (data != null) {
        this.userInfo = data;
        this.isHasLogin = true;
      }
    });
  }

  /**
   * 初始化
   * */
  private init() {
    if (this.ybPriceArray.length == 0){ return false; }
    for (let obj of this.ybPriceArray){
      obj.active = false;
    }
    this.ybPriceArray[0].active = true;
    this.ybPrice = this.ybPriceArray[0];

    switch (this.ybPrice.PRODUCT002){
      //C端网约车
      case "B36B26FE-B930-4A29-8449-705760D49898":
        this.ybPrice.tc = true;
        this.ybPrice.tcId = "68149BC5-2C2F-41C6-A557-A980B6ABC92F";
        break;
      //C端出租车
      case "1B27FA7A-6237-462F-A362-045220E69E11":
        this.ybPrice.tc = true;
        this.ybPrice.tcId = "4D5EF3AE-E35C-4238-9459-B91402CB3257";
        break;
      //C端出租车(包赠送)
      case "68149BC5-2C2F-41C6-A557-A980B6ABC92F":
        this.ybPrice.tc = true;
        this.ybPrice.tcId = "B36B26FE-B930-4A29-8449-705760D49898";
        break;
      //C端出租车(包赠送)
      case "4D5EF3AE-E35C-4238-9459-B91402CB3257":
        this.ybPrice.tc = true;
        this.ybPrice.tcId = "1B27FA7A-6237-462F-A362-045220E69E11";
        break;
    }
  }
}
