import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Servicio } from '../../models/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(public http: HttpClient) { }


  
  cargarServicios(){
    let url = URL_SERVICIOS + '/servicio';
    return this.http.get(url).pipe(
      map((resp:any)=>{

        return resp.servicios;
      })
    )
  }

  borarServicios(id:string){
    let url = URL_SERVICIOS + '/servicio/' + id;

    return this.http.delete(url).pipe(
      map((resp:any)=>{
        Swal.fire('servicio Borrado', 'Eliminado correctamente','success')
      })
    )
  }

  crearServicio(nombre:string){

    let url = URL_SERVICIOS + '/servicio/';

    return this.http.post(url,{nombre}).pipe(
      map((resp:any)=>{
        resp
      })
    )

  }

  actualizarServicio(servicio:Servicio){
    let url = URL_SERVICIOS + '/servicio/' + servicio._id;

    return this.http.put(url,servicio).pipe(
      map((resp:any)=>{
        Swal.fire('servicio actualizado','correctamente','success')


      })
    )
  }
}
