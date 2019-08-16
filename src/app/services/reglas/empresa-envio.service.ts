import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { EmpresaEnvio } from '../../models/empresaEmvio.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaEnvioService {

  constructor(public http:HttpClient) { }



  
  cargarEmpresaEnvios(){
    let url = URL_SERVICIOS + '/empresaEnvio';
    return this.http.get(url).pipe(
      map((resp:any)=>{

        return resp.empresaEnvios;
      })
    )
  }

  borarEmpresaEnvios(id:string){
    let url = URL_SERVICIOS + '/empresaEnvio/' + id;

    return this.http.delete(url).pipe(
      map((resp:any)=>{
        Swal.fire('empresaEnvio Borrada', 'Eliminado correctamente','success')
      })
    )
  }

  crearEmpresaEnvios(nombre:string){

    let url = URL_SERVICIOS + '/empresaEnvio/';

    return this.http.post(url,{nombre}).pipe(
      map((resp:any)=>{
        resp
      })
    )

  }

  actualizarEmpresaEnvios(empresaEnvio:EmpresaEnvio){
    let url = URL_SERVICIOS + '/empresaEnvio/' + empresaEnvio._id;

    return this.http.put(url,empresaEnvio).pipe(
      map((resp:any)=>{
        Swal.fire('empresaEnvio actualizado','correctamente','success')


      })
    )
  }
}
