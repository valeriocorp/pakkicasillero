import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

  forma: FormGroup;

  constructor(public usuarioService:UsuarioService,
              public router: Router) { }

  ngOnInit() {

    this.forma = new FormGroup({

      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null,Validators.required),
      telefono: new FormControl(null, Validators.required),
      email: new FormControl(null,[ Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      condiciones: new FormControl(false),


    });

  }


  registroUsuario(){
    if(this.forma.invalid){
      return;
    }
    if (!this.forma.value.condiciones) {
      Swal.fire(
        'Importante',
        'Debe aceptar las condiciones',
        'warning'
      )

      
      return;
      
    }
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.apellido,
      this.forma.value.telefono,
      this.forma.value.email,
      this.forma.value.password,
    );

    this.usuarioService.crearUsuario(usuario)
      .subscribe(resp =>{
        this.router.navigate(['/login']);
      });
  }

}
