import { Injectable } from "@angular/core";
import { HttpService } from "../../../providers/HttpService";
@Injectable()
export class SignInService {
  constructor(public httpServices: HttpService) {}
  /**
   * 登录
   * */
  login(p) {
    return this.httpServices.get('customer/GetLogin', p).map(r => r.json());
  }
  /**
   * 注册
   * */
  SignUpUser(p) {
    return this.httpServices.get('login/GetRegisterInfo', p).map(r => r.json());
  }
  /**
   * 登录发送验证码
   * */
  sendLoginCode(p) {
    return this.httpServices.get('customer/GetCode', p).map(r => r.json());
  }
  /**
   * 注册发送验证码
   * */
  sendRegCode(p) {
    return this.httpServices.get('login/SendRegisterCode', p).map(r => r.json());
  }
}
