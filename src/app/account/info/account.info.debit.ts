import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-info-debit',
  templateUrl: 'account.info.debit.html',
  styleUrls: ['account.info.debit.scss']
})
export class accountInfoDebit implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit(){
  }

}
