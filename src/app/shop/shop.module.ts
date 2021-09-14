import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { shopPage } from './shop.page';
import { shopVacationsPage } from './shop.vacations';
import { shopGetawaysPage} from './shop.getaways'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { shopPageRoutingModule } from './shop-routing.module';
import {shopHowPage} from './shared-components/shop.how'
import { shopStepsPage } from './shared-components/shop.steps'
import { shopRegistrationLandingPage } from './shared-components/shop.registration.landing';
import { shopReadPage } from './shared-components/shop.read';
import { shopTermsPage } from './shared-components/shop.terms';
import { shopCruisesPage } from './shop.cruises';
import { SpecialOffersPage } from './shop.special-offers-page'
import { PrequalifyLandingPage } from './prequalification/prequalify.landing';
import { PrequalifyTermsPage } from './prequalification/prequalify.terms';
import { PrequalifyIncomePage } from './prequalification/prequalify.income';
import { PrequalifyFinalizePage } from './prequalification/prequalify.finalize';
import { shopPaymentAgreementPage } from './shared-components/shop.payment-agreement';
import { shopSpecialOffersLandingPage } from './shop.special-offers-landing';
import { NavPage } from './nav/nav';
import { CartPage } from './cart/cart.page';
import { AgreementLandingPage } from './agreement/agreement.landing';
import { AgreementSignaturePage } from './agreement/agreement.signature';
import { AgreementReviewPage } from './agreement/agreement.review';
import { AgreementFinalizingPage } from './agreement/agreement.finalizing';
import { CartCheckoutPage } from './cart/cart.checkout';
import { shopGetawaysOdenzaPage } from './shop.getaways.odenza';
import { Banner } from './nav/banner';




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    shopPageRoutingModule,
    MatExpansionModule
  ],
  declarations: [
    shopPage,
    shopVacationsPage,
    shopGetawaysPage,
    shopGetawaysOdenzaPage,
    shopHowPage, 
    shopStepsPage,
    shopRegistrationLandingPage,
    shopReadPage,
    shopTermsPage,
    shopCruisesPage,
    SpecialOffersPage,
    PrequalifyLandingPage,
    PrequalifyTermsPage,
    PrequalifyIncomePage,
    PrequalifyFinalizePage,
    shopPaymentAgreementPage,
    shopSpecialOffersLandingPage,
    NavPage,
    Banner,
    CartPage,
    CartCheckoutPage,
    AgreementLandingPage,
    AgreementSignaturePage,
    AgreementReviewPage,
    AgreementFinalizingPage


  ],
  exports: [
    shopVacationsPage,
    shopGetawaysPage,
    shopGetawaysOdenzaPage,
    shopHowPage,
    shopStepsPage,
    shopRegistrationLandingPage,
    shopReadPage,
    shopTermsPage,
    shopCruisesPage,
    SpecialOffersPage,
    PrequalifyLandingPage,
    PrequalifyTermsPage,
    PrequalifyIncomePage,
    PrequalifyFinalizePage,
    shopPaymentAgreementPage,
    shopSpecialOffersLandingPage,
    NavPage,
    Banner,
    CartPage,
    CartCheckoutPage,
    AgreementLandingPage,
    AgreementSignaturePage,
    AgreementReviewPage,
    AgreementFinalizingPage
]
})
export class shopPageModule {}
