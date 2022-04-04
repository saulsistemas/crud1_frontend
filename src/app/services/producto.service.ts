import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}


