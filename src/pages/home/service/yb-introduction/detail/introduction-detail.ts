import { Component } from '@angular/core';
import {AlertController, ModalController, NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-ewp-yb-introduction-detail',
  templateUrl: 'introduction-detail.html'
})
export class EWPYBIntroductionDetailPage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) {
  }
}
