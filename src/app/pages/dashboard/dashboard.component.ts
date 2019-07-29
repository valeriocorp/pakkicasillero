import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  usuario: Usuario;

  constructor(public usuarioService:UsuarioService) { }

  ngOnInit() {

    this.usuario = this.usuarioService.usuario;
  }

}


