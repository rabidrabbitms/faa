import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-help',
  templateUrl: 'account.help.html',
  styleUrls: ['account.help.scss']
})
export class accountHelp implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit(){
  }

}
