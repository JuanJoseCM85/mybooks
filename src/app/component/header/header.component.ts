import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from 'src/app/shared/servicio-usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public servicioUsuario:ServicioUsuarioService) { }

  ngOnInit(): void {
  }

}
