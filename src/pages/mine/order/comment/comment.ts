import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-order-comment',
  templateUrl: 'comment.html'
})
export class OrderCommentPage {
  private star:number = 5;

  constructor(public navCtrl: NavController) {

  }

  starCtrl(star){
    this.star = star;
  }
}
