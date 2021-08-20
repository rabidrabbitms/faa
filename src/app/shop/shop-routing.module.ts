import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { shopGetawaysPage } from './shop.getaways';
import { shopPage } from './shop.page';
import { shopVacationsPage } from './shop.vacations';
import { shopPartnerPage } from './shared-components/shop.partner'
import { shopRegistrationLandingPage } from './shared-components/shop.registration.landing';
import { shopCruisesPage } from './shop.cruises';
import { SpecialOffersPage } from './shop.special-offers-page'
import { SpecialOffersOrder } from './shop.special-offers-order';

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
    path: 'partners',
    component: shopPartnerPage
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
    path: 'shop-special-offers-order',
    component: SpecialOffersOrder
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class shopPageRoutingModule {}
