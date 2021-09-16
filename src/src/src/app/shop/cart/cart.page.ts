import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'cart',
  templateUrl: 'cart.page.html',
  styleUrls: ['cart.page.scss']
})

export class CartPage implements OnInit {
  constructor() {
  }
 
  items: Array<any>
  quantity: Array<any> = [];
  total: number;
  totalPayments: number;
  totalCash: number;

  ngOnInit() {
    this.items = [
      new item(1, "Instapot 4qt", 25, 8, 200, "../assets/Apple-iPad.png", true),
      new item(2, "Random Vacation", 400,10,4000,"../assets/OneWeekGetaway.svg", true)
    ]
    this.quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.total = this.items.map(x => x.Payment).reduce(function (a, b) {
      return a + b;
    });
    this.totalPayments = this.items.map(x => x.PaymentNumber).reduce(function (a, b) {
      return a + b;
    });
    this.totalCash = this.items.map(x => x.CashPrice).reduce(function (a, b) {
      return a + b;
    });
  }
  remove(item) {
    item.Active = false;
  }
}
class item {
  Order: number;
  ProductName: string;
  Payment: number;
  PaymentNumber: number;
  CashPrice: number;
  Image: string;
  Active: boolean;
  constructor(order, longText, payment, paymentNumber, cashPrice, imgPath, active) {
    this.Order = order;
    this.ProductName = longText;
    this.Payment = payment;
    this.PaymentNumber = paymentNumber;
    this.CashPrice = cashPrice;
    this.Image = imgPath;
    this.Active = active
  }
}
