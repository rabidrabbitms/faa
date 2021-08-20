import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { messagesPage } from './messages.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { messagesPageRoutingModule } from './messages-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    messagesPageRoutingModule
  ],
  declarations: [messagesPage]
})
export class messagesPageModule {}
