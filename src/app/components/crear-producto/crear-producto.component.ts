import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  title:string = "CREAR PRODUCTO";
  productoForm:FormGroup;
  //fb para validar
  constructor(private fb:FormBuilder, private router:Router,private toastr: ToastrService, private _productoService:ProductoService) {
    this.productoForm = this.fb.group({
      name: ['',Validators.required],
      age: ['',Validators.required],
    });
   }

  ngOnInit(): void {
  }

  agregarProducto(){
    const PRODUCTO: Producto = {
      name:this.productoForm.value.name,
      age:this.productoForm.value.age,
      image:'',
    }
    this._productoService.guardarProducto(PRODUCTO).subscribe(response=>{
      this.toastr.success('Producto registrado','muy bien registrado');
      this.router.navigate(['/']);
      console.log(response);
    },
    error=>{
      console.log(error);
    });
    
  }

}
