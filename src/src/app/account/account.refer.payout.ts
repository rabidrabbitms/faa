import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-refer-payout',
  templateUrl: 'account.refer.payout.html',
  styleUrls: ['account.refer.payout.scss']
})
export class accountReferPayout implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }
  redeemableUSD = 0;
  ngOnInit(){
  }

}
