import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-prduct-form',
  templateUrl: './prduct-form.component.html',
  styleUrls: ['./prduct-form.component.css']
})
export class PrductFormComponent implements OnInit {
categories$;

  constructor(categServ:CategoryService, private productService:ProductService) {
    this.categories$ = categServ.getCategories()
    console.log(this.categories$);
    
   }

  ngOnInit(): void {
  }
  save(product){
    console.log(product);
    this.productService.create(product)
    
  }
}
