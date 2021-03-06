import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { OrderService } from "./OrderService";
import { Storage } from "@ionic/storage";
import { DomSanitizer } from "@angular/platform-browser";
import {NativeService} from "../../../providers/NativeService";
import {SanBaoOrderDetailsPage} from "./sanbao-details/details";
import {YanBaoOrderDetailsPage} from "./yanbao-details/details";
import {PAY_URL} from "../../../providers/Constants";
import {SignInPage} from "../../login/sign-in/sign-in";
import {SignaturePadRPage} from "../../../shared/signature-pad-return/signature-pad-r";

@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {
  //标题
  private barTitle: string;
  //延保列表
  private ybOrderList: any[] = [];
  //三包列表
  private sbOrderList: any[] = [];
  public isHasLogin: boolean = false;
  //订单类型
  private orderType: any;
  //订单状态
  private status: any = this.navParams.get('status');
  //文本检索
  private searchText: string = "";
  //用户信息
  private userId: string = this.navParams.get('userId');
  userInfo: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public _sanitizer: DomSanitizer,
              public storage: Storage,
              public orderService: OrderService,
              public nativeService: NativeService) {
  }
  ionViewWillEnter() {
    this.orderType = this.navParams.get("type") || null;
    if (this.orderType == null){
      this.storage.get('wx_user').then(userInfo => {
        if (userInfo != null) {
          this.userInfo = userInfo;
          this.userId = userInfo.KHZH001;
          this.isHasLogin = true;
          this.orderType = 0;
          this.status = -1;
          this.init();
        } else {
          this.signIn();
        }
      });
    } else {
      this.init();
    }
  }
  /**
   * 初始化
   * */
  init(){
    switch (this.orderType){
      case 0:
        this.barTitle = "延保订单";
        this.ybOrderList = [];
        //延保订单
        this.getYBOrderList(this.status);
        break;
      case 1:
        this.barTitle = "喷漆券订单";
        //TODO
        //喷漆订单
        break;
      case 2:
        this.barTitle = "三包订单";
        this.sbOrderList = [];
        //TODO
        //三包订单
        this.getSBOrderList(this.status);
        break;
    }
  }
  /**
   * 获取延保订单
   * @params
   * userId
   * paystatus
   * -1全部订单 0 已支付订单  1未支付
   * */
  getYBOrderList(status) {
    this.ybOrderList = [];
    this.orderService.getYBOrderData({
      CustomId: this.userId,
      payStatus: status
    }).subscribe(r => {
      if(r.Code == 200) {
        //向数组添加数据
        this.ybOrderList = r.DataList.Table;
      } else {
        this.nativeService.alertTip(r.Message);
      }
    });
  }
  /**
   * 获取三包订单
   * @params
   * userId
   * paystatus
   * -1全部订单 0 已支付订单  1未支付
   * */
  getSBOrderList(status) {
    this.orderService.getSBOrderData({
      userId: this.userId,
      payStatus: status
    }).subscribe(r => {
      if(r.Code == 200) {
        //向数组添加数据
        this.sbOrderList = r.DataList.Table;
      } else {
        this.nativeService.alertTip(r.Message);
      }
    });
  }
  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  /**
   * 状态切换
   * */
  filterTabs(status) {
    this.status = status;
    this.init();
  }

  /**
   * 登录
   * */
  signIn() {
    let profileModal = this.modalCtrl.create(SignInPage);
    profileModal.present();
    profileModal.onDidDismiss(data => {
      if (data != null) {
        this.userId = data.KHZH001;
        this.isHasLogin = true;
        this.orderType = 0;
        this.status = -1;
        this.init();
      }
    });
  }
  /**
   * 支付
   * */
  pay(item){
    window.location.href = PAY_URL + "icar/authFreePay.do?payType=999&orderId="+item.ORDER002+"&totalFee="+item.ORDER006+"&backUrl=" + window.location.href.substring(7, window.location.href.indexOf('?') == -1 ? window.location.href.length - 1 : window.location.href.indexOf('?') - 1);
  }
  /**
   * 签字
   * */
  sign(htid){
    let modal = this.modalCtrl.create(SignaturePadRPage, {}, {
      enterAnimation: 'center-modal-from-right-enter',
      leaveAnimation: 'center-modal-from-right-leave'
    });
    modal.present();
    modal.onDidDismiss(data => {
      this.orderService.uploadOrderSignPic({
        KHYBHT001: htid,
        KHYBHT049: data
      }).subscribe(r => {
        if (r.Code == 200){
          this.init();
        } else {
          this.nativeService.alertTip(r.Message);
        }
      });
    });
  }
  /**
   * 延保详情
   * */
  ybDetails(orderId){
    this.orderService.getYBOrderDetails({
      orderId: orderId,
    }).subscribe(r => {
      if(r.Code == 200){
        this.navCtrl.push(YanBaoOrderDetailsPage, {item: r.DataList.Table[0], itemImageData: r.DataList2});
      } else {
        this.nativeService.alertTip(r.Message);
      }
    });
  }
  /**
   * 三包详情
   * */
  sbDetails(orderId){
    this.orderService.getSBOrderDetails({
      /*sanbaoOrderId: "DB7B502A-91EF-482B-915C-47DC94FFC35A",
      userid: "5815C966-AB6E-33EE-21F1-AC0EF559180D",*/
      sanbaoOrderId: orderId,
      userid: this.userId,
      paystatus: this.status
    }).subscribe(r => {
      if(r.Code == 200){
        this.navCtrl.push(SanBaoOrderDetailsPage, {item: r.DataList.Table[0]});
      } else {
        this.nativeService.alertTip(r.Message);
      }
    });
  }
}
