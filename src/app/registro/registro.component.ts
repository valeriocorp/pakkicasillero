import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';


declare const gapi: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

  forma: FormGroup;
  auth2:any;

  constructor(public usuarioService:UsuarioService,
              public router: Router) { }


              sonIguales(campo1:string,campo2:string){

                

                return(group: FormGroup)=>{
                  let pass1= group.controls[campo1].value;
                  let pass2= group.controls[campo2].value;

                  if (pass1 === pass2) {
                    return null;
                    
                  }

                  return{
                    sonIguales:true
                  };
                }

              }

  ngOnInit() {
    this.googleInit();

    this.forma = new FormGroup({

      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null,Validators.required),
      telefono: new FormControl(null, Validators.required),
      email: new FormControl(null,[ Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false),


    }, {validators: this.sonIguales('password','password2') });

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

  googleInit(){
    gapi.load('auth2',()=>{
      this.auth2 = gapi.auth2.init({
        client_id: '732239912806-oua2pe3kobchn9g8dr5daedvlf8q74i2.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }


  attachSignin(element){
this.auth2.attachClickHandler(element, {}, (googleUser) =>{

  //let profile = googleUser.getBasicProfile();
  let token = googleUser.getAuthResponse().id_token;

  this.usuarioService.loginGoogle(token)
  .subscribe(resp=>{
    window.location.href = '#/dashboard'
  })
});
  }

}
