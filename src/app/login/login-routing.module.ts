import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { LoginRegister } from './login.register';
import { LoginSignin } from './login.signin';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'app-login-register',
    component: LoginRegister
  },
  {
    path: 'signin',
    component: LoginSignin
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
