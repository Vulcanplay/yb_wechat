import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {EWPSBIntroductionDetailPage} from "./detail/introduction-detail";

@Component({
  selector: 'page-ewp-sb-introduction',
  templateUrl: 'introduction.html'
})
export class EWPSBIntroductionPage {
  constructor(public navCtrl: NavController) {
  }
  detail(type){
    this.navCtrl.push(EWPSBIntroductionDetailPage, {type: type});
  }
}
