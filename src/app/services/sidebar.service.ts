import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu : any = [

    {titulo: 'Principal',
    icono: 'description',
     url: '/dashboard',
  },
  {titulo: 'Pre-alerta',
  icono: 'alarm_on',
  url: '/pre-alerta',
},
{titulo: 'Cotiza tu compra',
icono: 'assignment',
url: '/cotiza'
},
  
  ];

 menu2 : any[] = [];

  constructor(public usuarioService:UsuarioService) {
    
   }


   cargarMenu(){
    this.menu2 = this.usuarioService.menu;

   }
}
