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
import { shopPartnerPage } from './shared-components/shop.partner';
import { shopRegistrationLandingPage } from './shared-components/shop.registration.landing';
import { shopReadPage } from './shared-components/shop.read';
import { shopTermsPage } from './shared-components/shop.terms';
import { shopCruisesPage } from './shop.cruises';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    shopPageRoutingModule,
    MatExpansionModule,
  ],
  declarations: [shopPage, shopVacationsPage, shopGetawaysPage, shopHowPage, shopStepsPage, shopPartnerPage, shopRegistrationLandingPage, shopReadPage, shopTermsPage,shopCruisesPage
],
  exports: [shopVacationsPage, shopGetawaysPage, shopHowPage, shopStepsPage, shopPartnerPage, shopRegistrationLandingPage, shopReadPage, shopTermsPage, shopCruisesPage
]
})
export class shopPageModule {}
