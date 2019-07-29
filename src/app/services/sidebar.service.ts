import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu : any = [

    {titulo: 'Principal',
    icono: 'description',
    submenu: [
      {titulo:'Dashboard', url: '/dashboard'},
      {titulo:'prealerta', url: '/dashboard'},
      {titulo:'calcula tu compra', url: '/dashboard'},
  
      
    ]
  },
  {titulo: 'Pre-alerta',
  icono: 'alarm_on',
  submenu: [
    {titulo:'Dashboard', url: '/dashboard'},
    {titulo:'prealerta', url: '/dashboard'},
    {titulo:'calcula tu compra', url: '/dashboard'},

    
  ]
},
{titulo: 'Cotiza tu compra',
icono: 'assignment',
submenu: [
  {titulo:'Dashboard', url: '/dashboard'},
  {titulo:'prealerta', url: '/dashboard'},
  {titulo:'calcula tu compra', url: '/dashboard'},

  
]
},
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
  }
  ];

  constructor() { }
}
