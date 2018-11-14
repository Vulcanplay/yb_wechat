import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { HttpService } from "../../providers/HttpService";
import { GlobalData } from "../../providers/GlobalData";
import { Observable } from "rxjs/Observable";
import { Result } from "../../model/Result";


@Injectable()
export class MineService {
  constructor(public httpServices: HttpService) {
  }

  /**
   * @select
   * 获取订单数量
   * */
  getOrderNum(p): Observable<(Result)> {
    return this.httpServices.get('/Order/YB_GetPayNum', p).map(r => r.json());
  }

  /**
   * 获取优惠券
   * */
  getTicket(p){
    return this.httpServices.get('wxCustomerTip/GetCustomerTipInfoList',p).map(r => r.json());
  }
  /**
   * @select
   * 我的车辆
   * */
  getVehicle(p) {
    return this.httpServices.get('customer/GetKHCarInfo', p).map(r => r.json());
  }

  /**
   * @select
   * 修改默认车辆
   * */
  changeDefaultVehicle(p): Observable<(Result)> {
    return this.httpServices.get('MyCar/YBDefaultMyCar', p).map(r => r.json());
  }

  /**
   * @select
   * 查询车牌号
   * */
  checkLicenseTag(p): Observable<(Result)> {
    return this.httpServices.get('PZGetCar/PZGetCarInfo', p).map(r => r.json());
  }
  /***
   * @update
   * 修改车辆信息
   * */
  updateVehicleInfo(item): Observable<(Result)> {
    return this.httpServices.get('MyCar/YBupdateMyCar', item).map(r => r.json());
  }

  /***
   * @insert
   * 添加车辆信息
   * */
  addCarInfo(item): Observable<(Result)> {
    return this.httpServices.get('MyCar/YBaddMyCar', item).map(r => r.json());
  }

  /**
   * @select
   * 获取地址列表
   * */
  getAddress(p) {
    return this.httpServices.get('/MySite/getSiteListALL', p).map(r => r.json());
  }

  /***
   * @select
   * 系统消息
   * */
  getSysMessageData(p): Observable<(Result)> {
    let params = {
      id: p.id,
    };
    return this.httpServices.get('/ticket/YBgetmyAllMessage', params).map(r => r.json());
  }

  /***
   * @select
   * 订单消息
   * */
  getOrderMessageData(p): Observable<(Result)> {
    let params = {
      id: p.id,
    };
    return this.httpServices.get('/ticket/YBgetmyFKMessage', params).map(r => r.json());
  }

  /***
   * @get
   * 获取
   * */
  getMineInfo(p) {
    return this.httpServices.get('customer/GetCustomInfo', p).map(r => r.json());
  }
  /***
   * @update
   * 修改个人资料
   * */
  updateMineInfo(p) {
    return this.httpServices.post('customer/EditCustomerInfo', p).map(r => r.json());
  }
  /***
   * @update
   * 新增个人资料
   * */
  addMineInfo(p) {
    return this.httpServices.post('customer/AddCustomInfo', p).map(r => r.json());
  }

}
