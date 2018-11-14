import { Component } from '@angular/core';
import { AlertController, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import {SearchCarInfo} from "../../../../model/UserInfo";
import {ScanInputPage} from "../../../../shared/scan-input/scan-input";
import {MineService} from "../../MineService";
import {VehicleAddPage} from "../add/add";
@Component({
  selector: 'page-mine-vehicle-license-tag',
  templateUrl: 'license-tag.html'
})
export class LicenseTagPage {
  carPA: any = '';
  code: string = '110100';
  cp: any = '吉';
  public carInfo: SearchCarInfo = {
    OWNERPHONE: '',
    OWNER: '',//车主
    SONBRANDNAME: '',//子品牌
    CARSERIESNAME: '',//车系名称
    PZ_YB_MJCLMJCL001: '',//买家信息ID
    PZ_YB_MJCLMJCL002: '',//买家信息ID
    PZ_YB_MJCLMJCL003: '',//车标题
    PZ_YB_MJCLCARZHID: '',//车辆车型组合id
    PZ_YB_MJCLMJCL004: '',//车架号
    PZ_YB_MJCLMJCL005: '',//车牌号
    PZ_YB_MJCLMJCL006: '',//发动机号
    PZ_YB_MJCLMJCL007: '',//排量
    PZ_YB_MJCLMJCL008: '',//初次等级时间
    PZ_YB_MJCLMJCL009: '',//最后一次购买车险金额
    PZ_YB_MJCLMJCL010: '',//当前行驶公里数
    PZ_YB_MJCLMJCL011: '',//是否二手车 0.否 1.是			    //
    PZ_YB_MJCLMJCL012: '',//车辆图片ID
    PZ_YB_MJCLMJCL014: '',//0.是 1.否
    PZ_YB_MJCLMJCL013: '',//车龄
    PZ_YB_MJCLMJCL015: '',//0.是 默认 1.否			   / /
    PZ_YB_MJCLMJCL016: '',//车辆购买价
    PZ_YB_MJCLMJCL017: '',//新车购车发票抬头
    PZ_YB_MJCLMJCL018: '',//原厂保修起始日期
    PZ_YB_MJCLMJCL019: '',//原厂保修终止日期
    PZ_YB_MJCLMJCL020: '',//原厂保修公里数
    PZ_YB_MJCLMJCL021: '',//购车发票日期
    PZ_YB_MJCLMJCL022: '',//车辆是否用于非营业性质0.是			   / /1.否			   / /
    PZ_YB_MJCLMJCL025: '',//0.身份证1.护照			 /  /
    PZ_YB_MJCLMJCL026: '',//身份证号
    PZ_YB_MJCLMJCL024: '',//0.默认1.不默认
    ISDEL: '',  //0.未删除 1.删除
    PZ_YB_MJCLMJCL027:'',//行驶证号
    PZ_YB_MJCLMJCL028:'',//初次等记地点
    PZ_YB_MJCLMJCL030:'',//新车出厂日期
    PZ_YB_MJCLMJCL031:'',  //车型
    MJXX009:'',//邮箱
    MJXX012:'',//邮编
    MJXX020:'',//通讯地址
    MJXX010:'',//联系方式
  };
  public user:any = {
    Userid: '',
    Username: '',// 姓名
    NikeName: '', //昵称
    Email: '',//邮箱
    Phone: '', //手机号
    Sex: '',//性别
    AvatarId: '',//图像
    AvatarPath: '',//图像路径
    Openid: '',
    Sfzhm: '',//省份证号码
    QQ: '',//qq
    JF: ''
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public viewCtrl: ViewController,
              public mineService: MineService) {
  }

  ionViewWillEnter() {
    this.user = this.navParams.get("user");
    //买家ID
    this.carInfo.PZ_YB_MJCLMJCL002 = this.user.Userid;
    //车主姓名
    this.carInfo.OWNER = this.user.Username;
    //有车没车
    this.carInfo.PZ_YB_MJCLMJCL024 = this.navParams.get("hasCar") ? '1' : '0';
  }

  add(){
    //赋默认值
    this.carInfo.PZ_YB_MJCLMJCL022 = 0;
    this.carInfo.PZ_YB_MJCLMJCL025 = 0;
    this.carInfo.PZ_YB_MJCLMJCL015 = 0;
    this.carInfo.PZ_YB_MJCLMJCL014 = 0;
    this.carInfo.PZ_YB_MJCLMJCL011 = 0;
    this.carInfo.PZ_YB_MJCLMJCL031 = 0;
    this.carInfo.ISDEL = 0;
    this.mineService.checkLicenseTag({
      carNo: this.cp + this.carPA,
      cityCode: this.code
    }).subscribe(r => {
      if (r.success) {
        this.carInfo = r.data;
        this.navCtrl.push(VehicleAddPage, {carInfo: this.carInfo});
      } else {
        this.alertCtrl.create({
          title: '车牌号不存在,您需要补全信息',
          buttons: [{ text: '取消' },
            {
              text: '确定',
              handler: () => {
                this.navCtrl.push(VehicleAddPage, {carInfo: this.carInfo});
              }
            }]
        }).present();
      }
    });
  }

  scanInput(cp) {
    let modal = this.modalCtrl.create(ScanInputPage, { cp }, {
      enterAnimation: 'center-modal-from-right-enter',
      leaveAnimation: 'center-modal-from-right-leave'
    });
    modal.present();
    modal.onDidDismiss(data => {
      this.cp = data;
    });
  }
}
