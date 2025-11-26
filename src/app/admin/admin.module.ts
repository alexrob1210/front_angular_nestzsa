import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LayoutComponent } from './layout/layout.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { CategoriaService } from './inventario/services/categoria.service';
import { TableModule } from 'primeng/table';
import { InventarioModule } from './inventario/inventario.module';
import { ReactiveFormsModule } from '@angular/forms';
import{ToolbarModule} from 'primeng/toolbar';
import{RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ProductoService } from './inventario/services/producto.service';


@NgModule({
  declarations: [PerfilComponent, ClienteComponent, LayoutComponent],
  imports: [CommonModule, AdminRoutingModule, AppLayoutModule,TableModule,InventarioModule,ReactiveFormsModule,ToolbarModule,RatingModule,FormsModule],
  providers: [CategoriaService,ProductoService],
})
export class AdminModule {}
