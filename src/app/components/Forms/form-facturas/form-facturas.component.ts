import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-form-facturas',
  templateUrl: './form-facturas.component.html',
  styleUrls: ['./form-facturas.component.css']
})
export class FormFacturasComponent {
  // invoiceForm: FormGroup;

  constructor(private fb: FormBuilder, public forms:FormsService) { }

  ngOnInit(): void {

    this.forms.element.subscribe((res:any)=>{
      console.log(res);
      
      if(res!=""){
        this.invoiceForm.setControl('vendedor', new FormControl(res.vendedor));
        this.invoiceForm.setControl('cliente', new FormControl(res.cliente));
        this.invoiceForm.setControl('date', new FormControl(res.fecha));
        this.invoiceForm.setControl('status', new FormControl(res.estado));
      }
    })
  }
  invoiceForm= new FormGroup({
    vendedor: new FormControl('',Validators.required),
    cliente: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),
  });

  onSubmit() {
    // Process form data here
    console.log(this.invoiceForm.value);
  }
}
