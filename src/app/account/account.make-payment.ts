import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-make-payment',
  templateUrl: 'account.make-payment.html',
  styleUrls: ['account.make-payment.scss']
})
export class accountMakePayment implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit(){
  }

}
