import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {NativeService} from "../../../providers/NativeService";
@Component({
  selector: 'page-home-city',
  templateUrl: 'city.html'
})
export class HomeCityPage {
  public cityArray: any = [
    {
      Province: "北京市",
      City: "",
      Coordinate: "",
    },
    {
      Province: "黑龙江省",
      City: "哈尔滨市",
      Coordinate: "",
    },
    {
      Province: "江苏省",
      City: "苏州市",
      Coordinate: "",
    },
    {
      Province: "上海市",
      City: "",
      Coordinate: "",
    },
    {
      Province: "",
      City: "杭州",
      Coordinate: "",
    },
    {
      Province: "",
      City: "天津",
      Coordinate: "",
    },
    {
      Province: "",
      City: "沈阳",
      Coordinate: "",
    },
    {
      Province: "",
      City: "吉林",
      Coordinate: "",
    },
    {
      Province: "",
      City: "大庆",
      Coordinate: "",
    },
    {
      Province: "",
      City: "鞍山",
      Coordinate: "",
    },
    {
      Province: "",
      City: "石家庄",
      Coordinate: "",
    },
    {
      Province: "",
      City: "郑州",
      Coordinate: "",
    },
    {
      Province: "",
      City: "洛阳",
      Coordinate: "",
    },
    {
      Province: "",
      City: "合肥",
      Coordinate: "",
    },
    {
      Province: "",
      City: "成都",
      Coordinate: "",
    },
    {
      Province: "",
      City: "西安",
      Coordinate: "",
    },
    {
      Province: "",
      City: "温州",
      Coordinate: "",
    },
    {
      Province: "",
      City: "宁波",
      Coordinate: "",
    },
    {
      Province: "",
      City: "深圳",
      Coordinate: "",
    },
  ];
  constructor(public navCtrl: NavController,
              public nc: NativeService,
              public viewCtrl: ViewController,
              public navParams: NavParams) {}
  ionViewDidEnter() {

  }
  city(item){
    this.viewCtrl.dismiss({item: item});
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
