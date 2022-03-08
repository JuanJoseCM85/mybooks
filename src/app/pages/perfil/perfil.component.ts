import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ServicioUsuarioService } from 'src/app/shared/servicio-usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public miUsuario: Usuario;

  constructor(public servicioUsuario:ServicioUsuarioService) { 
    this.miUsuario = new Usuario(1,"Juanjo","Cabrera Maldonado","email@gmail.com","../../../assets/avatar.jpg","password");
  }

  ngOnInit(): void {
  }

  enviarDatos(inputNombre,inputApellidos,inputEmail,inputUrl){
    //opcion1 del reto
    //console.log(this.miUsuario.nombre);
    //opcion2
    if(inputNombre.value != "")
      this.miUsuario.nombre = inputNombre.value;
    if(inputApellidos.value != "")
      this.miUsuario.apellidos = inputApellidos.value;
    if(inputEmail != "")
      this.miUsuario.correo = inputEmail;
    console.log(inputUrl.value);
    
    if(inputUrl.value != "")
      this.miUsuario.url = inputUrl.value;



    
  }

}
