import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-referrals',
  templateUrl: 'account.refer.myreferrals.html',
  styleUrls: ['account.refer.myreferrals.scss']
})
export class accountReferReferrals implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit(){
  }

}
