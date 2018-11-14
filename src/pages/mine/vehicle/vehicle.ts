import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { MineService } from "../MineService";
import { VehicleDetailsPage } from '../../mine/vehicle/details/details';
import {LicenseTagPage} from "./license-tag/license-tag";

@Component({
  selector: 'page-mine-vehicle',
  templateUrl: 'vehicle.html'
})
export class VehiclePage {
  //车辆列表
  public carList: any = [];
  public togglePower: boolean = false;
  public defaultTag: string = '';
  public userInfo: any = {};

  constructor(public navCtrl: NavController,
    private mineServices: MineService,
    private params: NavParams) {

  }
  ionViewWillEnter() {
    this.userInfo = this.params.get('userInfo');
    this.mineServices.getVehicle({
      CustomerId: this.userInfo.KHZH001,
      CarId: ""
    }).subscribe(r => {
      if (r.Code == 200) {
        this.carList = r.DataList.Table;
      }
    });
  }

  //修改默认车辆
  changeDefault(){
    if (this.defaultTag != ''){
      this.mineServices.changeDefaultVehicle({
        PZ_YB_MJCLMJCL001: this.defaultTag,
        PZ_YB_MJCLMJCL024: 0,
      }).subscribe(r=>{
        if (r.success){
          console.log("change default success.");
        } else {
          console.log("change default fail.");
        }
      });
    }
  }

  //车辆详情
  details(item) {
    //this.navCtrl.push(VehicleDetailsPage, {item: item});
  }
  //
  // //去车牌号
  // licenseTag() {
  //   var hasCar = this.carList.length > 0 ? true : false;
  //   this.navCtrl.push(LicenseTagPage, {user: this.user, hasCar: hasCar});
  // }

}
