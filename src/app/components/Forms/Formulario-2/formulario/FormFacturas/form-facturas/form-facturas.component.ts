import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-facturas',
  templateUrl: './form-facturas.component.html',
  styleUrls: ['./form-facturas.component.css']
})
export class FormFacturasComponent {
  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      date: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    // Process form data here
    console.log(this.invoiceForm.value);
  }
}
