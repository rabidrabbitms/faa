import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { accountPage } from './account.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { accountPageRoutingModule } from './account-routing.module';
import { accountInfo } from './account.info';
import { accountVacations } from './account.vacations';
import { accountRefer } from './account.refer';
import { accountCoupons } from './account.coupons';
import { accountHelp } from './account.help';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: accountPage }]),
    accountPageRoutingModule,
  ],
  declarations: [accountPage, accountInfo, accountVacations, accountRefer, accountCoupons, accountHelp]
})
export class accountPageModule {}
