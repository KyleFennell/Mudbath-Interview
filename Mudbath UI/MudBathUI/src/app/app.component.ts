import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/models/ExchangeRate';
import { Product } from 'src/models/Product';
import { ExchangeRates_Service } from 'src/services/ExchangeRates_Service';
import { Products_Service } from '../services/Products_Service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MudBathUI';
  products : Product[];
  exchangeRates : ExchangeRate[];
  currentExchangeRate : ExchangeRate;
  constructor(private s_Products:Products_Service, private s_ExchangeRates:ExchangeRates_Service){ }

  ngOnInit(): void {
    this.s_Products.getProducts().subscribe( products => {
      this.products = products;
    });
    this.s_ExchangeRates.getExchangeRates().subscribe( exchangeRates => {
      this.exchangeRates = exchangeRates;
    })
  }

  updateSiteCurrency(currency: string): void{
    console.log("updating currency "+currency)
    this.setCurrentExchangeRate(currency);
    this.products.forEach(p => {
      p.price.amount = this.convertPrice(p);
      p.price.base = this.currentExchangeRate.base; // i don't really like changing the base rate but it's only getting stored locally so it's ok for now
    });
    console.log(this.currentExchangeRate);
    console.log(this.products);
  }

  setCurrentExchangeRate(currency: string): void {
    this.currentExchangeRate = this.exchangeRates.filter(e => e.base === currency)[0];
  }

  convertPrice(product: Product): number {
    if (product.price.base === this.currentExchangeRate.base){
      return product.price.amount
    }
    return product.price.amount * this.currentExchangeRate.rates[product.price.base];
  }

}
