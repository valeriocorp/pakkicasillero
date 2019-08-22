import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';
import jwt_decode from 'jwt-decode'


@Injectable({
  providedIn: 'root'
})
export class VerificaTokenGuard implements CanActivate {


  constructor(public usuarioService:UsuarioService){
    
  }
  canActivate():  Promise<boolean>  | boolean  {

    console.log('token Guard');

    let token = this.usuarioService.token;
    let payload = jwt_decode(token);

    let expirado = this.expirado(payload.exp);

    if (expirado) {

      return false;
      
    }

    return this.verificaRenueva(payload.exp);
  }

  expirado(fechaExp:number){

    let ahora = new Date().getTime() / 1000;

    if (fechaExp < ahora) {

      return true;
      
    }else{
      return false;
    }



  }


  verificaRenueva( fechaExp: number):Promise<boolean>{

    return new Promise ((resolve, reject)=>{

      let tokenExp = new Date(fechaExp * 1000);
      let ahora = new Date();

      ahora.setTime(ahora.getTime() + (2 * 60 * 60 * 1000));

    //  console.log(tokenExp);
    //  console.log(ahora);

    if (tokenExp.getTime() > ahora.getTime()) {

      resolve(true);
      
    }else{
      this.usuarioService.renuevaToken()
        .subscribe(()=>{
          resolve(true);
        })
    }

      resolve(true);

    })

  }
  
}
