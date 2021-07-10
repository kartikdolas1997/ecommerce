import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any[];
  filteredProducts: any[];

  subscription: Subscription;
  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe((products) => {
      this.filteredProducts = this.products = products;
    });
  }

  filter(query: string) {
    console.log(this.products);
    
    this.filteredProducts = query
      ? this.products.filter((p) =>
          p.val['title'].toLowerCase()
          .includes(query.toLowerCase())
        )
      : this.products;
  }

  ngOnInit(): void {
    console.log(this.products);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
