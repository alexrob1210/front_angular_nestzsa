import { Component, inject } from '@angular/core';
import { Table } from 'primeng/table';
import { ProductoService } from '../../services/producto.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  

  private productoservice=inject(ProductoService)
  categoria:any[]=[
            { name: 'Ropa Dama', code: 'NY' },
            { name: 'Ropa Caballero', code: 'RM' },
            { name: 'Herrmientas', code: 'he' },
            { name: 'Tecnologia', code: 'tec' },
            { name: 'Hogar', code: 'Hgr' }
        ];
  products:any[]=[
    {id:1,nombre:"teclado",precio:345,categoria_id: 5, stock:12, estado:"Completo"},
    {id:1,nombre:"teclado",precio:345,categoria_id: 5, stock:12, estado:"Completo"},
    {id:1,nombre:"teclado",precio:345,categoria_id: 5, stock:12, estado:"Completo"},
    {id:1,nombre:"teclado",precio:345,categoria_id: 5, stock:12, estado:"Completo"},
    {id:1,nombre:"teclado",precio:345,categoria_id: 5, stock:12, estado:"Completo"},
    {id:1,nombre:"teclado",precio:345,categoria_id: 5, stock:12, estado:"Completo"},
    {id:1,nombre:"teclado",precio:345,categoria_id: 5, stock:12, estado:"Completo"},
    {id:1,nombre:"teclado",precio:345,categoria_id: 5, stock:12, estado:"Completo"},
    {id:1,nombre:"teclado",precio:345,categoria_id: 5, stock:12, estado:"Completo"},
    {id:1,nombre:"teclado",precio:345,categoria_id: 5, stock:12, estado:"Completo"},
    {id:1,nombre:"teclado",precio:345,categoria_id: 5, stock:12, estado:"Completo"},
  ];
  cols:any[]=[];

  constructor(){
    this.productoservice.funListar().subscribe(
      (res:any)=>{
        this.products=res.data
      }
    )
  }

  openNew(){
    
  }
   
  editProduct(prod:any){

  }

  deleteProduct(prod:any){

  }

}
