import { Injectable } from "@angular/core";
import { HttpService } from "../../providers/HttpService";
import { Observable } from "rxjs/Observable";
import { Result } from "../../model/Result";

@Injectable()
export class CategoryService {
  constructor(public httpServices: HttpService) {
  }
  /**
   * 类目
   * */
  getCategoryList(){
    return this.httpServices.get('GodsTypeInfo/GetGodsTypeInfoList').map(r => r.json());
  }
  /**
   * 类目
   * */
  getProductList(p){
    return this.httpServices.get('GodsTipInfo/GetGodsTipInfotList', p).map(r => r.json());
  }
}
