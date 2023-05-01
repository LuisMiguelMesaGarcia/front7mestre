import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
  title: string= "Usuarios";
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api:ApiService){
    this.dataSource= new MatTableDataSource
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public async getUsuario(){
    await this.api.getAll("Usuarios").then((res)=> {
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
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
