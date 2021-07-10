import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
// import 'rxjs/add/operator/take'

@Component({
  selector: 'app-prduct-form',
  templateUrl: './prduct-form.component.html',
  styleUrls: ['./prduct-form.component.css'],
})
export class PrductFormComponent implements OnInit {
  categories$;
  product: any = {};
  id;

  constructor(
    categServ: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService
        .get(this.id)
        .valueChanges()
        .subscribe((p) => (this.product = p));
    }

    this.categories$ = categServ.getCategories();
    console.log(this.categories$);
  }

  ngOnInit(): void {}
  save(product) {
    if (this.id) {
      this.productService.update(this.id,product)
    }
    else{
      this.productService.create(product);  
    }
    this.router.navigate(['/admin/product']);

  }
  delete(){
    if (confirm('Are you sure you want to delete')) {
      console.log(this.id);
      
      this.productService.delete(this.id)
      this.router.navigate(['/admin/product']);

    }
  }
}
