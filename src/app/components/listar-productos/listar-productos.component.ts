import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listarProductos:Array<Producto>=[];
  constructor(private _productoService:ProductoService ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.objetenerProductos();
    
    
  }

  objetenerProductos(){
    this._productoService.getProductos().subscribe((response:any) =>{
      //console.log(response);
      this.listarProductos = response.persons;
      console.log(this.listarProductos);
      
    },
    error=>{
      console.log(error);
    });
  }

  eliminarProducto(id:any){
    this._productoService.deleteProducto(id).subscribe((response)=>{
      this.toastr.error('Eliminado con exito', 'Producto Eliminado');
      this.objetenerProductos();
    },
    error=>{
      console.log(error);
    });
  }

}
