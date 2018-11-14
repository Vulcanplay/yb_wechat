import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CategoryService} from "./CategoryService";
import {NativeService} from "../../providers/NativeService";
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  public categoryList: any = [];        //类目数组
  public productList: any = [];         //精品数组
  public categorySelectId: any = null;
  constructor(public navCtrl: NavController,
              public nc: NativeService,
              public categoryService: CategoryService) {

  }
  ionViewDidEnter() {
    this.categoryService.getCategoryList().subscribe(r => {
      if (r.Code == 200){
        this.categoryList = r.DataList.Table;
        this.getProductList(this.categoryList[0].GODSTYPE002);
      } else {
        this.nc.alertTip(r.Message);
      }
    });
  }
  /**
   * 获取商品列表
   * */
  getProductList(id){
    this.categorySelectId = id;
    this.categoryService.getProductList({
      GODSTYPE002: id
    }).subscribe(r => {
      if (r.Code == 200){
        this.productList = r.DataList.Table;
      } else {
        this.nc.alertTip(r.Message);
      }
    });
  }
  /**
   * @categoryListCtrl
   * 控制类目列表收缩
   * */
  categoryListCtrl(item){
    item.active = item.active == 0 ? 1 : 0;
  }
}
