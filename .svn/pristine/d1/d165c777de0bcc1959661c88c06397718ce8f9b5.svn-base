import { Component } from '@angular/core';
import { ViewController, AlertController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { SignInService } from '../sign-in/SignInService';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
  providers: [SignInService],
})
export class SignUpPage {
  signUpForm: any;
  //发送验证
  sendCodeButton: any = {text: "发送验证码", disabled: false};
  constructor(private viewCtrl: ViewController,
              private signInService: SignInService,
              private alertCtrl: AlertController,
              public navParams: NavParams,
              private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.pattern('1[0-9]{10}')]],
      verificationCode: ['', [Validators.required, Validators.pattern('1[0-9]{5}')]]
    })
  };
  /**
   * 关闭
   * */
  dismiss() {
    this.viewCtrl.dismiss();
  }

  /**
   * 发送验证码
   * */
  sendCode(obj) {
    if (obj.phone == '') {
      this.alertCtrl.create({
        title: '请输入手机号',
        buttons: [{ text: '取消' },
        {
          text: '确定',
          handler: () => {}
        }]
      }).present();
    } else {
      this.signInService.sendRegCode({
        LoginName : obj.phone
      }).subscribe(r => {
        if (r.Code == 200) {
          //改变按钮状态
          let InterValObj = null; //timer变量，控制时间
          let curCount = 119;//当前剩余秒数
          let self = this;
          this.sendCodeButton.disabled = true;
          this.sendCodeButton.text = "请在" + curCount + "秒内输入验证码";

          InterValObj = setInterval(function () {
            if (curCount == 0) {
              clearInterval(InterValObj);
              self.sendCodeButton.disabled = false;
              self.sendCodeButton.text = "重新发送验证码";
            }
            else {
              curCount--;
              self.sendCodeButton.text = "请在" + curCount + "秒内输入验证码";
            }
          }, 1000);//启动计时器，1秒执行一次
          this.alertCtrl.create({
            title: '验证码已发送',
            buttons: [
              {
                text: '确定',
                handler: () => {
                }
              }]
          }).present();
        } else {
          this.alertCtrl.create({
            title: r.Message,
            buttons: [
              {
                text: '确定',
                handler: () => {}
              }]
          }).present();
        }
      }), () => { };
    }
  }

  /**
   * 注册
   * */
  SignUp(obj) {
    this.signInService.SignUpUser({
      LoginName: obj.phone,
      Code: obj.verificationCode,
      Phone: "",
      ywyId: "",
    }).subscribe(r => {
      if (r.Code == 200) {
        this.alertCtrl.create({
          title: r.Message,
          buttons: [
            {
              text: '确定',
              handler: () => {
                this.dismiss();
              }
            }
          ]
        }).present();
      } else {
        this.alertCtrl.create({
          title: r.Message,
          buttons: [
            {
              text: '确定',
            }
          ]
        }).present();
      }
    });
  }
}
