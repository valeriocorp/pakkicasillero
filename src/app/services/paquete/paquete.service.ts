import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import Swal from 'sweetalert2';
import { Paquete } from '../../models/paquete.model';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  totalPaquetes: number = 0;

  constructor(public http: HttpClient,
    public usuarioService:UsuarioService) { }




  cargarPaquetes(){
  
    let url = URL_SERVICIOS + '/paquete';
    return this.http.get(url).pipe(
      map((resp:any) => {


        this.totalPaquetes = resp.total;
        
        return resp.paquetes;
      }))
  }

  obtenerPaquete(id: string){

    let url = URL_SERVICIOS +'/paquete/' + id;
    return this.http.get(url).pipe(
      map ((resp:any) =>{
        
        resp.paquete
      }))
  }

  borrarPaquete(id:string){

    let url = URL_SERVICIOS + '/paquete/' + id;
    url += '?token=' + this.usuarioService.token;


    return this.http.delete(url).pipe(
      map((resp:any)=>{

        Swal.fire('Paquete Borrado', 'Eliminado correctamente','success')
      })
    )

  }


  crearPaquete(nombre:string){

    let url = URL_SERVICIOS + '/paquete/';
    url += '?token=' + this.usuarioService.token;

    return this.http.post(url,{nombre})
      .pipe(
        map((resp:any)=>{

          resp.paquete
        })
      )

  }

  buscarPaquete(termino:string){

    let url = URL_SERVICIOS + '/busqueda/coleccion/paquete/' + termino;

    return this.http.get(url).pipe(
      map((resp:any) => resp.paquete)
    )


  }

  actualizarPaquete(paquete: Paquete){


    let url = URL_SERVICIOS + '/paquete/' + paquete._id;
    url += '?token=' + this.usuarioService.token;


    return this.http.put(url,paquete).pipe(
      map((resp:any)=>{
        Swal.fire('Paquete actualizado','correctamente','success')
        
        return resp.paquete
      })
    )

  }
}



