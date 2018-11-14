import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from "ionic-angular";
@Component({
  selector: 'page-modal-scan-input',
  templateUrl: 'scan-input.html'
})
export class ScanInputPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewWillEnter() {
    let cp = this.navParams.get("cp");
    for (let i = 0; i < this.totalLicenses.length; i++){
      if (this.totalLicenses[i].text == cp) {
        this.totalLicenses[i].selected = true;
        break;
      }
    }
  }
  cpChange(t){
    for (let i = 0; i < this.totalLicenses.length; i++) {
        this.totalLicenses[i].selected = false;
    }
    t.selected = true;
    this.viewCtrl.dismiss(t.text);
  }

  dismiss() {
    this.viewCtrl.dismiss(this.navParams.get("cp"));
  }
  public totalLicenses = [{text:'京',selected:false},{text:'津',selected:false},{text:'冀',selected:false},
    {text:'晋',selected:false},{text:'鲁',selected:false},{text:'豫',selected:false},
    {text:'蒙',selected:false},{text:'沪',selected:false},{text:'浙',selected:false},
    {text:'苏',selected:false},{text:'皖',selected:false},{text:'闽',selected:false},
    {text:'赣',selected:false},{text:'琼',selected:false},{text:'粤',selected:false},
    {text:'鄂',selected:false},{text:'湘',selected:false},{text:'辽',selected:false},
    {text:'吉',selected:false},{text:'黑',selected:false},{text:'桂',selected:false},
    {text:'陕',selected:false},{text:'甘',selected:false},{text:'宁',selected:false},
    {text:'青',selected:false},{text:'藏',selected:false},{text:'新',selected:false},
    {text:'贵',selected:false},{text:'渝',selected:false},{text:'川',selected:false},
    {text:'云',selected:false},{text:'港',selected:false},{text:'澳',selected:false},
    {text:'台',selected:false}];
}
