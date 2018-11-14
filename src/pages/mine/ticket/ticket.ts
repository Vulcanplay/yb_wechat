import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MineService} from "../MineService";

@Component({
  selector: 'page-mine-ticket',
  templateUrl: 'ticket.html'
})
export class TicketPage {
  ticketArray:any[] = [];
  userInfo: any = {};
  constructor(public navCtrl: NavController,
              public mineService: MineService,
              public navParams:NavParams) {
  }
  ionViewWillEnter(){
    this.userInfo = this.navParams.get("userInfo");
    this.mineService.getTicket({
      CustomerId: this.userInfo.KHXX001
    }).subscribe(r => {
      this.ticketArray = r.DataList.Table;
    });
  }
}
