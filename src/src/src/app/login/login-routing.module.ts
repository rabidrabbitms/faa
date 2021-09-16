import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLoading } from './login.loading';
import { LoginPage } from './login.page';
import { LoginRegister } from './login.register';
import { LoginSignin } from './login.signin';
import { LoginVerify } from './login.verify';

const routes: Routes = [
  {
    path: '',
    component: LoginLoading
  },
  {
    path: 'landing',
    component: LoginPage
  },
  {
    path: 'app-login-register',
    component: LoginRegister
  },
  {
    path: 'verify',
    component: LoginVerify
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
