import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-account-info',
  templateUrl: 'account.info.html',
  styleUrls: ['account.info.scss']
})
export class accountInfo implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }
  detail: boolean = true;
  income: boolean = false;
  bank: boolean = false;
  debit: boolean =false;
  ngOnInit() {
  }
  select(id) {
    if (id === "income") {
      this.detail = false;
      this.bank = false;
      this.debit = false;
      this.income = true;
    }
    if (id === "bank") {
      this.detail = false;
      this.income = false;
      this.debit = false;
      this.bank = true;
    }
    if (id === "debit") {
      this.detail = false;
      this.bank = false;
      this.income = false;
      this.debit = true;
    }
    if (id === "detail") {
      this.bank = false;
      this.income = false;
      this.debit = false;
      this.detail = true;
    }
    console.log(id);
    console.log(this.income);
  }
  loadImageFromDevice(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
    };
  }
}
