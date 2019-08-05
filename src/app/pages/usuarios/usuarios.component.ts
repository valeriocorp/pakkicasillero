import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import Swal from 'sweetalert2';
import { SubirArchivoService } from 'src/app/services/subir-archivo.service';
import { SubirModalService } from '../../services/subir-modal.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  desde: number = 0;

  totalRegistros: number = 0;
  cargando: boolean = true;

  imagenSubir: File;

  constructor(public usuarioService:UsuarioService,
    public subirArchivoService:SubirArchivoService,
    public modal:SubirModalService) { }

  ngOnInit() {
    this.cargarUsuarios();

    this.modal.notificacion
            .subscribe((resp:any)=>{
              this.cargarUsuarios();
            })
  }

  mostrarModal(id:string){

    this.modal.mostrarModal('usuarios',id);

  }


  cargarUsuarios(){

    this.cargando = true;

    this.usuarioService.cargarUsuarios(this.desde)
    .subscribe((resp:any) => {
      this.totalRegistros = resp.total;
      this.usuarios = resp.usuarios;
      this.cargando = false;
    });

  }


  cambiarDesde(valor:number){

    let desde = this.desde + valor;
    console.log(desde);

    if (desde >= this.totalRegistros) {

      return;
      
    }
    if (desde < 0) {

      return;
      
    }

      this.desde += valor;
      this.cargarUsuarios();


  }

  buscarUsuario(termino: string){

   if (termino.length <= 0) {
     this.cargarUsuarios();
     return;
     
   }

   this.cargando = true;


    this.usuarioService.buscarUsuarios(termino)
    .subscribe((usuarios: Usuario[])=>{
      this.usuarios = usuarios;
      this.cargando = false;
    })


  }

  borrarUsuario(usuario:Usuario){

    if (usuario._id === this.usuarioService.usuario._id) {

      Swal.fire('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');
      return;
      
    }

    Swal.fire({
      title: 'Estas seguro?',
      text: "No vas a poder revertir esto!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!',
      cancelButtonText: 'No, Dejalo'
    }).then((borrar) => {
      if (borrar.value) {
          console.log(borrar);
        this.usuarioService.borrarUsuarios(usuario._id)
          .subscribe((resp:any) =>{

            this.cargarUsuarios();
            Swal.fire(
              'Borrado!',
              'El usuario fue borrado.',
              'success'
            )

          })
        
      }
    })

  }

  guardarUsuario(usuario:Usuario){

    this.usuarioService.actualizarUsuario(usuario)
      .subscribe();

  }

  cambiarImagen(){

    this.subirArchivoService.subirArchivo(this.imagenSubir,this.modal.tipo,this.modal.id)
      .subscribe((resp:any)=>{
        console.log(resp);
        this.modal.notificacion.emit(resp);
      })

  }

}

