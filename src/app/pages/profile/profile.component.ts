import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { SubirArchivoService } from '../../services/subir-archivo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  imagenSubir: File;

  constructor(
    public usuarioService:UsuarioService,
    public subirArchivoService:SubirArchivoService
  ) {
    this.usuario = this.usuarioService.usuario;
   }

  ngOnInit() {
  }


  guardar(usuario:Usuario){

    this.usuario.nombre = usuario.nombre;
    this.usuario.apellido = usuario.apellido;
    if (!this.usuario.google) {
      this.usuario.email = usuario.email;

      
    }
   
    this.usuario.direccion = usuario.direccion;
    this.usuario.telefono = usuario.telefono;
    this.usuario.tipoDocumento = usuario.tipoDocumento;
    this.usuario.documento = usuario.documento;
    this.usuario.genero = usuario.genero;
    this.usuario.intereses = usuario.intereses;
    this.usuario.fechaNacimiento = usuario.fechaNacimiento;


    this.usuarioService.actualizarUsuario(this.usuario)
            .subscribe(resp =>{
              
            });



  }

  seleccionImagen(archivo: File){

    if (!archivo) {

      this.imagenSubir = null;
      return;
      
    }

    if (archivo.type.indexOf('image') < 0 ) {
      Swal.fire('Solo imagnes por favor','El archivo seleccionado no es una iagen', 'error' );
      this.imagenSubir = null;
      return;
    }

   this.imagenSubir = archivo;
  }

  cambiarImagen(){

    this.subirArchivoService.subirArchivo(this.imagenSubir,'usuarios',this.usuario._id)
              .subscribe((resp:any)=>{
                console.log(resp);
                this.usuario.img = resp.usuario.img;
                Swal.fire('Imagen Actualizada', this.usuario.nombre, 'success');
              })
    

  }
}



