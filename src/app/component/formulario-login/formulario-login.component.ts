import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ServicioUsuarioService } from 'src/app/shared/servicio-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  public usuario:Usuario;
  constructor(private servicioUsuario:ServicioUsuarioService, private router:Router ) { }

  ngOnInit(): void {
  }

  public loginUsuario2(inputEmail,inputContrasena1){

    if(inputEmail != "" && inputContrasena1 !=""){
      let usuario2 = new Usuario(0,"","",inputEmail,"",inputContrasena1);
      this.servicioUsuario.postLogin(usuario2).subscribe((data:any)=>{
        this.servicioUsuario.usuario = data.resultado;
        console.log("Usuario logueado correctamente");
        console.log(data.resultado);
        console.log("Nombre: " +this.servicioUsuario.usuario.nombre );
        this.servicioUsuario.logueado = true;
        this.router.navigateByUrl('/app-libros');
        
      });
    }else{
      console.log("Por favor introduzca usuario y contraseña");
      
    }

  }
  // public loginUsuario(inputEmail,inputContrasena1){

  //   if(inputEmail.value != "" && inputContrasena1.value != ""){
  //     let usuario2 = new Usuario(0,"","",inputEmail.value,"",inputContrasena1.value);
  //     this.servicioUsuario.login(usuario2)
  //     .then((data)=>{
  //       if(data){
  //         console.log("Usuario Logueado correctamente");
  //         this.router.navigateByUrl('/app-libros');
  //       }
  //       else{
  //         console.log("Error en el login");
          
  //       }
  //     })
  //   }
  // }

}
