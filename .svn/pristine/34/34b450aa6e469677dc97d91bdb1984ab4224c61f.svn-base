import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import {Utils} from "../../../../providers/Utils";
import {ProductParams, SearchCarInfo} from "../../../../model/UserInfo";
import {FilterBrandSeriesPage} from "../../../../shared/filter-brand-series/filter-brand-series";
import {NativeService} from "../../../../providers/NativeService";
import {MineService} from "../../MineService";
import {TabsPage} from "../../../tabs/tabs";
@Component({
  selector: 'page-home-vehicle-add',
  templateUrl: 'add.html',
})
export class VehicleAddPage {
  public itemPower = [true, false, false];
  public toDay:string = '';
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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nc: NativeService,
              private alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public mineService:MineService) {

  }

  ionViewWillEnter() {
    this.carInfo = this.navParams.get('carInfo');
    this.toDay = Utils.dateFormat(new Date(), 'YYYY-MM-DD').toString();
  }

  selectBrandId() {
    let modal = this.modalCtrl.create(FilterBrandSeriesPage, {}, {
      leaveAnimation: 'modal-from-right-leave'
    });
    modal.present();
    modal.onDidDismiss((data: ProductParams) => {
      if (data != null) {
        this.carInfo.SONBRANDNAME = data.brandname;
        this.carInfo.CARSERIESNAME = data.carseriesName;
        this.carInfo.PZ_YB_MJCLCARZHID = data.groupid;
      }
    });
  }

  addCarInfo() {
    let parelist: any = this.carInfo;
    if (parelist.SONBRANDNAME === '' ||
      parelist.CARSERIESNAME === '' ||
      parelist.PZ_YB_MJCLMJCL004 === '' ||
      parelist.PZ_YB_MJCLMJCL006 === '' ||
      parelist.PZ_YB_MJCLMJCL007 === '' ||
      parelist.PZ_YB_MJCLMJCL016 === '' ||
      parelist.PZ_YB_MJCLMJCL031 === '' ||
      parelist.PZ_YB_MJCLMJCL014 === '' ||
      parelist.PZ_YB_MJCLMJCL015 === '' ||
      parelist.PZ_YB_MJCLMJCL022 === '' ||
      parelist.PZ_YB_MJCLMJCL030 === '' ||
      parelist.PZ_YB_MJCLMJCL021 === '' ||
      parelist.PZ_YB_MJCLMJCL017 === '' ||
      parelist.PZ_YB_MJCLMJCL018 === '' ||
      parelist.PZ_YB_MJCLMJCL019 === '' ||
      parelist.PZ_YB_MJCLMJCL020 === '' ||
      parelist.PZ_YB_MJCLMJCL010 === ''
    ) {
      this.alertCtrl.create({
        title: '需要补全信息',
        buttons: [
        {
          text: '确定'
        }]
      }).present();
    }
    else {
      let toDay = new Date(Utils.dateFormat(new Date(), 'YYYY-MM-DD 00:00:00'));
      let buyDay = new Date(parelist.PZ_YB_MJCLMJCL021);
      let startDay = new Date(parelist.PZ_YB_MJCLMJCL018);
      let endDay = new Date(parelist.PZ_YB_MJCLMJCL019);
      if (startDay.getTime() < buyDay.getTime()) {
        this.nc.alertTip('原厂延保起始时间不能小于新车购买时间.');
      } else if(endDay.getTime() < toDay.getTime()){
        this.nc.alertTip('已过保的车辆没有延保产品可提供.');
      } else {
        this.mineService.addCarInfo(parelist).subscribe(r => {
          if (r.success){
            this.nc.alertTip("添加成功！");
            this.navCtrl.setRoot(TabsPage, {index: 1});
          } else {
            this.nc.alertTip("添加失败！");
          }
        });
      }
    }

  }
  //原厂保修终止日期
  updateFPBXEND() {
    this.carInfo.PZ_YB_MJCLMJCL019 = this.carInfo.PZ_YB_MJCLMJCL018;
  }
  //修改发票日期
  updateFP(){
    this.carInfo.PZ_YB_MJCLMJCL021 = this.carInfo.PZ_YB_MJCLMJCL030;
  }
  //控制子列表
  itemToggle(index) {
    this.itemPower[index] = !this.itemPower[index];
  }
}
