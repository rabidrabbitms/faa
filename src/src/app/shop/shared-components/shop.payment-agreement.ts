import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shop-payment-agreement',
  templateUrl: 'shop.payment-agreement.html',
  styleUrls: ['shop.payment-agreement.scss']
})
export class shopPaymentAgreementPage implements OnInit{

  constructor(private router: Router) { }

  ngOnInit() {

  }

}
