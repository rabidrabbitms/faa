import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-buying-power-decision',
  templateUrl: 'account.buying-power-decision.html',
  styleUrls: ['account.buying-power-decision.scss']
})
export class accountBuyingPowerDecision implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }
  approved: string;
  async ngOnInit() {
    this.approved = 'true';
    await this.delay(5000);
    this.approved = 'false';
    await this.delay(5000)
    this.approved = 'manual';
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
