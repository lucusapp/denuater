import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/service/inventario.service';
import { interproductos, interpedidos } from 'src/app/models/termino';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: []
})





export class PedidosComponent implements OnInit {
  
  pedidos: interpedidos[]=[]
  
  constructor(private inv:InventarioService) { 
  }
  ngOnInit() {

    
  }
  // excel(){
  //   var options = { 
  //     fieldSeparator: ';',
  //     quoteStrings: '"',
  //     decimalseparator: '.',
  //     showLabels: true, //si se proporciona creará una fila en el encabezado. 
  //     showTitle: true, //mostrar titulo. Si se proporciona mostrara las cabeceras.
  //     useBom: false,
  //     noDownload: false,
  //     headers: ["Action(SiteID=Spain|Country=ES|Currency=EUR|Version=745)", "ItemID", "CustomLabel","*Category"],
  //   };
  //   new Angular5Csv(this.productos,"fileName",options);   
  // }
}
//`Action(SiteID=Spain|Country=ES|Currency=EUR|Version=745);ItemID;CustomLabel;*Category;StoreCategory;*Title;*ConditionID;*C:Marca;C:MPN;Product:EAN;PicURL;*Description;*Format;*Duration;*StartPrice;*Quantity;*Location;ShippingProfileName;ReturnProfileName;PaymentProfileName;Relationship;RelationshipDetails