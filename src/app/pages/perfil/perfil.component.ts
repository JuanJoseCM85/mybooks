import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public miUsuario: Usuario;

  constructor() { 
    this.miUsuario = new Usuario(1,"Juanjo","Cabrera Maldonado","email@gmail.com","../../../assets/imagenperfil.jpg","password");
  }

  ngOnInit(): void {
  }

  enviarDatos(inputNombre,inputApellidos,inputEmail){
    //opcion1 del reto
    //console.log(this.miUsuario.nombre);
    //opcion2
    this.miUsuario.nombre = inputNombre.value;
    this.miUsuario.apellidos = inputApellidos.value;
    this.miUsuario.correo = inputEmail;


    
  }

}
