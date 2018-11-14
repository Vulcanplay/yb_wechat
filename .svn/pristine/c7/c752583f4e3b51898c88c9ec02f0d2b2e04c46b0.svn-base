import { Component } from '@angular/core';
import {AlertController, ModalController, NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-ewp-sb-introduction-detail',
  templateUrl: 'introduction-detail.html'
})
export class EWPSBIntroductionDetailPage {
  public type:number = 1;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) {
  }
  ionViewWillEnter(){
    this.type = this.navParams.get("type");
  }
}
