import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  nombre: string;
  precio: string;
  
  Datos = { 
          nombre:'',
          precio:'',

};

arrayElements=[
  {nombre:"camisa",precio:"105336",icon:"/assets/icon/camisa.jpg"},
  {nombre:"boxer", precio:"685422",icon:"/assets/icon/boxer.jpg"},
  {nombre:"pantalon",precio:"105336",icon:"/assets/icon/pantalon.jpg"},
  {nombre:"zapatos", precio:"685422",icon:"/assets/icon/zapatos.jpg"},
  ]
  
    
    ngOnInit() {
    }
  
  }
  