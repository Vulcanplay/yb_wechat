import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NativeService} from "../../../../providers/NativeService";
declare var AMap;
@Component({
  selector: 'page-home-store-details',
  templateUrl: 'details.html'
})
export class HomeStoreDetailsPage {
  @ViewChild('map_container') map_container: ElementRef;
  //地图对象
  public map: any;
  public store: any = {};
  constructor(public navCtrl: NavController,
              public nc: NativeService,
              public navParams: NavParams) {}
  ionViewDidEnter() {
    this.store = this.navParams.get("store");
    let lat = this.store.ONSHOP006.substring(0, this.store.ONSHOP006.indexOf(';') - 1);
    let lng = this.store.ONSHOP006.substring(this.store.ONSHOP006.indexOf(';') + 1, this.store.ONSHOP006.length);
    this.map = new AMap.Map(this.map_container.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        zoom: 18, //设置地图缩放级别
        rotateEnable: true,
        showBuildingBlock: true,
        center: [lng, lat]
      })
    });
    /**
     * 地图标点
     * */
    new AMap.Marker({
      position: [lng, lat],
      map: this.map
    });
  }
  getMap(){
    let lat = this.store.ONSHOP006.substring(0, this.store.ONSHOP006.indexOf(';') - 1);
    let lng = this.store.ONSHOP006.substring(this.store.ONSHOP006.indexOf(';') + 1, this.store.ONSHOP006.length);
    let options = {
      latitude: parseFloat(lat), // 纬度，浮点数，范围为90 ~ -90
      longitude: parseFloat(lng), // 经度，浮点数，范围为180 ~ -180。
      name: this.store.ONSHOP003, // 位置名
      address: this.store.ONSHOP002
    };
    this.nc.openLocation(options);
  }
}
