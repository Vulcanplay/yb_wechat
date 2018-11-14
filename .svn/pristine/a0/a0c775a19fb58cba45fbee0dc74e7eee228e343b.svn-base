import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, ViewController} from "ionic-angular";
import {FilterCityServices} from "./FilterCityServices";
import {ScrollView} from "ionic-angular/umd/util/scroll-view";

@Component({
  selector: 'page-filter-city',
  templateUrl: 'filter-city.html'
})
export class FilterCityPage {
  A:any[];
  B:any[];
  C:any[];
  D:any[];
  E:any[];
  F:any[];
  G:any[];
  H:any[];
  I:any[];
  J:any[];
  K:any[];
  L:any[];
  M:any[];
  N:any[];
  O:any[];
  P:any[];
  Q:any[];
  R:any[];
  S:any[];
  T:any[];
  U:any[];
  V:any[];
  W:any[];
  X:any[];
  Y:any[];
  Z:any[];
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public filterCity: FilterCityServices) {
  }
  ionViewWillEnter() {
    this.getFilterCity();
  }

  getFilterCity() {
    this.filterCity.getCityData().subscribe(r => {
      this.A = r.data.A;
      this.B = r.data.B;
      this.C = r.data.C;
      this.D = r.data.D;
      this.E = r.data.E;
      this.F = r.data.F;
      this.G = r.data.G;
      this.H = r.data.H;
      this.J = r.data.J;
      this.K = r.data.K;
      this.L = r.data.L;
      this.M = r.data.M;
      this.N = r.data.N;
      this.P = r.data.P;
      this.Q = r.data.Q;
      this.R = r.data.R;
      this.T = r.data.T;
      this.S = r.data.S;
      this.W = r.data.W;
      this.X = r.data.X;
      this.Y = r.data.Y;
      this.Z = r.data.Z;
    });
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
