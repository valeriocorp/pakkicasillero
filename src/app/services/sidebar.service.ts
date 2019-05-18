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
      
    ]
  }
  ];

  constructor() { }
}
