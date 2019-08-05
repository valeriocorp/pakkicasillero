import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/subir-archivo.service';
import Swal from 'sweetalert2';
import { SubirModalService } from '../../services/subir-modal.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {

  
  imagenSubir: File;

  constructor(
    public subirArchivoService:SubirArchivoService,
    public subirModalService:SubirModalService
  ) {
    console.log('modal listo');
   }

  ngOnInit() {
  }

  cerrarModal(){

    this.imagenSubir=null;
    this.subirModalService.ocultarModal();
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

    this.subirArchivoService.subirArchivo(this.imagenSubir,this.subirModalService.tipo,this.subirModalService.id)
    .subscribe((resp:any)=>{
      
      this.subirModalService.notificacion.emit(resp);
      this.cerrarModal();
    })

  }

}
