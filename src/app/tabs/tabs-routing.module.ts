import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'shop',
        loadChildren: () => import('../shop/shop.module').then(m => m.shopPageModule)
      },
      {
        path: 'shop/vacations',
        loadChildren: () => import('../shop/shop.module').then(m => m.shopPageModule)
      },

      {
        path: 'messages',
        loadChildren: () => import('../messages/messages.module').then(m => m.messagesPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.accountPageModule)
      },
     
      {
        path: '',
        redirectTo: '/tabs/shop',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: './login/login.module',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
