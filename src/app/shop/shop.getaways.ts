import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'gataways',
  templateUrl: 'shop.getaways.html',
  styleUrls: ['shop.getaways.scss']
})

export class shopGetawaysPage implements OnInit {
  public total: number;
  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;

  private accordion_expanded = false;
  private items = [
    { 'name': 'item 1' },
    { 'name': 'item 2' },
    { 'name': 'item 3' },
    { 'name': 'item 4' },
    { 'name': 'item 5' },
    { 'name': 'item 6' },
    { 'name': 'item 7' },
    { 'name': 'item 8' }
  ]
  constructor() {  }

  ngOnInit() {

    const deadline = Date.parse('September 1 2021 23:59:59 GMT+0200');
    const date = new Date();
    const total = deadline - Date.parse(date.toDateString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    this.total = total;
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
    this.days = days;
  }
  private toggle_accordion() {
    this.accordion_expanded = this.accordion_expanded === false;
  }
}
