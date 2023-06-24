import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormPermisosComponent } from '../Forms/form-permisos/form-permisos.component';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {
  title: string= "Permisos";
  ctrlBack: string="ModuloPermisoes";
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  formComponente: any = FormPermisosComponent;
  

  constructor(public api:ApiService){
    this.dataSource= new MatTableDataSource
  }

  ngOnInit(): void {
    this.getPermisos();
  }

  
  public async getPermisos(){
    await this.api.getAll("ModuloPermisoes").then((res)=> {
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
    this.displayedColumns.push('actions')
  }


}
