import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  private url:string = "http://localhost:3000/";
  public logueado: boolean = false;
  public usuario: Usuario;

  constructor(private http: HttpClient){
    this.logueado = false;
   }

   postUsuario(newUsuario:Usuario){
     return this.http.post(this.url + "registro", newUsuario);
   }

   postLogin(newUsuario:Usuario){
     return this.http.post(this.url + "login",newUsuario);
   }
  

  //  public async register(usuario:Usuario){
  //     let url:string = `http://localhost:3000/registro`;
  //     let param = {
  //       headers:{
  //         "Content-type": "application/json; charset=UTF-8"
  //       },
  //       body: JSON.stringify(usuario),
  //       method: "POST"
  //     }

  //     try {
  //       let data = await fetch(url, param);
  //       let result = await data.json();

  //       if(result.error == false){
  //         console.log("Usuario registrado correctamente con ID:");
  //         console.log(result.resultado);
          
  //         //Debemos mostrar un toast con el resutaldo.
          
  //       }else{
  //         console.log("Error al insertar el usuario");
  //         console.log(result.resultado);
          
  //         //mostrar un toast con el error
          
  //       }

  //     } catch (error) {
  //       console.log(error);
         
  //     }
  //  }

  //  public async login(usuario:Usuario):Promise<boolean>{
  //   let url:string = `http://localhost:3000/login`;
  //    let param = {
  //      headers: {"Content-type": "application/json; charset=UTF-8"},
  //      body: JSON.stringify(usuario),
  //      method: "POST"
  //    }

  //    try {
  //      let data = await fetch(url,param);
  //      let result = await data.json();

  //      if(result.error == false){
  //       console.log("Login Correcto");
  //       console.log(result);
        
  //       this.usuario = new Usuario(result.resultado.id_usuario,result.resultado.nombre,result.resultado.apellidos,result.resultado.correo,result.resultado.foto,null);
  //       this.logueado = true;

  //       console.log(this.usuario);
  //       return true;
        
  //      }else{
  //         console.log("Usuario o contraseña incorrectos.");
  //         return false;
          
  //      }
       
  //    } catch (error) {
  //      console.log(error);
       
  //    }
  //  }
}
