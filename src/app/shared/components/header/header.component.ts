import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count!:number;
  searchArr:Product[]=[];
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.productService.countSub.subscribe((res)=>{
      console.log(res)
      this.count = res;

    })
  }

  getArrayForSearch(){
    this.productService.getAllProduct().subscribe(res=>{
      this.searchArr = res;
      
    })
  }
  onserch(event : Event){
   /*  console.log((event.target as HTMLInputElement).value);  */  
    /* this.searchArr = this.searchArr.filter(ele=>{
      console.log(ele.name) 
    }) */
      let serchVal = (event.target as HTMLInputElement).value
      this.productService.searchValue.next(serchVal)
      
    
  }
}
