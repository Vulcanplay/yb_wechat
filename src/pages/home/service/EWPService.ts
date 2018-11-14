import { Injectable } from "@angular/core";
import { HttpService } from "../../../providers/HttpService";
import { Observable } from "rxjs/Observable";
import { Result } from "../../../model/Result";

@Injectable()
export class EWPService {
  constructor(public httpServices: HttpService) {
  }

  /**
   * 三包单独获取品牌
   * */
  getBrand(){
    return this.httpServices.get('sanbao/GetSanBaoBrandList').map(r => r.json());
  }
  /**
   * 三包单独获取车型
   * */
  getSeries(p){
    return this.httpServices.get('sanbao/GetSanBaoCarseriseList', p).map(r => r.json());
  }

  /**
   * 延保报价
   * */
  getYBPrice(p){
    return this.httpServices.get('wxProduct/GetYanBaoProductPrice', p).map(r => r.json());
  }
  /**
   * 延保报价提交
   * */
  submitYBPrice(p){
    return this.httpServices.get('wxYanbaoOrder/addYanBaoOrders', p).map(r => r.json());
  }
  /**
   * 提交补充资料
   * */
  submitDatum(p){
    return this.httpServices.post('customer/AddCustomerAndHengTongInfo', p).map(r => r.json());
  }
  /**
   * 三包报价
   * */
  getSBPrice(p){
    return this.httpServices.get('sanbao/GetSanbaoPrice', p).map(r => r.json());
  }
  /**
   * 服务协议签字
   * */
  uploadServiceContractSignatureBase64(p){
    return this.httpServices.post('XieYi/writeXIEYIaction_New', p).map(r => r.json());
  }
  //提交订单购物车
  addOrderForBuy(p): Observable<(Result)> {
    let params = {
      YBCP001: '',  //延保产品ID
      DD006: '',   //是否发票
      DD008: '',  //实付价格
      DD015: '0', //是否活动渠道0.非活动渠道1.活动渠道
      DD017: '1', //订单来源0订单 1购物车
      YBJG001: '',//延保价格ID
      MJCL001: '',//买家车辆ID
      MJXX001: ''//买家信息ID
    };
    return this.httpServices.get('order/AddOrder', params).map(r => r.json());
  }




  //提交订单购物车
  addOrderForbuyCar(p): Observable<(Result)> {
    let params = {
      YBCP001: '',  //延保产品ID
      DD006: '',   //是否发票
      DD008: '',  //实付价格
      DD015: '0', //是否活动渠道0.非活动渠道1.活动渠道
      DD017: '1', //订单来源0订单 1购物车
      YBJG001: '',//延保价格ID
      MJCL001: '',//买家车辆ID
      MJXX001: ''//买家信息ID
    };
    return this.httpServices.get('order/AddOrder', params).map(r => r.json());
  }

}