import { Injectable } from '@angular/core';

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

  menu2 : any = [

    {
    titulo:'mantenimiento',
    icono: 'build',
    submenu:[
      {titulo:'usuarios',
       url: '/usuarios'
      },
      {titulo:'paquetes',
      url: '/paquetes'
    },
      {titulo:'reglas',
      url: '/reglas'},
      {titulo:'envios',
      url: '/envios'},
      {titulo:'publicidad',
      url: '/publicidad'}
    ]
  },

  ];

  constructor() { }
}
