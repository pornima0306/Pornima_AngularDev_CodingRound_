import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count!:number;
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.productService.countSub.subscribe((res)=>{
      console.log(res)
      this.count = res;
      
    })
  }

}
