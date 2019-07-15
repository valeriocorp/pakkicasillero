import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario:Usuario;
  token: string;

  constructor(public http: HttpClient,
    public router:Router,
    public subirArchivo:SubirArchivoService) { 
    this.cargarStorage();
  }

  estaLogeado(){
   
    if (this.token === undefined) {
      return;
      
    }else{
      return (this.token.length > 5)? true : false;
    }
  }

  cargarStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.token = JSON.parse(localStorage.getItem('usuario'));
    }else{
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id:string, token:string, usuario: Usuario){
    localStorage.setItem('id',id);
        localStorage.setItem('token',token);
        localStorage.setItem('usuario',JSON.stringify(usuario));

        this.usuario = usuario;
        this.token = token;

  }


  logout(){
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }


  loginGoogle(token:string){
    let url = URL_SERVICIOS + '/login/google';

    return this.http.post(url, {token:token}).pipe(
      map((resp:any)=>{
        this.guardarStorage(resp.usuario._id,resp.token,resp.usuario);
        return true;
      })
    )
  }


  login(usuario:Usuario, recuerdame:boolean = false){

    if (recuerdame) {
      localStorage.setItem('email',usuario.email);
      
    }else{
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS +'/login';
    return this.http.post(url,usuario).pipe(
      map((resp:any)=>{
        this.guardarStorage(resp.id,resp.token,resp.usuario);
        return true;
      })
    );



  }


  crearUsuario(usuario:Usuario){

    let url = URL_SERVICIOS +'/usuario';

    return this.http.post(url, usuario).pipe(
      map((resp:any)=>{
        Swal.fire(
          'Usuario creado',
          usuario.email,
          'success'
        )
  
        return resp.usuario;
      })
    );
  }

  actualizarUsuario(usuario:Usuario){

    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url += '?token=' + this.token;

   return this.http.put(url,usuario).pipe(
     map((resp:any )=>{
       
      let usuarioDB: Usuario = resp.usuario;
      this.guardarStorage(usuarioDB._id,this.token, usuarioDB);
        Swal.fire(
          'Usuario Actualizado',
          usuario.email,
          'success'
        )

        return true;
     })
   )


  }



}
