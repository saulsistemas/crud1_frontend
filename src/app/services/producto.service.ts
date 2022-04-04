import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string="http://localhost:3700/api/";
  constructor(private http:HttpClient) { }

  getProductos():Observable<any>{
    return this.http.get(this.url+'listar');
  }

  deleteProducto(id:any):Observable<any>{
    return this.http.delete(this.url+'eliminar/'+id)
  }

  guardarProducto(producto:Producto):Observable<any>{
    return this.http.post(this.url+'guardar',producto);
  }

  obtenerId(id:any):Observable<any>{
    return this.http.get(this.url+'buscar/'+id)
  }

  editarProducto(id:any,producto:Producto):Observable<any>{
    return this.http.put(this.url+'actualizar/'+id,producto);
  }
}


