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
    path: 'getaways',
    component: shopGetawaysPage
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class shopPageRoutingModule {}
