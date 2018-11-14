import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {NativeService} from "../../../providers/NativeService";
import {MineService} from "../MineService";
@Component({
  selector: 'page-mine-personal-data',
  templateUrl: 'personal-data.html'
})
export class PersonalDataPage {
  userInfo: any = {
    KHZH001:"",
    KHZH002:"",
    KHZH003:"",
    KHZH004:"",
    KHZH005:"",
    KHZH006:"",
    KHXX001:"",
    KHXX002:"",
    KHXX003:"",
    KHXX004:"",
    KHXX005:"",
    KHXX006:"",
    KHXX007:"",
    KHXX008:"",
    KHXX009:"",
    KHXX010:"",
    KHXX011:"",
    KHXX012:"",
    KHXX013:"",
    KHXX014:"",
    KHXX015:"",
    KHXX016:""
  };
  constructor(public navCtrl: NavController,
              public nativeService: NativeService,
              public mineService: MineService,
              private storage: Storage,
              public navParams: NavParams,) {
  }
  ionViewDidEnter() {
    this.userInfo = this.navParams.get("userInfo");
  }
  /**
   * 提交修改
   * */
  submit() {

    if (this.userInfo.KHXX001 == ""){
      this.mineService.addMineInfo({
        customId: this.userInfo.KHZH001,
        KHXX002: this.userInfo.KHXX002,
        KHXX003: this.userInfo.KHXX003,
        KHXX004: this.userInfo.KHXX004,
        KHXX005: this.userInfo.KHXX005,
        KHXX006: this.userInfo.KHXX006,
        KHXX007: this.userInfo.KHXX007,
        KHXX008: this.userInfo.KHXX008,
        KHXX009: this.userInfo.KHXX009,
        KHXX010: this.userInfo.KHXX010,
        KHXX011: this.userInfo.KHXX011,
        KHXX012: this.userInfo.KHXX012,
        KHXX013: this.userInfo.KHXX013,
        KHXX014: this.userInfo.KHXX014,
        KHXX015: this.userInfo.KHXX015,
        KHXX016: this.userInfo.KHXX016
      }).subscribe(r => {
        if(r.Code == 200){
          this.nativeService.alertTip(r.Message);
          this.userInfo.KHXX001 = r.DataList.Table1[0].KHXX001;
          this.storage.set('wx_user', this.userInfo);
          this.navCtrl.pop();
        } else {
          this.nativeService.alertTip(r.Message);
        }
      });
    } else {
      this.mineService.updateMineInfo({
        customId: this.userInfo.KHZH001,
        KHXX001: this.userInfo.KHXX001,
        KHXX002: this.userInfo.KHXX002,
        KHXX003: this.userInfo.KHXX003,
        KHXX004: this.userInfo.KHXX004,
        KHXX005: this.userInfo.KHXX005,
        KHXX006: this.userInfo.KHXX006,
        KHXX007: this.userInfo.KHXX007,
        KHXX008: this.userInfo.KHXX008,
        KHXX009: this.userInfo.KHXX009,
        KHXX010: this.userInfo.KHXX010,
        KHXX011: this.userInfo.KHXX011,
        KHXX012: this.userInfo.KHXX012,
        KHXX013: this.userInfo.KHXX013,
        KHXX014: this.userInfo.KHXX014,
        KHXX015: this.userInfo.KHXX015,
        KHXX016: this.userInfo.KHXX016
      }).subscribe(r => {
        if(r.Code == 200){
          this.nativeService.alertTip(r.Message);
          this.storage.set('wx_user', this.userInfo);
        } else {
          this.nativeService.alertTip(r.Message);
        }
      });
    }

  }

}
