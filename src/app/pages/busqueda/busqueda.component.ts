import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Paquete } from '../../models/paquete.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  paquete: Paquete[] = [];

  constructor(public activatedRouutes:ActivatedRoute,
    public http:HttpClient) {


    activatedRouutes.params
    .subscribe(params =>{

      let termino = params['termino'];
      console.log(termino);
      this.buscar(termino);

    })
   }

  ngOnInit() {
  }


  buscar(termino: string){

    let url = URL_SERVICIOS + '/busqueda/todo/' + termino;

    this.http.get(url)
    .subscribe((resp:any) =>{

      console.log(resp);
      this.paquete = resp.paquetes
    })


  }

}
