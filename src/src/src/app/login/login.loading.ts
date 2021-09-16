import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'login-loading',
  templateUrl: 'login.loading.html',
  styleUrls: ['login.loading.scss']
})
export class LoginLoading implements OnInit {
  constructor(public alertController: AlertController, private location: Location, private router: Router ) { }

 async ngOnInit() {
   await this.delay(5000)
   this.router.navigate(['../landing'])
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
