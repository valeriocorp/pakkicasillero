import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { TiendaService } from '../../services/reglas/tienda.service';
import { Servicio } from '../../models/servicio.model';
import { EmpresaEnvio } from '../../models/empresaEmvio.model';
import { Tienda } from '../../models/tienda.model';
import { ServicioService } from '../../services/reglas/servicio.service';
import { EmpresaEnvioService } from '../../services/reglas/empresa-envio.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Paquete } from '../../models/paquete.model';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { SubirArchivoService } from '../../services/subir-archivo.service';
import { PaqueteService } from '../../services/paquete/paquete.service';

@Component({
  selector: 'app-prealertas',
  templateUrl: './prealertas.component.html',
  styleUrls: ['./prealerta.component.css']
})
export class PrealertasComponent implements OnInit {

  facturaSubir: File;
  forma: FormGroup;
  servicios: Servicio[] = [];
  empresaEmvios: EmpresaEnvio[] = [];
  tiendas:Tienda[]= [];
  usuario: Usuario;
  paquete: Paquete;

  constructor(public tiendaService:TiendaService,
                public empresaEnvioService:EmpresaEnvioService,
                public servicioService:ServicioService,
                public usuarioService:UsuarioService,
                public subirArchivoService:SubirArchivoService,
                public paqueteService:PaqueteService) { 
                  this.usuario = this.usuarioService.usuario;
                }

  ngOnInit() {
    this.servicioService.cargarServicios()
    .subscribe(servicios => this.servicios = servicios);

    this.empresaEnvioService.cargarEmpresaEnvios()
    .subscribe(empresaEnvios => this.empresaEmvios = empresaEnvios);

    this.tiendaService.cargarTiendas()
    .subscribe(tiendas => this.tiendas = tiendas);

    

    this.forma = new FormGroup({

      tienda: new FormControl("",Validators.required),
      tracking: new FormControl(null,Validators.required),
      empresa: new FormControl("",Validators.required),
      tipoProducto: new FormControl(null,Validators.required),
      cantidad: new FormControl(null,Validators.required),
      nota: new FormControl(null)



    });
    
  }
  

  guardarPreAlerta(){
     
    if (this.forma.invalid) {
      return;
      
    }


    console.log('Aqui esta el valor de la forma' + this.forma)
   let paquete = new Paquete(
      
          '123456',
          'Compra online',
          this.forma.value.tienda,
          '123456789',
          this.forma.value.cantidad,
          null,
          this.forma.value.empresa,
          this.forma.value.tracking,
          false,
          this.forma.value.tipoProducto,
          "",
          "",
          "",
          "",
          this.forma.value.nota,
          'PRE-ALERTA',
          ""



    );
    
    this.paqueteService.crearPaquete(paquete)
    .subscribe((paquete:any)=>{
     
      console.log(paquete);
    })

   
  }

  seleccionFactura(archivo:File){

    if (!archivo) {

      this.facturaSubir = null;

      return;

      
    }

    this.facturaSubir = archivo;



    console.log(archivo);


  }

  subirFactura(){


    
  }

  

}

