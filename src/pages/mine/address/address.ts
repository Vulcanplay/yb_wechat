import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddressNewPage} from "./new/new";
import {MineService} from "../MineService";

@Component({
  selector: 'page-mine-address',
  templateUrl: 'address.html'
})
export class AddressPage {
  addressData:any [] = [];
  test:any;
  constructor(public navCtrl: NavController,
              public mineService: MineService) {

  }

  ionViewWillEnter(){
    this.mineService.getAddress({uid:'4E81E3E7-718B-4639-8DAB-5AD7E6FF90A6'}).subscribe(r=>{
      this.addressData = r.data;
    });
  }

  newAddress(){
    this.navCtrl.push(AddressNewPage);
  }
}
