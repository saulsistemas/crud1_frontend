import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  title:string = "CREAR PRODUCTO";
  productoForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.productoForm = this.fb.group({
      name: ['',Validators.required],
      age: ['',Validators.required],
    });
   }

  ngOnInit(): void {
  }

  agregarProducto(){
    console.log(this.productoForm);
    
  }

}
