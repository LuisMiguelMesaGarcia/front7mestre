import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})
export class RegistroLoginComponent implements OnInit {

  constructor(public api:ApiService){}
  
  ngOnInit(): void {
    var response = this.api.getAll("ResgitroLogins")
    console.log(response)
  }
}
