import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
allProductArr :Product[]=[];
getUserRole : string| null= "";
 count: number = 0;
 
constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getUserRole = localStorage.getItem("userRole")
    console.log(this.getUserRole)
    
  }
  getAllProducts(){
    this.productService.getAllProduct().subscribe((data)=>{
      console.log(data)
      this.allProductArr = data;
    })
  }
  OnAddCartClick(id:number){
    this.count++;
    /* this.productService.getCount(this.count);
    console.log(this.count) */
    this.productService.countSub.next(this.count);

    this.allProductArr.forEach(ele=>{
      if(ele.id === id){
        this.productService.ProdObj.next(ele);
      }
    })

    
    /* this.productService.editProduct(id).subscribe((data)=>{
      console.log(data)
    }) */
  }

  onEditClick(id:number){
    this.productService.editProduct(id)
    .subscribe(res=>{
     console.log(res)
    })
    
  }
  onDeleteClick(id : number){
    this.productService.deleteProduct(id)
    .subscribe((res)=>{console.log(res)})

    this.allProductArr = this.allProductArr.filter(prod =>{
      return prod.id !== id
    })
  }
}
