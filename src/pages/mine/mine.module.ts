import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {MinePage} from './mine';
import {MineService} from "./MineService";
import {OrderPage} from "./order/order";
import {OrderCommentPage} from "./order/comment/comment";
import {VehiclePage} from "./vehicle/vehicle";
import {AddressPage} from "./address/address";
import {AddressNewPage} from "./address/new/new";
import {ContractPage} from "./contract/contract";
import {TicketPage} from "./ticket/ticket";
import {PersonalDataPage} from "./personal-data/personal-data";
import {AboutPage} from "./about/about";
import {CityPickerModule} from "ionic2-city-picker";
import {CityService} from "./address/new/CityService";
import {PreviewPicturePage} from "../../shared/preview-picture/preview-picture";
import {OrderService} from "./order/OrderService";
import {VehicleDetailsPage} from "./vehicle/details/details";
import {ScanInputModule} from "../../shared/scan-input/scan-input.module";
import {LicenseTagPage} from "./vehicle/license-tag/license-tag";
import {VehicleAddPage} from "./vehicle/add/add";
import {SignaturePadSBModalModule} from "../../shared/signature-pad-sanbao/signature-pad-m.module";
import {SanBaoOrderDetailsPage} from "./order/sanbao-details/details";
import {YanBaoOrderDetailsPage} from "./order/yanbao-details/details";
import {ViewPDFPage} from "./contract/details/details";
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [IonicModule, CityPickerModule, ScanInputModule, SignaturePadSBModalModule, PdfViewerModule],
  declarations: [
    MinePage,
    OrderPage,
    OrderCommentPage,
    VehiclePage,
    VehicleDetailsPage,
    AddressNewPage,
    AddressPage,
    ContractPage,
    ViewPDFPage,
    TicketPage,
    PersonalDataPage,
    AboutPage,
    PreviewPicturePage,
    LicenseTagPage,
    SanBaoOrderDetailsPage,
    YanBaoOrderDetailsPage,
    VehicleAddPage],
  entryComponents: [
    MinePage,
    OrderPage,
    OrderCommentPage,
    VehiclePage,
    VehicleDetailsPage,
    AddressNewPage,
    AddressPage,
    ContractPage,
    ViewPDFPage,
    TicketPage,
    PersonalDataPage,
    AboutPage,
    PreviewPicturePage,
    LicenseTagPage,
    SanBaoOrderDetailsPage,
    YanBaoOrderDetailsPage,
    VehicleAddPage],
  providers: [MineService, CityService, OrderService],
  exports: [IonicModule]
})
export class MineModule {
}
