import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-form-personas',
  templateUrl: './form-personas.component.html',
  styleUrls: ['./form-personas.component.css']
})
export class FormPersonasComponent {
  // personForm: FormGroup;
  // roles = ['Administrator', 'User', 'Other'];

  constructor(private fb: FormBuilder, public forms: FormsService) { }

  ngOnInit(): void {

    this.forms.element.subscribe((res:any)=>{
      console.log(res);
      
      if(res!=""){
        this.personForm.setControl('documentType', new FormControl(res.tipoDoc));
        this.personForm.setControl('documentNumber', new FormControl(res.numeroDoc));
        this.personForm.setControl('firstName', new FormControl(res.nombre));
        this.personForm.setControl('lastName', new FormControl(res.apellido));
        this.personForm.setControl('phone', new FormControl(res.telefono));
        this.personForm.setControl('role', new FormControl(res.rol));
        this.personForm.setControl('address', new FormControl(res.direccion));
      }
    })
  }
  personForm= new FormGroup({
    documentType: new FormControl('',Validators.required),
    documentNumber: new FormControl('',Validators.required),
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    role: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
  });

  onSubmit(): void {
    console.log(this.personForm.value);
  }
}
