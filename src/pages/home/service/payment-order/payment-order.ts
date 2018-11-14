import { Component } from '@angular/core';
import {AlertController, ModalController, NavController, NavParams} from 'ionic-angular';
import {AlertPage} from "../../../../shared/alert/alert";

@Component({
  selector: 'page-ewp-payment-order',
  templateUrl: 'payment-order.html'
})
export class PaymentOrderPage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) {
    console.log(navParams.get("orderId"));
  }

  showAlert() {
    this.modalCtrl.create(AlertPage, {}, {
      enterAnimation: 'center-modal-from-right-enter',
      leaveAnimation: 'center-modal-from-right-leave'
    }).present();
  }
}
