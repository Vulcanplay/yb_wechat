import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'page-modal-window-view',
  templateUrl: 'window-view.html'
})
export class WindowViewPage{
  /**
   * 标题
   * */
  private title: string = "";
  /**
   * 0  延保悉知
   * 1  三包悉知
   * 2  延保套餐说明
   * 3  三包套餐说明
   * 4  喷漆券说明
   * 5  延保服务协议
   * */
  private type: number = 0;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }
  ionViewWillEnter(){
    this.title = this.navParams.get("title") || "温馨提示";
    this.type = this.navParams.get("type");
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
