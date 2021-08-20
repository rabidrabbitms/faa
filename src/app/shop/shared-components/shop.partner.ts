import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'shoppartner',
  templateUrl: 'shop.partner.html',
  styleUrls: ['shop.partner.scss']
})
export class shopPartnerPage {

  constructor(private router: Router) { }


}
