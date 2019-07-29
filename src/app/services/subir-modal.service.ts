import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubirModalService {

  public tipo:string;
  public id:string;

  public notificacion = new EventEmitter<any>();


  constructor() { }


  mostrarModal(tipo: string, id: string){

    this.id = id;
    this.tipo = tipo;


  }
}
