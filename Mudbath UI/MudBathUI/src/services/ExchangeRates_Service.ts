import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ExchangeRate } from '../models/ExchangeRate';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ExchangeRates_Service {
    inputFolder: string = '/assets/inputData/';

    constructor(private http: HttpClient){}

    getExchangeRates(): Observable<ExchangeRate[]>{
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
        let exchangeRates = this.http.get<ExchangeRate[]>(this.inputFolder, { headers });
        return exchangeRates;
    }
}