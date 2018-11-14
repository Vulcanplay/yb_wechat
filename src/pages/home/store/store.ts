import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomeService} from "../HomeService";
import {NativeService} from "../../../providers/NativeService";
import {HomeStoreDetailsPage} from "./details/details";
@Component({
  selector: 'page-home-store',
  templateUrl: 'store.html'
})
export class HomeStorePage {
  public storeArray: any = [];
  constructor(public navCtrl: NavController,
              public nc: NativeService,
              public homeService: HomeService) {
  }
  ionViewDidEnter() {
    this.homeService.getStore().subscribe(r => {
      if (r.Code == 200) {
        this.storeArray = r.DataList.Table;
      } else {
        this.nc.alertTip(r.Message);
      }
    });
  }
  /***
   * 网点详情
   */
  storeDetails(item){
    this.navCtrl.push(HomeStoreDetailsPage, {store: item});
  }
}
