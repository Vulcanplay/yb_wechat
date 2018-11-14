import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-home-details',
  templateUrl: 'details.html'
})
export class ViewPDFPage {
  public title = "";

  public pdfSrc = "";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {

  }
  ionViewDidEnter(){
    this.pdfSrc = this.navParams.get("url");
  }
}
