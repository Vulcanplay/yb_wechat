import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import { MineService } from "../../MineService";
import { ProductParams, SearchCarInfo} from "../../../../model/UserInfo";
import { FilterBrandSeriesPage } from '../../../../shared/filter-brand-series/filter-brand-series';
import {Utils} from "../../../../providers/Utils";
import {NativeService} from "../../../../providers/NativeService";
@Component({
  selector: 'page-mine-vehicle-details',
  templateUrl: 'details.html'
})
export class VehicleDetailsPage {
  //车辆列表
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
  //今天
  public toDay:string = '';

  constructor(public navCtrl: NavController,
              private mineServices: MineService,
              public modalCtrl:ModalController,
              private params: NavParams,
              public nativeService:NativeService) {
  }
  ionViewWillEnter() {
    this.toDay = Utils.dateFormat(new Date(), 'YYYY-MM-DD').toString();
    this.carInfo = this.params.get('item');
  }

  /***
   * 查询品牌车型
   * */
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

  /***
   * 保存更新车辆信息
   * */
  save() {
    if (this.carInfo.PZ_YB_MJCLCARZHID === '' ||
      this.carInfo.PZ_YB_MJCLMJCL004 === '' ||
      this.carInfo.PZ_YB_MJCLMJCL006 === '' ||
      this.carInfo.PZ_YB_MJCLMJCL007 === '' ||
      this.carInfo.PZ_YB_MJCLMJCL016 === '' ||
      this.carInfo.PZ_YB_MJCLMJCL014 === '' ||
      this.carInfo.PZ_YB_MJCLMJCL015 === '' ||
      this.carInfo.PZ_YB_MJCLMJCL022 === '' ||
      this.carInfo.PZ_YB_MJCLMJCL030 === '' ||
      this.carInfo.PZ_YB_MJCLMJCL021 === '' ||
      this.carInfo.PZ_YB_MJCLMJCL017 === '' ||
      this.carInfo.PZ_YB_MJCLMJCL010 === ''
    ){
      this.nativeService.alert("提示", "需要补全信息");
    } else {
      this.mineServices.updateVehicleInfo(this.carInfo).subscribe(r=>{
        if (r.success){
          this.nativeService.alertTip("保存成功");
        } else {
          this.nativeService.alertTip("保存失败:" + r.msg);
        }
      });
    }
  }

}
