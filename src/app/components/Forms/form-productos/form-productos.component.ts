import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent {
  productForm: FormGroup;
  hasUnitNumber = false;

  constructor(private formBuilder: FormBuilder) { }

  
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      productCategory: ['', Validators.required],
      productStock: ['', Validators.required],
      productImage: ['', Validators.required],
      productDescription: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.productForm.value);
  }
}
