import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  id:string | null;
  //fb para validar
  constructor(private fb:FormBuilder, private router:Router,private toastr: ToastrService, private _productoService:ProductoService,
    private aRouter:ActivatedRoute) {//OBTENER EL ID
    this.productoForm = this.fb.group({
      name: ['',Validators.required],
      age: ['',Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto(){
    const PRODUCTO: Producto = {
      name:this.productoForm.value.name,
      age:this.productoForm.value.age,
      image:'',
    }
    if (this.id !==null) {
      //EDITAMOS
      this._productoService.editarProducto(this.id,PRODUCTO).subscribe(response=>{
        this.toastr.info('se actualizo correctamente producto','Producto actualizado !');
        this.router.navigate(['/']);
        console.log(response);
      },
      error=>{
        console.log(error);
      });
    }else{
      //AGREGAMOS
      this._productoService.guardarProducto(PRODUCTO).subscribe(response=>{
        this.toastr.success('se guardo correctamente producto','Producto Registrado !');
        this.router.navigate(['/']);
        console.log(response);
      },
      error=>{
        console.log(error);
      });
    }
    
  }
  esEditar() {
    if (this.id !==null) {
      this.title = "EDITAR PRODUCTO";
      this._productoService.obtenerId(this.id).subscribe(response=>{
        this.productoForm.setValue({
          name: response.person.name,
          age: response.person.age,
        })
      });
    }
  }

}
