import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {

  // userForm: FormGroup;

  constructor(private fb: FormBuilder, public forms:FormsService) { }

  ngOnInit(): void {

    this.forms.element.subscribe((res:any)=>{
      console.log(res);
      
      if(res!=""){
        this.userForm.setControl('email', new FormControl(res.email));
        this.userForm.setControl('nombre', new FormControl(res.nombrePerso));
        this.userForm.setControl('apellido', new FormControl(res.apellidoPerso));
        this.userForm.setControl('estado', new FormControl(res.estado));
      }
    })
  }
  userForm= new FormGroup({
    email: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    estado: new FormControl('',Validators.required),
  });

  onSubmit() {
    console.log(this.userForm.value);
  }

}

