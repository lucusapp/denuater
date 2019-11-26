
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { InventarioService } from 'src/app/service/inventario.service';
import { interproductos } from 'src/app/models/termino';
import { FormGroup } from '@angular/forms';



// export interface PeriodicElement {

//   accion: string;
//   titulo: string;
//   precio: number;
//   marca: string;
//   categoria: string;
//   caracteristicas:string;
//   imagenes:string
// }





@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: []
})
export class PedidosComponent implements OnInit {
  
  


  // displayedColumns: string[]=['accion','titulo','precio','marca','categoria','caracteristicas','imagenes','accions'];
  // dataSource:any = []

//@ViewChild(MatPaginator) 


pedidoForm :FormGroup

  constructor(private invServ:InventarioService) { 
    
  }
  ngOnInit() {

    this.pedidoForm=this.invServ.pedform
    console.log(this.pedidoForm.value)
   
   
  }

  
    }

  

