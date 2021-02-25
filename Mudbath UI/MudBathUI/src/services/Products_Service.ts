import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class Products_Service {
    inputFolder: string = '/assets/inputData/';

    constructor(private http: HttpClient){}

    getProducts(fileName: string): Observable<Product[]>{
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
        let products = this.http.get<Product[]>(this.inputFolder+fileName, { headers });
        return products;
    }
}