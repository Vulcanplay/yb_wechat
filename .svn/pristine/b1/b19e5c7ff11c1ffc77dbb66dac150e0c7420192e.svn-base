import {Component } from '@angular/core';
import { ModalController, NavParams, ViewController} from 'ionic-angular';
import {NativeService} from "../../../../../providers/NativeService";
import {SignaturePadRPage} from "../../../../../shared/signature-pad-return/signature-pad-r";
import {Utils} from "../../../../../providers/Utils";
import {EWPService} from "../../EWPService";
@Component({
  selector: 'page-service-contract-yb',
  templateUrl: 'service-contract.html',
  providers: [EWPService]
})
export class YBServiceContractPage {
  //签字的图片
  afterPath:string = '';
  //上传完成
  uploaded:boolean = false;
  //上传返回的链接
  uploadedUri:string = '';
  //今天
  today: string = '';
  //保险公司
  bxgs: string = '';
  constructor(private viewCtrl: ViewController,
              public navParams: NavParams,
              public nc:NativeService,
              public modalCtrl:ModalController,
              public nativeService:NativeService,
              public scanService: EWPService) {
  }

  ionViewDidLoad() {
    this.bxgs = this.navParams.get("BXGS");
    this.today = Utils.dateFormat(new Date(), 'YYYY-MM-DD');
  }

  /**
   * 上传签字
   * */
  upload(){
    if (this.afterPath == ''){
      this.nc.alertTip('请先签字在上传!');
    } else {
      console.log(JSON.stringify({Iflag: this.bxgs,Base64Str: encodeURIComponent(this.afterPath)}));
      this.scanService.uploadServiceContractSignatureBase64({Iflag: this.bxgs,Base64Str: encodeURIComponent(this.afterPath)}).subscribe(r => {
        if (r.Code == 200){
          this.nc.alertTip('上传完成!');
          this.uploaded = true;
          this.uploadedUri = r.DataList.Table1[0].hturl;
          this.dismiss();
        } else {
          this.nc.alertTip('上传失败：' + r.Message);
          this.uploaded = false;
        }
      });
    }
  }

  /**
   * 调用签字板
   * */
  signature(){
    let modal = this.modalCtrl.create(SignaturePadRPage, {}, {
      enterAnimation: 'center-modal-from-right-enter',
      leaveAnimation: 'center-modal-from-right-leave'
    });
    let self = this;
    modal.present();
    modal.onDidDismiss(data => {
      this.afterPath = data;
    });
  }

  /**
   * 关闭 modal
   * */
  dismiss() {
    this.viewCtrl.dismiss({uploaded: this.uploaded, uploadedUri: this.uploadedUri});
  }
}
