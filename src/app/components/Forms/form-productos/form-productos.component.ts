import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent {
  // productForm: FormGroup;
  // hasUnitNumber = false;

  constructor(private fb: FormBuilder, public forms:FormsService) { }

  ngOnInit(): void {

    this.forms.element.subscribe((res:any)=>{
      console.log(res);
      
      if(res!=""){
        this.productForm.setControl('productName', new FormControl(res.nombre));
        this.productForm.setControl('productPrice', new FormControl(res.precio));
        this.productForm.setControl('productCategory', new FormControl(res.categoria));
        this.productForm.setControl('productStock', new FormControl(res.existencias));
        this.productForm.setControl('productImage', new FormControl(res.imagen));
        this.productForm.setControl('productDescription', new FormControl(res.descripcion));
      }
    })
  }
  productForm= new FormGroup({
    productName: new FormControl('',Validators.required),
    productPrice: new FormControl('',Validators.required),
    productCategory: new FormControl('',Validators.required),
    productStock: new FormControl('',Validators.required),
    productImage: new FormControl('',Validators.required),
    productDescription: new FormControl('',Validators.required),
  });
  
  onSubmit(): void {
    console.log(this.productForm.value);
  }
}
