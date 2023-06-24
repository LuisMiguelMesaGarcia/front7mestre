import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';
import { FormProductosComponent } from '../Forms/form-productos/form-productos.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  title: string= "Productos";
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  formComponente: any = FormProductosComponent;
  ctrlBack: string= "Productoes"
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api:ApiService){
    this.dataSource= new MatTableDataSource
  }

  ngOnInit(): void {
    this.getProductos();
  }

  public async getProductos(){
    await this.api.getAll("Productoes").then((res)=> {
    this.loadTable([res[0]])
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

  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


  

