import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ExchangeRate } from '../models/ExchangeRate';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ExchangeRates_Service {
    fileName: string = '../assets/exchange_rates.json';

    constructor(private http: HttpClient){}

    getExchangeRates(): Observable<ExchangeRate[]>{
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
        let exchangeRates = this.http.get<ExchangeRate[]>(this.fileName, { headers });
        return exchangeRates;
    }
}