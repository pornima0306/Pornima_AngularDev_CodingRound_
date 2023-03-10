import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../model/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  ProductForm! : FormGroup;
  ProdArray : Product[]=[];
  canEdit :boolean=false;
  constructor(private fb : FormBuilder,
    private route : ActivatedRoute,
    private productService : ProductsService,
    private router : Router) { }

  ngOnInit(): void {
    this.onCreateProduct()

    this.route.params
        .subscribe((params : Params) =>{
          console.log(params);
          let getId = params['id'];
          if(getId){
            this.canEdit = true;
          }
          localStorage.setItem('postId','' + getId)
          this.productService.editProduct(getId)
              .subscribe(res =>{
                console.log(res);
                this.ProductForm.setValue({
                  name : res.name,
                  price : res.price,
                  category : res.category,
                  quantity : res.quantity,
                 
                })
              })
        })
        /* this.onFormSubmit() */
        
        
  }

  onFormSubmit(){
    /* console.log(this.ProductForm.value.id) */
    this.productService.addProduct(this.ProductForm.value).subscribe((res)=>{
      console.log(res)
      this.ProdArray.push(res)
    })
    this.router.navigate(['/admincard'])
    console.log(this.ProdArray)
  }

  onCreateProduct(){
    this.ProductForm = this.fb.group({
      name : ['',[ Validators.required]], 
      category: ['',[ Validators.required]],
      price: ['',[ Validators.required]],
      quantity: ['',[ Validators.required]],
    })
  }

  onUpdateProduct(){
    console.log(this.ProductForm.value);
    let id =  +(localStorage.getItem('postId')!)
    // console.log(localStorage.getItem('postId'));
    
    this.productService.UpdateProduct(id, this.ProductForm.value)
                      .subscribe(res =>{
                        console.log(res);
                        this.ProdArray.push(res);
                        console.log(this.ProdArray);
                        /* this.ProdArray.forEach(prod=>{
                          if(prod.id === id){
                            prod = Object.assign({},res)
                          }
                        }) */
                        this.ProductForm.reset()
                      })
                      this.router.navigate(['/admincard'])
  }
  get f(){
    return this.ProductForm.controls
  }
}
