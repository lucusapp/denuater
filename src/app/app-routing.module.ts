import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {EbayComponent} from './components/ebay/ebay.component';
import { PedidosComponent } from './components/ebay/inventario/pedidos.component';
import { InventarioComponent } from './components/ebay/inventario/inventario.component';
import { ProductoComponent } from './components/producto/producto.component';



const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'ebay', component: EbayComponent,
    children:[
      {path :'pedidos', component: PedidosComponent},
      {path: 'inventario',component : InventarioComponent},
      {path : '**', component: InventarioComponent}
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
