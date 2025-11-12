import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoPedidoComponent } from './components/nuevo-pedido/nuevo-pedido.component';
import { ListaPedidoComponent } from './components/lista-pedido/lista-pedido.component';



@NgModule({
  declarations: [
    NuevoPedidoComponent,
    ListaPedidoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidoModule { }
