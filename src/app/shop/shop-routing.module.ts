import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { shopGetawaysPage } from './shop.getaways';
import { shopPage } from './shop.page';
import { shopVacationsPage } from './shop.vacations';
import { shopRegistrationLandingPage } from './shared-components/shop.registration.landing';
import { shopCruisesPage } from './shop.cruises';
import { SpecialOffersPage } from './shop.special-offers-page'
import { PrequalifyLandingPage } from './prequalification/prequalify.landing';
import { PrequalifyTermsPage } from './prequalification/prequalify.terms';
import { PrequalifyIncomePage } from './prequalification/prequalify.income';
import { PrequalifyFinalizePage } from './prequalification/prequalify.finalize';
import { shopPaymentAgreementPage } from './shared-components/shop.payment-agreement';
import { shopSpecialOffersLandingPage } from './shop.special-offers-landing';
import { CartPage } from './cart/cart.page';
import { AgreementLandingPage } from './agreement/agreement.landing';
import { AgreementSignaturePage } from './agreement/agreement.signature';
import { AgreementReviewPage } from './agreement/agreement.review';
import { AgreementFinalizingPage } from './agreement/agreement.finalizing';
import { CartCheckoutPage } from './cart/cart.checkout';
import { shopGetawaysOdenzaPage } from './shop.getaways.odenza';

const routes: Routes = [
  {
    path: '',
    component: shopPage,
  },
  {
    path: 'vacations',
    component: shopVacationsPage
  },
  {
    path: 'shop-special-offers-landing',
    component: shopSpecialOffersLandingPage
  },
  {
    path: 'getaways',
    component: shopGetawaysPage
  },
  {
    path: 'getaways-odenza',
    component: shopGetawaysOdenzaPage
  },
  {
    path: 'registration-landing',
    component: shopRegistrationLandingPage
  },
  {
    path: 'cruises',
    component: shopCruisesPage
  },
  {
    path: 'shop-special-offers-page',
    component: SpecialOffersPage
  },
  {
    path: 'prequalify',
    component: PrequalifyLandingPage
  },
  {
    path: 'prequalify-terms',
    component: PrequalifyTermsPage
  },
  {
    path: 'prequalify-income',
    component: PrequalifyIncomePage
  },
  {
    path: 'prequalify-finalize',
    component: PrequalifyFinalizePage
  },
  {
    path: 'agreement',
    component: AgreementLandingPage
  },
  {
    path: 'agreement-signature',
    component: AgreementSignaturePage
  },
  {
    path: 'agreement-review',
    component: AgreementReviewPage
  },
  {
    path: 'agreement-finalize',
    component: AgreementFinalizingPage
  },
  {
    path: 'payment-agreement',
    component: shopPaymentAgreementPage
  },
  {
    path: 'cart',
    component: CartPage
  },
  {
    path: 'cart-checkout',
    component: CartCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class shopPageRoutingModule {}
