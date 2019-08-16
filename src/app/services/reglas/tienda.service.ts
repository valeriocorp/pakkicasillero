import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Tienda } from '../../models/tienda.model';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(public http: HttpClient) { }



  cargarTiendas(){
    let url = URL_SERVICIOS + '/tienda';
    return this.http.get(url).pipe(
      map((resp:any)=>{

        return resp.tiendas;
      })
    )
  }

  borarTiendas(id:string){
    let url = URL_SERVICIOS + '/tienda/' + id;

    return this.http.delete(url).pipe(
      map((resp:any)=>{
        Swal.fire('tienda Borrada', 'Eliminado correctamente','success')
      })
    )
  }

  crearTienda(nombre:string){

    let url = URL_SERVICIOS + '/tienda/';

    return this.http.post(url,{nombre}).pipe(
      map((resp:any)=>{
        resp
      })
    )

  }

  actualizarTienda(tienda:Tienda){
    let url = URL_SERVICIOS + '/tienda/' + tienda._id;

    return this.http.put(url,tienda).pipe(
      map((resp:any)=>{
        Swal.fire('tienda actualizado','correctamente','success')


      })
    )
  }
}



