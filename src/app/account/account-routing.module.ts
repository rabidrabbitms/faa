import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { accountBuyingPowerDecision } from './account.buying-power-decision';
import { accountBuyingPower } from './account.buying-power';
import { accountBuyingPowerForm } from './account.buying-power-form';
import { accountCoupons } from './account.coupons';
import { accountFAQ } from './account.faq';
import { accountHelp } from './account.help';
import { accountInfo } from './account.info';
import { accountMakePayment } from './account.make-payment';
import { accountPage } from './account.page';
import { accountProfile } from './account.profile';
import { accountPurchases } from './account.purchases';
import { accountRefer } from './account.refer';
import { accountSecurity } from './account.security';

const routes: Routes = [
  {
    path: '',
    component: accountPage,
  },
  {
    path: 'profile',
    component: accountProfile
  },
  {
    path: 'info',
    component: accountInfo
  },
  {
    path: 'purchases',
    component: accountPurchases
  },
  {
    path: 'refer',
    component: accountRefer
  },
  {
    path: 'coupons',
    component: accountCoupons
  },
  {
    path: 'help',
    component: accountHelp
  },
  {
    path: 'faq',
    component: accountFAQ
  },
  {
    path: 'payment',
    component: accountMakePayment
  },
  {
    path: 'security',
    component: accountSecurity
  },
    {
    path: 'buying-power',
    component: accountBuyingPower
  },
  {
    path: 'buying-power-form',
    component: accountBuyingPowerForm
  },
  {
    path: 'buying-power-decision',
    component: accountBuyingPowerDecision
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class accountPageRoutingModule {}
