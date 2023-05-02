import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-permisos',
  templateUrl: './form-permisos.component.html',
  styleUrls: ['./form-permisos.component.css']
})
export class FormPermisosComponent {
  permisosForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  
  ngOnInit(): void {
    this.permisosForm = this.formBuilder.group({
      modulo: ['', Validators.required],
      rol: ['', Validators.required],
      estadoPermiso: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.permisosForm.valid) {
      console.log(this.permisosForm.value);
      // Aquí se puede enviar la información del formulario a un servidor o realizar alguna otra acción necesaria.
    }
  }
}
