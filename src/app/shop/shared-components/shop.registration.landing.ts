import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'shopregistrationlanding',
  templateUrl: 'shop.registration.landing.html',
  styleUrls: ['shop.registration.landing.scss']
})
export class shopRegistrationLandingPage {

  constructor(private router: Router) { }


}
