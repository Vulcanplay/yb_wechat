import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'page-modal-alert',
  templateUrl: 'alert.html'
})
export class AlertPage{


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
