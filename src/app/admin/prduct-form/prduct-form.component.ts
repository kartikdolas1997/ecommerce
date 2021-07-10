import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
// import 'rxjs/add/operator/take'

@Component({
  selector: 'app-prduct-form',
  templateUrl: './prduct-form.component.html',
  styleUrls: ['./prduct-form.component.css']
})
export class PrductFormComponent implements OnInit {
categories$;
product :any ={};

  constructor(categServ:CategoryService,
    private router:Router,
    private route:ActivatedRoute, 
    private productService:ProductService
    
    ) {
    this.categories$ = categServ.getCategories()
    console.log(this.categories$);
    
    
   }
   

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');
    if(id) 
    {this.productService.get(id).valueChanges().subscribe(p => this.product = p)}
  }
  save(product){
    console.log(product);
    this.productService.create(product)
    this.router.navigate(['/admin/product'])
    
  }
}
