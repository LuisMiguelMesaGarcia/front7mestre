import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormFacturasComponent } from '../Forms/form-facturas/form-facturas.component';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  
  title: string= "Factura";
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  formComponente:any=FormFacturasComponent;

  constructor(public api:ApiService){
    this.dataSource= new MatTableDataSource
  }

  ngOnInit(): void {
    this.getFactura();
  }


  public async getFactura(){
    await this.api.getAll("Facturas").then((res)=> {
    for (let index=0; index < res.length; index++){
    this.loadTable([res[index]])
    } 
    this.dataSource.data=res;
    })
    
  }

  public loadTable(data:any[]){
    this.displayedColumns=[];
    for(let colummns in data[0]){
      this.displayedColumns.push(colummns);
    }
    this.displayedColumns.push('action')
  }



}
