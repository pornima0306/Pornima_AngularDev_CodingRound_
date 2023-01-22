import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    /* login type */
    this.getAllProducts()
  }
  getAllProducts(){
    this.productService.getAllProduct().subscribe((data)=>{
      console.log(data)
    })
  }
}
