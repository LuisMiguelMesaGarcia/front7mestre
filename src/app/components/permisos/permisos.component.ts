import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {
  constructor(public api:ApiService){}
  ngOnInit(): void {
    var response = this.api.getAll("ModuloPermisoes")
    console.log(response)
  }
}
