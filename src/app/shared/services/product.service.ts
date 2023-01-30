import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts () {
    // return this.http.get('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products');
    return this.http.get('https://shop-configuration-web-backend.vercel.app/products')
    // return this.http.get('http://localhost:3000/products');

  }

  getProduct (id:number) {
    // return this.http.get('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products');
    return this.http.get('https://shop-configuration-web-backend.vercel.app/products'+id);
    // return this.http.get('http://localhost:3000/products/'+id);
  }


}
