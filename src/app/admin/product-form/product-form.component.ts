import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories$;

  productForm = this.fb.group({
    title: ['', Validators.required],
    price: ['', Validators.required],
    category: ['', Validators.required],
    imageUrl: ['', Validators.required],
  });

  constructor(
    public categoryService: CategoryService,
    public fb: FormBuilder,
    private prodctService: ProductService
  ) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit(): void {}
}
