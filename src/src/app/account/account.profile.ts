import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-profile',
  templateUrl: 'account.profile.html',
  styleUrls: ['account.profile.scss']
})
export class accountProfile implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit(){
  }
}
