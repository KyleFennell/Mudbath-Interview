import { Component, Input, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/models/ExchangeRate';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @Input() product:Product;
  @Input() currentExchangeRate: ExchangeRate;
  editMode: boolean = false;
  ngOnInit(): void {
  }

  convertPrice(product: Product): string {
    console.log(product);
    if (product.price.base === this.currentExchangeRate.base){
      return product.price.amount.toFixed(2);
    }
    let convertedAmount = product.price.amount * this.currentExchangeRate.rates[product.price.base];
    return convertedAmount.toFixed(2);
  }
}
