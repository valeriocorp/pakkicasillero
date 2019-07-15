import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagenes: string, tipo: string='usuario'): any {

    let url = URL_SERVICIOS + '/imagenes/';

    if (!imagenes) {
      return url + 'usuarios/xxx';
      
    }
    if (imagenes.indexOf('https')>=0) {
      return imagenes;
      
    }

    switch(tipo){
      
      case 'usuario':
       url += 'usuarios/' + imagenes;

      break;
      
      case 'paquete':
       url += 'paquete/' + imagenes;
      break;

      default:
      console.log('tipo de imagen no existe');
      url +='usuarios/xxx';
    }
    return url;
  }

}
