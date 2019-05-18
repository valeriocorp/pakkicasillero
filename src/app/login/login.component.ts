import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';


declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  email:string;

  recuerdame: boolean = false;

  auth2:any;

  constructor(public router: Router, public usuarioServices:UsuarioService) { }

  ngOnInit() {

   this.googleInit();

  this.email = localStorage.getItem('email') || '';

  if (this.email.length >1) {
    this.recuerdame = true;
    
  }
   
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

  this.usuarioServices.loginGoogle(token)
  .subscribe(resp=>{
    window.location.href = '#/dashboard'
  })
});
  }


  ingresar(forma: NgForm){
    if (forma.invalid) {
      return;
      
    }
    let usuario = new Usuario(null,null,null, forma.value.email,forma.value.password);

    this.usuarioServices.login(usuario, forma.value.recuerdame)
    .subscribe(correcto =>{
      this.router.navigate(['/dashboard']);
    })
    
  }

}
