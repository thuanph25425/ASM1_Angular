import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/product')
  }
  getProduct(id: any): Observable<IProduct>{
    return this.http.get<IProduct>('http://localhost:3000/product/'+id)
  }
  deleteProduct(id: number | string): Observable<IProduct>{
    return this.http.delete<IProduct>('http://localhost:3000/product/'+id)
  }
  addProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>('http://localhost:3000/product', product)
  }
  editProduct(product: IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:3000/product/${product.id}`, product)
  }
}
