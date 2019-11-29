import { Component, OnInit,ViewChild } from '@angular/core';
import { InventarioService } from 'src/app/service/inventario.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog,MatDialogConfig,MatButtonModule,MatIconModule, throwMatDialogContentAlreadyAttachedError} from '@angular/material';
import { ProductoComponent } from './producto.component';
import { interproductos } from 'src/app/models/termino';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
 
})
export class ProductosComponent implements OnInit {

  constructor(private invSer:InventarioService,
              private dialog: MatDialog,) { }

  listData: MatTableDataSource<any>;
  
  productos:interproductos[]=[]
  
  displayedColumns:string[]=['titulo','caracteristicas','precio','marca','cantidad','categoria','imagenes','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  searchKey:string
  
  OrderData = (listData)=>{
    listData.titulo;
  }

  ngOnInit() {
    this.invSer.getProductos().subscribe(
      list=>{
        this.productos=list
        console.log(this.productos)
       let array=list.map(productoMT=>{
          return {
            "Action(SiteID=Spain|Country=ES|Currency=EUR|Version=745)":'add',
            CustomLabel:'',
            Category: productoMT.categoria,
            StoreCategory:'',
            Title: productoMT.titulo,
            ConditionID:'1000',
            'C:Marca': productoMT.marca,
            "C:MPN":'No aplicable',
            "Product:EAN":'No aplicable',
            PicURL: productoMT.imagenes.join(),
            precio:productoMT.precio,
            Description: productoMT.caracteristicas,
            Format: 'FixedPrice',
            StartPrice: productoMT.precio,
            Quantity: productoMT.cantidad,
            Localitation: '33865',
            ShippingProfileName : 'Fija:Correos: carta(Gratis),3 días laborables',
            ReturnProfileName: 'Devoluciones aceptadas,Comprador,14 días#0',
            PaymentProfileName:'PayPal:Pago inmediato',
            Relationship:'',
            RelationshipDetails:'',
            id: productoMT.id

          }
        })
        console.log(array)
        this.listData = new MatTableDataSource(array);
        this.listData.sort=this.sort;
        this.listData.paginator=this.paginator
        console.log(this.listData)
    })
  }
  onsearchClear(){
    this.searchKey="";
    this.applyfilter()
  }

  applyfilter(){
    this.listData.filter =this.searchKey.trim().toLowerCase()
  }

  onCreate(){
    this.invSer.inicializar()
    
    const DialogConfig = new MatDialogConfig();
    DialogConfig.disableClose = false,
    DialogConfig.autoFocus = false,
    this.dialog.open(ProductoComponent, DialogConfig)
  }

  onDelete(producto,i:number){

    this.productos.slice(i,1);
    this.invSer.borrarProducto(producto)
              .subscribe()
  }
  

  exportAsXLSX(){
    this.invSer.exportToExcel(this.listData.data,'my_export');
  }



}
