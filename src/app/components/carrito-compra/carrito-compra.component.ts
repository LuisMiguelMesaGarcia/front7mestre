import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit{

  constructor(public api:ApiService){}
  
  ngOnInit(): void {
    var response = this.api.getAll("CarritoCompras")
    console.log(response)
  }
}
