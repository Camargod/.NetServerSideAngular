import { Component, OnInit } from '@angular/core';
import { SubCategoriesMock } from 'src/app/objects/categories-mock';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  constructor() { }

  subCategories = SubCategoriesMock

  ngOnInit() {
  }

}
