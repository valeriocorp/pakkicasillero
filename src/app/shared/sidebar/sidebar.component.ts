import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;
  
  constructor(public sidebar:SidebarService,
    public usuarioService:UsuarioService) { }

  ngOnInit() {

    this.usuario = this.usuarioService.usuario;
  }



}
