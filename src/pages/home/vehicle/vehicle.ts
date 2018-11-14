import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {HomeService} from "../HomeService";
import {PAY_URL} from "../../../providers/Constants";
import {NativeService} from "../../../providers/NativeService";

@Component({
  selector: 'page-home-vehicle',
  templateUrl: 'vehicle.html'
})
export class HomeVehiclePage {
  public item:any = {
    KHTIP002: "",//客户ID
    KHTIP003: "",//优惠券主键
    KHTIP004: 1,//购买数量
    KHTIP010: "",//优惠券名称
    KHTIP011: "",//优惠券价格
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public homeService: HomeService,
              public nc: NativeService,
              public modalCtrl: ModalController) {

  }
  ionViewDidEnter(){
    let i = this.navParams.get("item");
    this.item.KHTIP002 = this.navParams.get("userId");
    this.item.KHTIP003 = i.GODSTIP001;
    this.item.KHTIP010 = i.GODSTIP003;
    this.item.KHTIP011 = i.GODSTIP013;
  }

  /**
   * 操作数量
   * */
  calcCount(option){
    if(option == 0){
      this.item.KHTIP004--;
    } else {
      this.item.KHTIP004++;
    }
  }

  /**
   * 下单
   * */
  pay(){
    this.homeService.setVehicle(this.item).subscribe(r => {
      if(r.Code == 200){
        console.log(r);
        let total = 0.01;//this.item.KHTIP011 * this.item.KHTIP004
        console.log(window.location.href.substring(7, window.location.href.indexOf('?') - 1));
        console.log(PAY_URL + "icar/authFreePay.do?payType=999&orderId="+r.DataList.Table1[0].KHTIP012+"&totalFee="+total+"&backUrl=" + window.location.href.substring(7, window.location.href.indexOf('?') - 1));
        window.location.href = PAY_URL + "icar/authFreePay.do?payType=999&orderId="+r.DataList.Table1[0].KHTIP012+"&totalFee="+total+"&backUrl=" + window.location.href.substring(7, window.location.href.indexOf('?') - 1);
      } else {
        this.nc.alertTip(r.Message);
      }
    });
  }
}
