import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-refer-statement',
  templateUrl: 'account.refer.statement.html',
  styleUrls: ['account.refer.statement.scss']
})
export class accountReferStatement implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }
  redeemableUSD = 0;
  ngOnInit(){
  }

}
