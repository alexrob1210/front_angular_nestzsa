import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';

interface Categoria {
  id?: number;
  nombre: string;
  detalle?: string;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit {
guardarCategoria() {
throw new Error('Method not implemented.');
}

  private categoriaService = inject(CategoriaService);

  categorias: Categoria[] = [];
  visible:boolean=false
dialog_visible: any;

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriaService.funListar().subscribe(
      (res: any) => {
        this.categorias = res;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  mostrarDialog(){
    this.visible=true

  }
  guadarCategoria(){
    
  }
}
