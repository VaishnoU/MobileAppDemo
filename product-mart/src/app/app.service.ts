import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  products: Product[];
  constructor() { }

  setProduct(products: Product[]){
  this.products = products;
  }

  getProduct(): Product[]{
    return this.products;
  }
}
