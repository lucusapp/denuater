import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {EbayComponent} from './components/ebay/ebay.component';
import { PedidosComponent } from './components/ebay/inventario/pedidos/pedidos.component';
import { ProductosComponent } from './components/ebay/inventario/productos/productos.component';
import { ProductoComponent } from './components/ebay/inventario/productos/producto.component';



const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'ebay', component: EbayComponent,
    children:[
      {path :'pedidos', component: PedidosComponent},
      {path: 'inventario',component : ProductosComponent},
      {path : '**', component: ProductosComponent}
    ]
  },
  {path : 'producto/:id', component: ProductoComponent},
  {path : '', component: HomeComponent},
  {path : '**', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
