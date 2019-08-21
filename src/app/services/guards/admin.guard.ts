import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    public usuarioService:UsuarioService,
    public router:Router
  ){}
  canActivate(){
    if (this.usuarioService.usuario.role === 'ADMIN_ROLE') {

      return true;
      
    }else{
      console.log('bloqueado por el ADMIN GUARD');
      this.router.navigate(['/dashboard']);
      return false;
    }
    
  }
  
}
