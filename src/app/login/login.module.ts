import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { LoginRegister } from './login.register';
import { LoginSignin } from './login.signin';
import { LoginLoading } from './login.loading';
import { LoginVerify } from './login.verify';
import { LoginBackground } from './login.background';
import { UtilitiesModule } from '../utilities/utilities.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    UtilitiesModule
  ],
  declarations: [LoginBackground, LoginPage, LoginRegister, LoginSignin, LoginLoading, LoginVerify]
})
export class LoginPageModule {}
