import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
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
      this.currentExchangeRate = exchangeRates[0];
    });
    this.updateSiteCurrency;
  }

  updateSiteCurrency(currency: ExchangeRate): void{
    this.currentExchangeRate = currency    
  }


}
