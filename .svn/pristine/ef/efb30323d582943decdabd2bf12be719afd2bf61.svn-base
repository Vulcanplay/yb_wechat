import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from "ionic-angular";
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import {NativeService} from "../../providers/NativeService";

@Component({
  selector: 'page-modal-signature-pad-r',
  templateUrl: 'signature-pad-r.html'
})
export class SignaturePadRPage {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public nc: NativeService) {
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
   * 回传签字结果的 base64
   * */
  save() {
    if (!this.signaturePad.isEmpty()) {
      this.viewCtrl.dismiss(this.signaturePad.toDataURL('image/png'));
    } else {
      this.nc.alertTip('请签字');
    }
  }

  /**
   * 关闭 modal
   * */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
