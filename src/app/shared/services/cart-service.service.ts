import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  porductList =new BehaviorSubject<any>([]);
  cartItemList: Product[]=[];
  constructor() { }
getProduct(){
  return this.porductList.asObservable();
}
setProduct(product : any){
  this.cartItemList.push(...product)
  this.porductList.next(product);
}
addtoCart(product :any){
  this.cartItemList.push(product);
  this.porductList.next(this.cartItemList)
}
removeCartItem(product:any){
  this.cartItemList.map((a:any, index:any)=>{
    if(product.id === a.id){
      this.cartItemList.splice(index,1)
    }
  })
}
}
