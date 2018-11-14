import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignaturePadMSBPage } from "./signature-pad-m";
import { SignaturePadModule } from 'angular2-signaturepad';
@NgModule({
  declarations: [
    SignaturePadMSBPage
  ],
  imports: [
    SignaturePadModule,
    IonicPageModule.forChild(SignaturePadMSBPage),
  ],
  exports: [
    SignaturePadMSBPage
  ]
})
export class SignaturePadSBModalModule {}
