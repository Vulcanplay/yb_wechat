import { Component, ViewChild } from '@angular/core';
import { Tabs, NavParams, NavController } from "ionic-angular";
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';
import { CartPage } from "../cart/cart";
import { SharePage } from "../share/share";
import { CategoryPage } from "../category/category";
import {OrderPage} from "../mine/order/order";
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
@ViewChild('mainTabs') tabs: Tabs;
  tab1Root = HomePage;
  tab2Root = CategoryPage;
  tab3Root = SharePage;
  tab4Root = CartPage;
  tab5Root = MinePage;
  tab6Root = OrderPage;
  rootPage: any = TabsPage;
  selectedIndex: number = 0;
  constructor(private np: NavParams,
    private navCtrl: NavController) {
    if (this.np.get("index") != '' || this.np.get("index") != null) {
      this.selectedIndex = this.np.get("index");
    }
  }
  tabShare(){
    this.navCtrl.setRoot(TabsPage, {index: 2})
  }
}
