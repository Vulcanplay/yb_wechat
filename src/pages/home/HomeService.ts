import { Injectable } from "@angular/core";
import { HttpService } from "../../providers/HttpService";
import { Observable } from "rxjs/Observable";
import { Result } from "../../model/Result";

@Injectable()
export class HomeService {
  constructor(public httpServices: HttpService) {
  }
  /**
   * 推荐网点
   * */
  getHomeSite(p){
    return this.httpServices.getNoLoading('OnLineShop/GetShouYeOnLineShopList', p).map(r => r.json());
  }
  /**
   * 全部网点
   * */
  getStore(){
    return this.httpServices.get('OnLineShop/GetOnLineShopList').map(r => r.json());
  }

  /**
   * 获取逆地理编码
   * */
  getLocationForAMap(p){
    return this.httpServices.getNoHeader('http://restapi.amap.com/v3/geocode/regeo', p).map(r => r.json());
  }
  /**
   * 推荐商品
   * */
  getHomeProduct(){
    return this.httpServices.getNoLoading('GodsTipInfo/GetShouYeGodsTipInfoList').map(r => r.json());
  }
  /**
   * 优惠券
   * */
  getHomeVehicle(){
    return this.httpServices.get('GodsTipInfo/GetShouYeGodsTipInfoList').map(r => r.json());
  }
  /**
   * 头条
   * */
  getHomeTouTiao(){
    return this.httpServices.getNoLoading('TopMessageInfo/GetTopMessageList').map(r => r.json());
  }
  /**
   * 动态
   * */
  getHomeTip(){
    return this.httpServices.getNoLoading('NewTipInfo/GetNewTipList').map(r => r.json());
  }
  /**
   * 优惠券下单
   * */
  setVehicle(p){
    return this.httpServices.post('customer/AddCustomerTipInfo', p).map(r => r.json());
  }
  /**
   * 提交支付结果
   * */
  submitPayResult(p){
    return this.httpServices.get('customer/EditCustomerTipInfoState', p).map(r => r.json());
  }
}
