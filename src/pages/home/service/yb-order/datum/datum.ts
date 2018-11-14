import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, AlertController} from 'ionic-angular';
import {Utils} from "../../../../../providers/Utils";
import {NativeService} from "../../../../../providers/NativeService";
import {EWPService} from "../../EWPService";
import {SignaturePadMYBPage} from "../../../../../shared/signature-pad-yanbao/signature-pad-m";

@Component({
  selector: 'page-ewp-yb-order-datum',
  templateUrl: 'datum.html'
})
export class EWPYBOrderDatumPage {
  public ybOffer: any = {};
  public userInfo: any = {};
  public params: any = {
    orderId: "", //订单ID
    ActiveId: "", //活动ID
    UserId: "",
    car:{
      KHCAR002:"",//客户ID
      KHCAR003:"",//客户车辆品牌
      KHCAR004:"",//客户车辆车系
      KHCAR005:"",//车架号VIN
      KHCAR006:"",//车牌号
      KHCAR007:"",//发动机号
      KHCAR008:"",//排量
      KHCAR009:"",//初次等记时间
      KHCAR010:null,//最后一次购买车险金额
      KHCAR011:null,//当前行驶公里数
      KHCAR012:0,//是否二手车
      KHCAR014:0,//是否涡轮增压
      KHCAR015:0,//是否四轮驱动
      KHCAR016:null,//车辆购买价（含税）
      KHCAR017:"",//新车购车发票抬头
      KHCAR018:"",//原厂保修起始日期
      KHCAR019:"",//原厂保修终止日期
      KHCAR020:"",//原厂保修公里数
      KHCAR021:"",//购车发票日期
      KHCAR022:0,//车辆用途类型
      KHCAR023:0,//证件类型
      KHCAR024:"",//证件号
      KHCAR025:"",//行驶证号
      KHCAR026:"",//初次登记地点
      KHCAR027:"",//新车出厂日期
      KHCAR028:0,//是否进口
      KHCAR029:0,//车型 0轿车、1越野、2多用常用车、3SUV(MPV)
    },
    customer:{
      KHXX002:"",//客户姓名
      KHXX003:"",//客户身份证号
      KHXX004:"",//客户驾驶本号
      KHXX005:"",//客户微信号
      KHXX006:"",//客户openid
      KHXX007:null,//客户联系电话
      KHXX008:null,//客户座机电话
      KHXX009:"",//客户家庭住址
      KHXX011:0,//客户证件号类型  0身份证 1台胞证
      KHXX012:"",//邮编
      KHXX013:"",//邮箱
      CustomId:"",//客户ID
    },
    info:[]
  };
  public toDay: string = "";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nc: NativeService,
              public ewpService: EWPService,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) {
  }
  ionViewWillEnter(){
    //报价基本信息
    this.ybOffer = this.navParams.get("ybOffer");
    //登陆人信息
    this.userInfo = this.navParams.get("userInfo");
    //订单号
    this.params.orderId = this.navParams.get("orderId");
    //客户ID
    this.params.car.KHCAR002 = this.userInfo.KHZH001;
    //品牌名称
    this.params.car.KHCAR003 = this.ybOffer.brandName;
    //车系名称
    this.params.car.KHCAR004 = this.ybOffer.carseriseName;
    //首次登记日期
    this.params.car.KHCAR009 = this.ybOffer.firstTime;
    //今天
    this.toDay = Utils.dateFormat(new Date(), 'YYYY-MM-DD').toString();
  }

  idCardChange(){
    this.params.car.KHCAR025 = this.params.car.KHCAR024;
    this.params.customer.KHXX003 = this.params.car.KHCAR024;
    //客户驾驶本 不在表单绑定
    this.params.customer.KHXX004 = this.params.car.KHCAR024;
  }
  dateChange(){
    if (this.params.car.KHCAR019 != ""){ return false; }
    this.params.car.KHCAR019 = this.params.car.KHCAR018;
    if (this.params.car.KHCAR027 != ""){ return false; }
    this.params.car.KHCAR027 = this.params.car.KHCAR018;
    if (this.params.car.KHCAR021 != ""){ return false; }
    this.params.car.KHCAR021 = this.params.car.KHCAR018;
  }
  /**
   * 提交
   * */
  public htid: any = "";
  submit(){
    if (this.htid != ""){
      let modal = this.modalCtrl.create(SignaturePadMYBPage, {htid: this.htid}, {
        enterAnimation: 'center-modal-from-right-enter',
        leaveAnimation: 'center-modal-from-right-leave'
      });
      modal.present();
    } else {
      if (this.params.car.KHCAR006 == ""){ this.nc.alertTip("车牌号不能为空；"); return false; }
      if (this.params.car.KHCAR005 == ""){ this.nc.alertTip("车架号不能为空；"); return false; }
      if (this.params.car.KHCAR007 == ""){ this.nc.alertTip("发动机号不能为空；"); return false; }
      if (this.params.car.KHCAR008 == "" || this.params.car.KHCAR008 == null){ this.nc.alertTip("排量不能为空；且必须为数字"); return false; }
      if (this.params.car.KHCAR016 == "" || this.params.car.KHCAR016 == null){ this.nc.alertTip("购买价不能为空；且必须为数字"); return false; }
      if (this.params.car.KHCAR010 == "" || this.params.car.KHCAR010 == null){ this.nc.alertTip("最后一次购买车险金额不能为空；且必须为数字"); return false; }
      if (this.params.car.KHCAR024 == ""){ this.nc.alertTip("身份证号码不能为空；"); return false; }
      if (!/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.params.car.KHCAR024)){ this.nc.alertTip("身份证号码只能为18位；"); return false; }
      if (this.params.car.KHCAR025 == ""){ this.nc.alertTip("驾驶证号码不能为空；"); return false; }
      if (!/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.params.car.KHCAR025)){ this.nc.alertTip("驾驶证号码只能为18位；"); return false; }
      if (this.params.car.KHCAR018 == ""){ this.nc.alertTip("原厂保修起始日期不能为空；"); return false; }
      if (this.params.car.KHCAR019 == ""){ this.nc.alertTip("原厂保修结束日期不能为空；"); return false; }
      if (this.params.car.KHCAR027 == ""){ this.nc.alertTip("新车出厂日期不能为空；"); return false; }
      if (this.params.car.KHCAR021 == ""){ this.nc.alertTip("购车发票日期不能为空；"); return false; }
      if (this.params.car.KHCAR017 == ""){ this.nc.alertTip("新车购车发票抬头不能为空；"); return false; }
      if (this.params.car.KHCAR011 == "" || this.params.car.KHCAR011 == null){ this.nc.alertTip("当前行驶公里数不能为空；且必须为数字"); return false; }
      if (this.params.customer.KHXX002 == ""){ this.nc.alertTip("订购人姓名不能为空；"); return false; }
      if (this.params.customer.KHXX007 == "" || this.params.customer.KHXX007 == null){ this.nc.alertTip("订购人联系电话不能为空；"); return false; }
      if (this.params.customer.KHXX007.length != 11){ this.nc.alertTip("请输入11位订购人联系电话；"); return false; }
      if (this.params.customer.KHXX003 == ""){ this.nc.alertTip("订购人证件号码不能为空；"); return false; }
      if (!/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.params.customer.KHXX003)){ this.nc.alertTip("订购人证件号码只能为18位；"); return false; }
      if (this.params.customer.KHXX009 == ""){ this.nc.alertTip("订购人家庭地址不能为空；"); return false; }
      //提交
      this.ewpService.submitDatum(this.params).subscribe(r => {
        if (r.Code == 200){
          this.nc.alertTip("保存成功；");
          this.htid = r.DataList.Table1[0].htId;
          let modal = this.modalCtrl.create(SignaturePadMYBPage, {htid: this.htid}, {
            enterAnimation: 'center-modal-from-right-enter',
            leaveAnimation: 'center-modal-from-right-leave'
          });
          modal.present();
        } else {
          this.nc.alertTip(r.Message);
        }
      });
    }
  }
}
