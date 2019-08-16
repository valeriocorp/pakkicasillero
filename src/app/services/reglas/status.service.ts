import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Status } from '../../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(public http:HttpClient) { }

  
  cargarStatus(){
    let url = URL_SERVICIOS + '/estado';
    return this.http.get(url).pipe(
      map((resp:any)=>{

        return resp.estatus;
      })
    )
  }


  borarStatus(id:string){
    let url = URL_SERVICIOS + '/estado/' + id;

    return this.http.delete(url).pipe(
      map((resp:any)=>{
        Swal.fire('estado Borrado', 'Eliminado correctamente','success')
      })
    )
  }

  crearStatus(nombre:string){

    let url = URL_SERVICIOS + '/estado/';

    return this.http.post(url,{nombre}).pipe(
      map((resp:any)=>{
        resp
      })
    )

  }

  actualizarStatus(estado:Status){
    let url = URL_SERVICIOS + '/estado/' + estado._id;

    return this.http.put(url,estado).pipe(
      map((resp:any)=>{
        Swal.fire('estado actualizado','correctamente','success')


      })
    )
  }
}
