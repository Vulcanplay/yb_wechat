import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ScanInputPage} from "./scan-input";

@NgModule({
  declarations: [
    ScanInputPage
  ],
  imports: [
    IonicPageModule.forChild(ScanInputPage)
  ],
  exports: [
    ScanInputPage
  ]
})
export class ScanInputModule {}
