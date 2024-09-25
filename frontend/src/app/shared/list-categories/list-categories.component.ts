import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';
import { Category } from '../../core/models/category.model';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  offset = 0;
  limit = 3;
  categories: Category[] = [];
  hasMore = true; // Bandera para indicar si hay más categorías para cargar

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    if (!this.hasMore) return; // Si no hay más categorías, no hacer nada

    const params = this.getRequestParams(this.offset, this.limit);

    this.categoryService.all_categories(params).subscribe(
      (data: any) => {
        const newCategories = data.categories;
        this.categories = [...this.categories, ...newCategories]; // Agregar nuevas categorías al array existente
        this.offset += this.limit;

        // Si la respuesta contiene menos elementos que el límite, no hay más categorías
        if (newCategories.length < this.limit) {
          this.hasMore = false;
        }
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  getRequestParams(offset: number, limit: number): any {
    let params: any = {};
    params[`offset`] = offset;
    params[`limit`] = limit;
    return params;
  }

  scroll() {
    this.getCategories();
  }
}