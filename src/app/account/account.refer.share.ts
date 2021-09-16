import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-refer-share',
  templateUrl: 'account.refer.share.html',
  styleUrls: ['account.refer.share.scss']
})
export class accountReferShare implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit(){
  }

}
