import {Injectable} from "@angular/core";
import {HttpService} from "../../../providers/HttpService";
import {Observable} from "rxjs/Observable";
import {Result} from "../../../model/Result";

@Injectable()
export class OrderService {
  constructor( public httpServices:HttpService ) {
  }

  /**
   * 延保订单
   * */
  getYBOrderData(p) {
    return this.httpServices.get('wxYanbaoOrder/GetYanBaoOrderList', p).map( r => r.json());
  }
  /**
   * 延保详情
   * */
  getYBOrderDetails(p){
    return this.httpServices.get('wxYanbaoOrder/GetYanBaoOrder', p).map( r => r.json());
  }
  /**
   * 三包订单
   * */
  getSBOrderData(p) {
    return this.httpServices.get('mysanbaoOrder/GetSanbaoOrder', p).map( r => r.json());
  }
  /**
   * 三包详情
   * */
  getSBOrderDetails(p){
    return this.httpServices.get('mysanbaoOrder/GetSanbaoOrderDetail', p).map( r => r.json());
  }
  /**
   * 上传三包签字
   * */
  uploadSBSignPic(p){
    return this.httpServices.posts('SANBAO/SaveSignPic', p).map(r=>r.json());
  }
  /**
   * 上传延保签字
   * */
  uploadYBSignPic(p){
    return this.httpServices.post('XieYi/SaveSignPic', p).map(r=>r.json());
  }
  /**
   * 上传延保签字
   * */
  uploadOrderSignPic(p){
    return this.httpServices.post('wxYanBaoHeTong/EditYanBaoHeTongSign', p).map(r=>r.json());
  }

  getOrderDetailsData(p): Observable<(Result)> {
    return this.httpServices.get('PZOrder/PZGeOrderDetail', p).map(r => r.json());
  }
  //车辆信息
  getCarInfo(p): Observable<(Result)> {
    return this.httpServices.get('PZOrder/SelectOrderCarInfo', p).map(r => r.json());
  }
  saveCarInfo(p): Observable<(Result)> {
    return this.httpServices.get('PZOrder/UpdateOrderCarInfo', p).map(r => r.json());
  }

  //延保信息
  getYBInfo(p): Observable<(Result)> {
    return this.httpServices.get('PZOrder/SelectOrderYBInfo', p).map(r => r.json());
  }
  saveYBInfo(p): Observable<(Result)> {
    return this.httpServices.get('PZOrder/UpdateOrderYBInfo', p).map(r => r.json());
  }

  //订购人
  getSubscribers(p): Observable<(Result)> {
    return this.httpServices.get('PZOrder/GetMJXXInfo', p).map(r => r.json());
  }
  saveSubscribers(p): Observable<(Result)> {
    return this.httpServices.get('PZOrder/OrderMJXXUpdate', p).map(r => r.json());
  }

  //补充资料
  getImagesData(p): Observable<(Result)> {
    return this.httpServices.get('PZOrder/GetCLTLIST', p).map(r => r.json());
  }
  updateOrderImagesData(p): Observable<(Result)> {
    return this.httpServices.post('PZOrder/UpdateCLTLInfo', p).map(r => r.json());
  }
  addOrderImagesData(p): Observable<(Result)> {
    return this.httpServices.post('PZOrder/AddCLTLInfo', p).map(r => r.json());
  }
  deleteOrderImagesData(p): Observable<(Result)> {
    return this.httpServices.post('PZOrder/DelCLTLInfo', p).map(r => r.json());
  }
}
