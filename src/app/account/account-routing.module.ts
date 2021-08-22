import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { accountCoupons } from './account.coupons';
import { accountHelp } from './account.help';
import { accountInfo } from './account.info';
import { accountPage } from './account.page';
import { accountRefer } from './account.refer';
import { accountVacations } from './account.vacations';

const routes: Routes = [
  {
    path: '',
    component: accountPage,
  },
  {
    path: 'info',
    component: accountInfo
  },
  {
    path: 'vacations',
    component: accountVacations
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class accountPageRoutingModule {}
