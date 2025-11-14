import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Administracion',
        items: [
          {
            label: 'Admin',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/admin'],
          },
          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
            routerLink: ['/admin/perfil'],
          },
        ],
      },
      {
        label: 'Inventario',
        items: [
          {
            label: 'Categoria',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/uikit/formlayout'],
          },
          {
            label: 'Producto',
            icon: 'pi pi-fw pi-check-square',
            routerLink: ['/uikit/input'],
          },
          {
            label: 'Pedido',
            items: [
              {
                label: 'Lista Pedidos',
                icon: 'pi pi-fw pi-bookmark',
                routerLink: ['/admin/pedido'],
                badge: 'New',
              },
              {
                label: 'Nuevo Pedidos',
                icon: 'pi pi-fw pi-exclamation-circle',
                routerLink: ['/admin/pedido/nuevo'],
                badge: 'New',
              },
              {
                label: 'Clientes',
                icon: 'pi pi-fw pi-box',
                routerLink: ['/admin/cliente'],
                target: '_blank',
              },
            ],
          },
          {
            label: 'Roles y Usuario',
            items: [
              {
                label: 'Roles',
                icon: 'pi pi-fw pi-desktop',
                url: ['https://www.primefaces.org/primeflex/'],
                target: '_blank',
              },
              {
                label: 'Roles',
                icon: 'pi pi-fw pi-list',
                routerLink: ['/uikit/list'],
              },
            ],
          },
        ],
      },
    ];
  }
}
