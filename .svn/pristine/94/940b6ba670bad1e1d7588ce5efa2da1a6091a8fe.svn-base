import { Component, ViewChild } from '@angular/core';
import { Platform, IonicApp, Nav, ModalController, Keyboard, ToastController, NavParams, Events } from 'ionic-angular';
import { NativeService } from "../providers/NativeService";
import { Helper } from "../providers/Helper";
import { GlobalData } from "../providers/GlobalData";
import { Storage } from "@ionic/storage";
import { TabsPage } from '../pages/tabs/tabs';
import { UserInfo } from "../model/UserInfo";
import { SignInPage } from "../pages/login/sign-in/sign-in";
import { OrderPage } from '../pages/mine/order/order';
import { AboutPage } from '../pages/mine/about/about';
import {Utils} from "../providers/Utils";
import {SharePage} from "../pages/share/share";
import {HomePage} from "../pages/home/home";

@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  @ViewChild('myNav') nav: Nav;
  rootPage: any = TabsPage;
  userInfo: any = {};

  constructor(private platform: Platform,
              private storage: Storage,
              private helper: Helper,
              private modalCtrl: ModalController,
              private nativeService: NativeService) {
    platform.ready().then(() => {

      //初始化获取微信信息
      // this.helper.initWxUser((wxUserInfo) => {
      //   console.log(wxUserInfo);
      //   this.helper.initWxJsSdk();
      // });
      //初始化JsSdk
      //this.helper.initWxJsSdk();
      //初始化本地"开发者工具"
      this.helper.alloyLeverInit();

      /**
       * ---------------------------------------接参---------------------------------------
       * index -> 首页（支付回调参数）
       * order -> 订单
       * about -> 关于
       * */
      switch (Utils.getQueryString("action")){
        case "index":
          break;
        case "order":
          this.storage.get('wx_user').then((user: UserInfo) => { //从缓存中获取token
            if (user) {
              this.userInfo = user;
              /**
               * @status
               * 1：未完成  0：已完成
               * */
              this.nav.setRoot(OrderPage, {type: 0, status: -1, userId: this.userInfo.KHZH001});
            } else {
              let modal = this.modalCtrl.create(SignInPage, {from: 'wx_menu_order'});
              modal.present();
              modal.onDidDismiss(data => {
                if (data){
                  this.userInfo = data;
                  this.nav.setRoot(OrderPage, {type: 0, status: -1, userId: this.userInfo.KHZH001});
                } else {
                  this.nativeService.alertTip("登录失败");
                }
              })
            }
          });
          break;
        case "about":
          this.nav.setRoot(AboutPage);
          break;
      }
    });
  }
}
