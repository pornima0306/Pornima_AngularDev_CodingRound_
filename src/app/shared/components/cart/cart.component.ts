import { AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../model/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
cartArray:Product[]=[]


  constructor(private productService : ProductsService,
    private route : ActivatedRoute) { }
 

  ngOnInit(): void {
    this.onAddToCart()
    
  }

  
 
  onAddToCart(){
    this.productService.ProdObj.subscribe(res=>{
          this.cartArray.push(res)
          console.log(this.cartArray)
          return res
      })
      console.log(this.cartArray)
  }

  OnRemoveCartClick(){

  }


}
