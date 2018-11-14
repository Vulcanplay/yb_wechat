import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {HomePage} from './home';
import {HomeService} from "./HomeService";
import {HomeWorkingPage} from "./working/working";
import {FilterCityModule} from "../../shared/filter-city/filter-city.module";
import {OfferPage} from "./service/offer/offer";
import {WindowViewPage} from "../../shared/window-view/window-view";
import {SBGetBrandPage} from "./service/sanbao/brand/brand";
import {SBGetSeriesPage} from "./service/sanbao/brand/series/series";
import {FilterBrandSeriesPage} from "../../shared/filter-brand-series/filter-brand-series";
import {FilterConfigurePage} from "../../shared/filter-brand-series/configure/configure";
import {EWPDetailsPage} from "./service/details/details";
import {EWPYBOrderPage} from "./service/yb-order/order";
import {EWPYBOrderDatumPage} from "./service/yb-order/datum/datum";
import {EWPSBOrderPage} from "./service/sb-order/order";
import {EWPSBOrderDatumPage} from "./service/sb-order/datum/datum";
import {ConfirmOrderPage} from "./service/confirm-order/confirm-order";
import {PaymentOrderPage} from "./service/payment-order/payment-order";
import {ServiceContractPage} from "./service/details/service-contract/service-contract";
import {EWPYBIntroductionPage} from "./service/yb-introduction/introduction";
import {EWPSBIntroductionPage} from "./service/sb-introduction/introduction";
import {EWPYBIntroductionDetailPage} from "./service/yb-introduction/detail/introduction-detail";
import {EWPSBIntroductionDetailPage} from "./service/sb-introduction/detail/introduction-detail";
import {ProcessPage} from "./service/details/process/process";
import {AlertPage} from "../../shared/alert/alert";
import {EWPService} from "./service/EWPService";
import {SignaturePadYBModalModule} from "../../shared/signature-pad-yanbao/signature-pad-m.module";
import {SignaturePadReturnModule} from "../../shared/signature-pad-return/signature-pad-r.module";
import {YBServiceContractPage} from "./service/yb-order/service-contract/service-contract";
import {HomeStorePage} from "./store/store";
import {HomeStoreDetailsPage} from "./store/details/details";
import {HomeCityPage} from "./city/city";
import {HomeVehiclePage} from "./vehicle/vehicle";
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [IonicModule, FilterCityModule, SignaturePadYBModalModule, SignaturePadReturnModule, PdfViewerModule],
  declarations: [
    HomePage,
    HomeWorkingPage,
    HomeStorePage,
    HomeVehiclePage,
    HomeStoreDetailsPage,
    HomeCityPage,
    YBServiceContractPage,
    OfferPage,
    WindowViewPage,
    SBGetBrandPage,
    SBGetSeriesPage,
    FilterBrandSeriesPage,
    FilterConfigurePage,
    EWPDetailsPage,
    EWPYBOrderPage,
    EWPYBOrderDatumPage,
    EWPSBOrderPage,
    EWPSBOrderDatumPage,
    ConfirmOrderPage,
    PaymentOrderPage,
    AlertPage,
    ServiceContractPage,
    EWPYBIntroductionPage,
    EWPSBIntroductionPage,
    EWPYBIntroductionDetailPage,
    EWPSBIntroductionDetailPage,
    ProcessPage
  ],
  entryComponents: [
    HomePage,
    HomeWorkingPage,
    HomeStorePage,
    HomeVehiclePage,
    HomeStoreDetailsPage,
    HomeCityPage,
    OfferPage,
    YBServiceContractPage,
    WindowViewPage,
    SBGetBrandPage,
    SBGetSeriesPage,
    FilterBrandSeriesPage,
    FilterConfigurePage,
    EWPDetailsPage,
    EWPYBOrderPage,
    EWPYBOrderDatumPage,
    EWPSBOrderPage,
    EWPSBOrderDatumPage,
    ConfirmOrderPage,
    PaymentOrderPage,
    AlertPage,
    ServiceContractPage,
    EWPYBIntroductionPage,
    EWPSBIntroductionPage,
    EWPYBIntroductionDetailPage,
    EWPSBIntroductionDetailPage,
    ProcessPage
  ],
  providers: [HomeService, EWPService],
  exports: [IonicModule]
})
export class HomeModule {
}
