import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productUrl : string = `${environment.productUrl}`
countSub : Subject<number> = new Subject();
ProdObj : Subject<Product> = new Subject();

  constructor(private http : HttpClient) { }

getAllProduct():Observable<Product[]>{
  return this.http.get<Product[]>(this.productUrl)
}

deleteProduct(id:number):Observable<Product>{
  let deleteUrl = `${this.productUrl}/${id}`
  return this.http.delete<Product>(deleteUrl)
}
UpdateProduct(id:number,obj : Product):Observable<Product>{
  let updateUrl = `${this.productUrl}/${id}`
  return this.http.patch<Product>(updateUrl,obj)
}

editProduct(id:number):Observable<Product>{
  let editUrl = `${this.productUrl}/${id}`
  return this.http.get<Product>(editUrl)
}

addProduct(prodObj : Product):Observable<Product>{
  return this.http.post<Product>(this.productUrl, prodObj)
}

getCount(count : number){
  return count
}

getId(id:number){
  return id;
}



}
