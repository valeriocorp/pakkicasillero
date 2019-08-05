import { Component, OnInit } from '@angular/core';
import { Paquete } from '../../models/paquete.model';
import { PaqueteService } from '../../services/paquete/paquete.service';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  paquetes: Paquete [] = [];

  constructor(public paqueteService:PaqueteService) { }

  ngOnInit() {

    this.cargarPaquetes();
  }

  cargarPaquetes(){

    this.paqueteService.cargarPaquetes()
    .subscribe(paquetes => {
      this.paquetes = paquetes
    });
  }


  borrarPaquete(paquete:Paquete){


    this.paqueteService.borrarPaquete(paquete._id)
    .subscribe(()=> this.cargarPaquetes());

  }

  guardarPaquete(paquete:Paquete){

    this.paqueteService.actualizarPaquete(paquete)
    .subscribe();

  }

  buscarPaquete(termino:string){

    if(termino.length <=0){
      this.cargarPaquetes();
      return; 
    }



    this.paqueteService.buscarPaquete(termino)
    .subscribe(paquetes => this.paquetes = paquetes);

  }

}
