import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-form-permisos',
  templateUrl: './form-permisos.component.html',
  styleUrls: ['./form-permisos.component.css']
})
export class FormPermisosComponent {

  constructor(private formBuilder: FormBuilder, public forms:FormsService) { }

  
  ngOnInit(): void {

    this.forms.element.subscribe((res:any)=>{
      console.log(res);
      
      if(res!=""){
        this.permisosForm.setControl('modulo', new FormControl(res.modulo));
        this.permisosForm.setControl('rol', new FormControl(res.rol));
        this.permisosForm.setControl('permiso', new FormControl(res.permiso));
      }
    })
  }
  permisosForm= new FormGroup({
    modulo: new FormControl('',Validators.required),
    rol: new FormControl('',Validators.required),
    permiso: new FormControl('',Validators.required),
  });

  submitForm() {
    if (this.permisosForm.valid) {
      console.log(this.permisosForm.value);
      // Aquí se puede enviar la información del formulario a un servidor o realizar alguna otra acción necesaria.
    }
  }
}
