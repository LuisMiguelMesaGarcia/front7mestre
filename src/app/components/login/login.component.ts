import { NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public loginService:LoginService){

  }

  em="";
  pass="";
  loginForm= new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(8)]))
  });

  async onSubmit(){
    this.em = this.loginForm.controls["username"].value;
    this.pass = this.loginForm.controls["password"].value;
    if(this.em==="usuario" && this.pass==="12345678"){
      Swal.fire(
        'Conexion exitosa!',
        'Bienvenido!',
      )
      localStorage.setItem('login','login');

      this.loginService.login.next("login");
    }else{
      Swal.fire({
        icon:"error",
        title:"Ooops..",
        text: "Datos de logueo fallidos",
        footer: "Intente: usuario: usuario contraseña: 12345678"
      })
    }
  }
}
