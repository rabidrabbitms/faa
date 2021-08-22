import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { messagesLanding } from './messages.landing';
import { messagesPage } from './messages.page';

const routes: Routes = [
  {
    path: 'messages',
    component: messagesPage,
  },
  {
    path: 'messages-landing',
    component: messagesLanding,
  },
  {
    path: '',
    redirectTo: 'messages-landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class messagesPageRoutingModule {}
