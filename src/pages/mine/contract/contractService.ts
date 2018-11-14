import {Injectable} from "@angular/core";
import {HttpService} from "../../../providers/HttpService";

@Injectable()
export class ContractService {
  constructor( public httpServices:HttpService ) {
  }

  getYBContractData(p) {
    return this.httpServices.get('wxYanBaoHeTong/GetYanBaoHeTongPdfUrl', p).map( r => r.json());
  }
  getSBContractData(p) {
    return this.httpServices.get('myHetong/getMySanbaoHetong', p).map( r => r.json());
  }

}
