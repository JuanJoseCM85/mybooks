import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicioUsuarioService } from './servicio-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioLibrosService {

  private url:string = "http://localhost:3000/";
  private mislibros: Libro[];
  public miLibro:Libro;
  public milibro2: Libro;
  public miLibro3: Libro;
  public miLibro4: Libro;
  public miLibro5: Libro;
  public miLibro6: Libro;
  constructor(private http: HttpClient, private servicioUsaurio: ServicioUsuarioService) { 

    this.miLibro = new Libro(1,1,"Se lo que estás pensando","Terror","John Verdon",20.40,"../../../assets/libros/seloqueestaspensando.jpg");
    this.milibro2 = new Libro(2,2,"Deja en paz al diablo","Terror","John Verdon",25.50,"../../../assets/libros/dejaenpazaldiablo.jpg");
    this.miLibro3 = new Libro (3,3,"El hombre de la tiza","Thriller","C.J. Tudor",9.45,"../../../assets/libros/elhombredelatiza.jpg");
    this.miLibro4 = new Libro(4,4,"Un invitado inesperado","Thriller","Shari Lapena",10.40,"../../../assets/libros/uninventoinesperado.jpg");
    this.miLibro5 = new Libro(5,5,"Te veré bajo el hielo","Thriller","Robert Bryndza",9.45,"../../../assets/libros/teverebajoelhielo.jpg");
    this.miLibro6 = new Libro(6,6,"Aguas Oscuras","Terror","Robert Bryndza",9.45,"../../../assets/libros/aguasoscuras.jpg");

    this.mislibros = [this.miLibro,this.milibro2,this.miLibro3,this.miLibro4,this.miLibro5,this.miLibro6];
  }

  public getAll():Observable<object>{
    //return this.mislibros;
    return this.http.get(this.url + "libros?id_usuario=" + this.servicioUsaurio.usuario.id_usuario);
  }

  public getOne(id_libro:number):Observable<object>{
    return this.http.get(this.url +"libros?id_libro="+id_libro+"&id_usuario="+this.servicioUsaurio.usuario.id_usuario);
  }

  // public getOne(id_libro:number):Libro{
  //   let result: Libro = this.mislibros.find((libro)=>{
  //     return libro.id_libro == id_libro
  //   });

  //   return (result) ? result : null;
    

   
  // }

  public add(libro:Libro):void{
    this.mislibros.push(libro);
  }

  public add2(libro:Libro):Observable<object>{
    return this.http.post(this.url+"libros",libro);
  }

  // public edit(libro:Libro):boolean{
  //   let editado:boolean = false;
  //   let posicion:number = this.mislibros.findIndex((libroIt)=>{
  //     return libroIt.id_libro == libro.id_libro 
  //   });

  //   if (posicion != -1){
  //     this.mislibros[posicion] = libro;
  //     editado = true;
  //   }
  
  //   return editado;
  // }

  public edit(libro:Libro):Observable<object>{
    return this.http.put(this.url+"libros",libro);
  }

  public delete(id_libro:number):Observable<object>{
    const opciones = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      body: {id_libro: id_libro}
    }
    return this.http.delete(this.url+"libros",opciones);
  }

  // public delete(id_libro:number):boolean{
  //   let encontrado:boolean = false;
  //   let posicion:number = this.mislibros.findIndex((libroIt)=>{
  //     return libroIt.id_libro == id_libro;
  //   })


  //   if (posicion != -1){
  //     this.mislibros.splice(posicion,1);
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

}
