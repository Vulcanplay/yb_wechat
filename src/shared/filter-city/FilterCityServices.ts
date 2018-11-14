import { Injectable } from "@angular/core";
import { HttpService } from "../../providers/HttpService";
import { Observable } from "rxjs/Observable";
import { Result } from "../../model/Result";

@Injectable()
export class FilterCityServices {
  constructor(public httpServices: HttpService) {
  }
  getCityData(): Observable<(Result)> {
    return this.httpServices.get('/city/GetCity').map(r => r.json());
  }
}
