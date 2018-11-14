import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController } from "ionic-angular";
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { NativeService } from "../../providers/NativeService";
import {TabsPage} from "../../pages/tabs/tabs";
import {OrderService} from "../../pages/mine/order/OrderService";

@Component({
  selector: 'page-modal-signature-pad-m-yb',
  templateUrl: 'signature-pad-m.html',
})
export class SignaturePadMYBPage {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public orderService: OrderService,
              public nativeService:NativeService) {
  }

  ionViewWillEnter() {
    this.signaturePadOptions = {
      minWidth: 1,
      maxWidth: 5,
    };
    this.signaturePad.resizeCanvas();
  }

  /**
   * 清除canvas
   * */
  clear() {
    this.signaturePad.clear();
  }

  /**
   * 上传base64到服务器
   * */
  save() {
    if (!this.signaturePad.isEmpty()) {
      this.nativeService.showLoading();
      let params = {
        htid: this.navParams.get("htid"),
        base64Str: encodeURIComponent(this.signaturePad.toDataURL('image/png'))
      };
      this.orderService.uploadYBSignPic(params).subscribe(r => {
        if (r.Code == 200) {
          this.nativeService.hideLoading();
          this.nativeService.alertTip(r.Message);
          this.navCtrl.push(TabsPage, {index: 4});
        } else {
          this.nativeService.alertTip(r.Message);
        }
      });
    } else {
      this.nativeService.alertTip('请签字');
    }
  }

  /**
   * 关闭modal
   * */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
