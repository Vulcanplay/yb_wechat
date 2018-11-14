import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import {NavController, ModalController, AlertController} from "ionic-angular";
import { MineParams } from "../../model/UserInfo";
import { DEFAULT_AVATAR } from "../../providers/Constants";
import { NativeService } from "../../providers/NativeService";
import { SignInPage } from "../login/sign-in/sign-in";
import { OrderPage } from "./order/order";
import { AboutPage } from "./about/about";
import { ContractPage } from "./contract/contract";
import { PersonalDataPage } from "./personal-data/personal-data";
import { MineService } from "./MineService";
import { Utils } from "../../providers/Utils";
import {VehiclePage} from "./vehicle/vehicle";
import {TicketPage} from "./ticket/ticket";
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {
  userInfo: any = {};
  avatarPath: String = DEFAULT_AVATAR;
  isHasLogin: boolean = false;
  LoginType: MineParams;

  constructor(public navCtrl: NavController,
              public storage: Storage,
              public modalCtrl: ModalController,
              public mineServices: MineService,
              public nativeService: NativeService,
              public alertCtrl: AlertController) {
  }

  ionViewDidEnter() {
    this.storage.get('wx_user').then(userInfo => {
      if (userInfo != null) {
        this.userInfo = userInfo;
        this.isHasLogin = true;
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
   * 订单
   * @params status
   * @订单状态
   * 全部 -1
   * 已支付 0
   * 未支付 1
   * @params type
   * @订单类型
   * 延保 0
   * 喷漆 1
   * 三包 2
   * */
  order(status, type) {
    if (this.userInfo.KHZH001 != null){
      this.navCtrl.push(OrderPage, { status: status, type: type, userId: this.userInfo.KHZH001 });
    }
  }
  /**
   * 我的合同
   * */
  contract() {
    if (this.userInfo.KHZH001 != null){
      this.navCtrl.push(ContractPage,{userId: this.userInfo.KHZH001});
    }
  }
  /**
   * 优惠券
   * */
  ticket() {
    if (this.userInfo.KHZH001 != null) {
      this.navCtrl.push(TicketPage, { userInfo: this.userInfo });
    }
  }
  /*address() {
    if (this.userInfo.mjinfoId != '') {
      this.navCtrl.push(AddressPage, { userid: this.userInfo.mjinfoId });
    }
  }*/


  /**
   * 我的车辆
   * */
  vehicle(){
    if (this.userInfo.KHZH001 != null){
      this.navCtrl.push(VehiclePage, {userInfo: this.userInfo});
    }
  }

  personal() {
    if (this.userInfo.KHZH001 != null) {
      this.navCtrl.push(PersonalDataPage, {userInfo: this.userInfo});
    }
  }
  /**
   * 卡券
   * */


  about() {
    this.navCtrl.push(AboutPage);
  }

  notice() {
    this.nativeService.alert('开发中...');
  }

}
