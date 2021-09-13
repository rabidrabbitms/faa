import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-buying-power-form',
  templateUrl: 'account.buying-power-form.html',
  styleUrls: ['account.buying-power-form.scss']
})
export class accountBuyingPowerForm implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  income: boolean = false;
  bank: boolean = false;

  ngOnInit(){
  }
  open(module: string) {
    if (module === "income"){
      this.income = !this.income;
    }
    if (module === "bank") {
      this.bank = !this.bank;
    }
  }
}
