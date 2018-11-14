import { Injectable } from "@angular/core";
import { HttpService } from "../../providers/HttpService";

@Injectable()
export class FilterBrandSeries {
  constructor(public httpServices: HttpService) {
  }
  /**
   * 查询品牌
   * */
  getBrand() {
    return this.httpServices.get('yanbao/GetYanbaoBrandList').map(r => r.json());
  }
  /**
   * 根据品牌ID获取车系
   * */
  getSeries(p) {
    return this.httpServices.get('yanbao/GetYanbaoCarseriseList', p).map(r => r.json());
  }
}
