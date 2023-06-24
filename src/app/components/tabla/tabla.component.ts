import { OnInit, Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TablaDataSource, TablaItem } from './tabla-datasource';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog'; 
import { FormsService } from 'src/app/Services/forms.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() title:string;
  @Input() displayedColumns: string[];
  @Input() dataSource: MatTableDataSource<any>;
  @Input() formComponente: any;
  @Input() ctrlBack: any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api:ApiService, public dialog:MatDialog, public form: FormsService){
    this.dataSource= new MatTableDataSource
  }

  ngOnInit(): void {

  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(element:any){
    this.form.element.next(element)
    this.dialog.open(this.formComponente)
  }

  public eliminarReg(dataobj:any){
    Swal.fire({
      title:'¿Quiere eliminar este campo?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar'

    }).then((res)=>{
      if(res.isConfirmed){
        console.log(Object.values(dataobj)[0])
        let id = String(Object.values(dataobj)[0])
        this.api.delete(this.ctrlBack,id)
        window.location.reload();
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
