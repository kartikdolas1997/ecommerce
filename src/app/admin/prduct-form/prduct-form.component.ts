import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-prduct-form',
  templateUrl: './prduct-form.component.html',
  styleUrls: ['./prduct-form.component.css']
})
export class PrductFormComponent implements OnInit {
categories$;

  constructor(categServ:CategoryService) {
    this.categories$ = categServ.getCategories()
    console.log(this.categories$);
    
   }

  ngOnInit(): void {
  }

}
