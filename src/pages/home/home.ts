import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import {OfferPage} from "./service/offer/offer";
import { DomSanitizer } from "@angular/platform-browser";
import {HomeService} from "./HomeService";
import {HomeWorkingPage} from "./working/working";
import {AMAP_WEB_SERVICES_KEY, APP_SERVE_URL, PAY_URL} from "../../providers/Constants";
import {Utils} from "../../providers/Utils";
import {HomeStorePage} from "./store/store";
import {HomeStoreDetailsPage} from "./store/details/details";
import {NativeService} from "../../providers/NativeService";
import {HomeCityPage} from "./city/city";
import {HttpService} from "../../providers/HttpService";
import {HomeVehiclePage} from "./vehicle/vehicle";
import {SignInPage} from "../login/sign-in/sign-in";
import { Storage } from "@ionic/storage";

declare var wx;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userInfo: any = {};

  public data: any = {
    toutiao: [],
    site: [],
    product: [],
    tip: [],
    vehicle: []
  };

  constructor(public navCtrl: NavController,
              public _sanitizer: DomSanitizer,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public nc: NativeService,
              private httpService: HttpService,
              public storage: Storage,
              public modalCtrl: ModalController,
              public homeService: HomeService) {}

  public payTip: any = null;
  ionViewDidLoad() {
    //this.navCtrl.push(HomeWorkingPage);
    // if (Utils.getQueryString("payStatus") != ''){
    //   this.payTip = {
    //     payType: Utils.getQueryString("payType"),
    //     orderId: Utils.getQueryString("orderId"),
    //     totalFee: Utils.getQueryString("totalFee"),
    //     payStatus: Utils.getQueryString("payStatus"),
    //   };
    // }
    // this.payTipAction(this.payTip);
    // this.storage.get('wx_user').then(userInfo => {
    //   if (userInfo != null) {
    //     this.userInfo = userInfo;
    //   }
    // });
    //this.init();
    //this.getSite();
    //this.getVehicle();
  }

  getVehicle() {
    this.homeService.getHomeVehicle().subscribe(r => {
      if (r.Code == 200){
        this.data.vehicle = r.DataList.Table;
        console.log(this.data.vehicle);
      }
    });
  }

  working(){
    this.navCtrl.push(HomeWorkingPage);
  }

  /**
   * 跳转延保报价
   * */
  yb(){
    this.navCtrl.push(OfferPage, {tabsYSBTag: 1});
  }
  /**
   * 跳转三包报价
   * */
  sb(){
    this.navCtrl.push(OfferPage, {tabsYSBTag: 2});
  }
  /**
   * 网点列表
   * */
  store(){
    this.navCtrl.push(HomeStorePage);
  }
  go(type){
    if (type == 0){
      this.nc.callNumber("4000505345");
    } else {
      this.navCtrl.push(HomeWorkingPage, {params: type});
    }
  }
  /***
   * 网点详情
   */
  storeDetails(item){
    this.navCtrl.push(HomeStoreDetailsPage, {store: item});
  }
  /**
   * 初始化
   * */
  init(){
    this.homeService.getHomeTouTiao().subscribe(r => {
      this.data.toutiao = r.DataList.Table;
    });
    this.homeService.getHomeProduct().subscribe(r => {
      this.data.product = r.DataList.Table;
    });
    this.homeService.getHomeTip().subscribe(r => {
      this.data.tip = r.DataList.Table;
    });
  }
  public siteParams: any = {
    Province: "北京",
    City: "北京",
    Coordinate: "",
  };
  /**
   * 选择对应城市的网点
   * */
  getSiteForCity(){
    let city = this.modalCtrl.create(HomeCityPage);
    city.present();
    city.onDidDismiss(data => {
      if (data){
        this.siteParams = data.item;
        // this.homeService.getHomeSite(this.siteParams).subscribe(r => {
        //   if (r.Code == 200){
        //     this.data.site = r.DataList.Table;
        //   } else {
        //     this.data.site = [];
        //     this.nc.alertTip(r.Message);
        //   }
        // });
      }
    });
  }
  /**
   * 获取网点推荐列表
   * */
  getSite(){
    let that = this;
    this.httpService.get(APP_SERVE_URL + '/wxOAuth/GetJSSDKConfig', {url: window.location.href}).subscribe(res => {
      let r = JSON.parse(res._body);
      let obj = r.DataList.Table1[0];
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: obj.appid,
        nonceStr: obj.noncestr,
        signature: obj.signature,
        timestamp: obj.timestamp,
        jsApiList: ['chooseImage', 'previewImage', 'getNetworkType', 'uploadImage', 'downloadImage', 'getLocalImgData', 'openLocation', 'getLocation', 'scanQRCode', 'chooseWXPay', 'closeWindow'] // 必填，需要使用的JS接口列表
      });
      wx.ready(() => {
        wx.getLocation({
          type: "gcj02",
          success: function (res) {
            let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
            let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
            /**
             * 获取网点地址
             * */
            that.homeService.getLocationForAMap({
              key: AMAP_WEB_SERVICES_KEY,
              location: longitude + "," + latitude
            }).subscribe(r => {
              console.log(JSON.stringify(r));
              if (r.infocode == "10000"){
                let obj = r.regeocode.addressComponent;
                that.siteParams.Province = obj.province;
                that.siteParams.City = obj.city;
                that.siteParams.Coordinate = latitude + ";" + longitude;
                that.homeService.getHomeSite(that.siteParams).subscribe(r => {
                  if (r.Code == 200){
                    that.data.site = r.DataList.Table;
                  } else {
                    that.data.site = [];
                    that.nc.alertTip(r.Message);
                  }
                });
              } else {
                that.nc.alertTip("获取当前位置失败~");
              }
            });
          }
        });
      });
      wx.error(res => {
        console.log('初始化js-sdk失败' + res.errMsg);
      });
    });
  }
  /**
   * 支付检查
   * */
  private payTipAction(payTip: any) {
    if (payTip != null){
      /**
       * payStatus
       * 0=取消支付
       * 1=支付成功
       * */
      if (payTip.payStatus == "0"){
        this.alertCtrl.create({
          title: '支付结果',
          subTitle: "支付失败；["+payTip.orderId+"]；("+payTip.totalFee+"元)",
          buttons: [{text: '取消'},
            {
              text: '重新支付',
              handler: () => {
                window.location.href = PAY_URL + "icar/authFreePay.do?payType="+payTip.payType+"&orderId="+payTip.orderId+"&totalFee="+payTip.totalFee+"&backUrl=" + window.location.href.substring(7, window.location.href.indexOf('?') - 1);
              }
            }
          ]
        }).present();
      } else {
        this.submitPayResult(payTip);
      }
    } else {
      return false;
    }
  }
  slideChanged(){}
  /**
   * 提交支付结果
   * */
  submitPayResult(payTip: any){
    this.homeService.submitPayResult({
      KHTIP012: payTip.orderId,
      KHTIP013: 1
    }).subscribe(r => {
      if (r.Code == 200){
        this.alertCtrl.create({
          title: '支付结果',
          subTitle: "支付成功；["+payTip.orderId+"]；("+payTip.totalFee+"元)",
          buttons: [{text: '确定'}]
        }).present();
      } else {
        this.alertCtrl.create({
          title: '支付结果',
          enableBackdropDismiss: true,
          subTitle: "支付成功，支付结果提交失败；["+payTip.orderId+"]；("+payTip.totalFee+"元)",
          buttons: [{
            text: '重新提交',
            handler: () => {
              this.submitPayResult(payTip);
            }
          }]
        }).present();
      }
    });
  }
  vehicle(item){
    if (this.userInfo.KHXX001 == null){
      this.signIn();
    } else {
      this.navCtrl.push(HomeVehiclePage, {item: item,userId: this.userInfo.KHXX001});
    }
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
      }
    });
  }
  getLocation(){
    this.nc.getUserLocation().then(res => {
      /*alert(res);*/
    });
  }
  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
}
