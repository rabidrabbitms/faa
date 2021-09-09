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

  ngOnInit(){
  }

}
