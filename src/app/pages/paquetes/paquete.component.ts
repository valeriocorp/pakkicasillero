import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tienda } from 'src/app/models/tienda.model';
import { EmpresaEnvio } from 'src/app/models/empresaEmvio.model';
import { Servicio } from 'src/app/models/servicio.model';
import { Status } from '../../models/status.model';
import { ServicioService } from '../../services/reglas/servicio.service';
import { EmpresaEnvioService } from '../../services/reglas/empresa-envio.service';
import { TiendaService } from '../../services/reglas/tienda.service';
import { StatusService } from '../../services/reglas/status.service';
import { Paquete } from '../../models/paquete.model';
import { PaqueteService } from '../../services/paquete/paquete.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styleUrls: ['./paquete.component.css']
})
export class PaqueteComponent implements OnInit {

  servicios: Servicio[] = [];
  empresaEmvios: EmpresaEnvio[] = [];
  tiendas:Tienda[]= [];
  status: Status[]=[];
  usuario:Usuario = new Usuario('','','','','');
 paquete: Paquete = new Paquete('','','','','',null,'','',false,'','','','','','','','');

  constructor(public servicioService:ServicioService,
              public empresaEnvioService:EmpresaEnvioService,
              public tiendaService:TiendaService,
              public statusService:StatusService,
              public paqueteService:PaqueteService,
              public router:Router,
              public activatedRoute:ActivatedRoute) {

                activatedRoute.params.subscribe(params =>{
                  let id = params['id'];

                  if (id !== 'nuevo' ) {

                    this.obtenerPaquete(id);
                    
                  }
                })
               }

  ngOnInit() {
    this.servicioService.cargarServicios()
    .subscribe(servicios => this.servicios = servicios);

    this.empresaEnvioService.cargarEmpresaEnvios()
    .subscribe(empresaEnvios => this.empresaEmvios = empresaEnvios);

    this.tiendaService.cargarTiendas()
    .subscribe(tiendas => this.tiendas = tiendas);

    this.statusService.cargarStatus()
    .subscribe(status => this.status = status);

  }


  guardarPaquete(f:NgForm){


    if (f.invalid) {
      return;
      
    }

    this.paqueteService.crearPaquete(this.paquete)
      .subscribe((paquete:any) =>{

        this.router.navigate(['paquete',paquete._id]);
        console.log(paquete);
      })


  }


  obtenerPaquete(id:string){

    this.paqueteService.obtenerPaquete(id)
    .subscribe(paquete => {
      
      console.log(paquete);
      this.paquete = paquete;
      
    });

  }

}
