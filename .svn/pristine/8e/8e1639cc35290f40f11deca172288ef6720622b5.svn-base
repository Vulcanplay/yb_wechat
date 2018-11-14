import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {SignInPage} from './sign-in';
import {SignUpPage} from '../sign-up/sign-up';
import {HttpService} from '../../../providers/HttpService';
import {SignInService} from '../sign-in/SignInService';
import { JsonpModule } from '@angular/http';
@NgModule({
  imports: [IonicModule],
  declarations: [SignInPage, SignUpPage],
  entryComponents: [SignInPage, SignUpPage],
  providers: [HttpService,SignInService,JsonpModule],
  exports: [IonicModule]
})
export class SignInModule {

}
