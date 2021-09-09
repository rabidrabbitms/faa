import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { accountPage } from './account.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { accountPageRoutingModule } from './account-routing.module';
import { accountRefer } from './account.refer';
import { accountCoupons } from './account.coupons';
import { accountHelp } from './account.help';
import { accountFAQ } from './account.faq';
import { MatExpansionModule } from '@angular/material/expansion';
import { accountMakePayment } from './account.make-payment';
import { accountPurchases } from './account.purchases';
import { NavPage } from '../shop/nav/nav';
import { accountProfile } from './account.profile';
import { accountInfo } from './account.info';
import { accountBuyingPower } from './account.buying-power';
import { accountBuyingPowerForm } from './account.buying-power-form';
import { accountBuyingPowerDecision } from './account.buying-power-decision';
import { accountSecurity } from './account.security';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: accountPage }]),
    accountPageRoutingModule,
    MatExpansionModule,
  ],
  declarations: [accountPage, accountProfile, accountPurchases, accountRefer, accountCoupons, accountHelp, accountFAQ, accountMakePayment, NavPage, accountInfo, accountBuyingPower, accountBuyingPowerForm, accountBuyingPowerDecision, accountSecurity]
})
export class accountPageModule {}
