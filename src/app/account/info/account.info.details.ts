import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-info-details',
  templateUrl: 'account.info.details.html',
  styleUrls: ['account.info.details.scss']
})
export class accountInfoDetails implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit(){
  }

}
