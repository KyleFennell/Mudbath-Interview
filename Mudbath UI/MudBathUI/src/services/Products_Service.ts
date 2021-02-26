import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class Products_Service {
    fileName: string = '../assets/products.json';

    constructor(private http:HttpClient){}

    getProducts(): Observable<Product[]>{
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
        let products = this.http.get<Product[]>(this.fileName, { headers });
        return products;
    }
}