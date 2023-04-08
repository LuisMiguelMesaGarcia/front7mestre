import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public api:ApiService){}

  ngOnInit(): void {
    var response = this.api.getAll("Productoes")
    var responseGetbyId = this.api.getById("Productoes",1)
    
    // var responseCreate=this.api.post("Productoes",{nombre: "balon",precio:20000,imagen:"balon.png",categoria:"deportes",descipcion:"balon de futbol",existencias:3})
    console.log(response)
    console.log(responseGetbyId)
    // console.log(responseDelete)
  }
  delete(){
    var responseDelete=this.api.delete("Productoes",1)
  }
  
}
