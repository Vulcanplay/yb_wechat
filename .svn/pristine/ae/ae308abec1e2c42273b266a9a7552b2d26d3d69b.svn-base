import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {CityService} from "./CityService";
import {FormBuilder} from "@angular/forms";
import {Validators} from "../../../../providers/Validators";

@Component({
  selector: 'page-mine-address-new',
  templateUrl: 'new.html'
})
export class AddressNewPage {
  cityData: any[] = []; //城市数据
  cityName:string = '省-市-区'; //初始化城市名
  code: string; //城市编码
  addressForm: any;

  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              private formBuilder: FormBuilder,
              public cityService: CityService) {
    this.addressForm = this.formBuilder.group({
      username: [, [Validators.required, , Validators.minLength(4)]],
      phone: [, [Validators.required, Validators.pattern('[0-9]{7}')]],
      location: [],
      address: [],
      code: [],
    })
  };
  ionViewDidLoad() {
    //获取城市数据
    this.cityService.geCityData().subscribe(res => {
      this.cityData = res;
    })
  }

  //城市选择器被改变时触发的事件
  cityChange(event) {
    this.code = event['region'].value
  }
}
