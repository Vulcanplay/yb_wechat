import { Component } from '@angular/core';
import { ModalController, NavController,NavParams } from 'ionic-angular';
import { PreviewPicturePage } from "../../../shared/preview-picture/preview-picture";
import { ContractService } from "../../mine/contract/contractService";
import {SB_HT_SERVE_URL, YB_HT_SERVE_URL} from "../../../providers/Constants";
import {NativeService} from "../../../providers/NativeService";
import {ViewPDFPage} from "./details/details";

@Component({
  selector: 'page-mine-contract',
  templateUrl: 'contract.html',
  providers: [ContractService]

})
export class ContractPage {
  public contractList: any[] = [];
  public status:number = 0;
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public nativeService: NativeService,
              public contractService: ContractService) {
  }

  ionViewWillEnter(){
    this.init();
  }

  /**
   * 加载
   * */
  init(){
    this.contractList = [];
    this.contractService.getYBContractData({
      CustomerId: this.navParams.get('userId'),//"89805F3E-C0F5-40ED-B068-E4CDB9E28B29",
      HtId: ""
    }).subscribe(r => {
      if (r.Code == 200) {
        this.contractList = r.DataList.Table;
        console.log(this.contractList);
      } else {
        this.nativeService.alertTip(r.Message);
      }
    });
  }

  viewPDF(url){
    this.navCtrl.push(ViewPDFPage, {url: url});
  }

  viewPhoto(picturePaths) {
    this.modalCtrl.create(PreviewPicturePage, { 'initialSlide': 1, 'picturePaths': [picturePaths] }).present();
  }

}
