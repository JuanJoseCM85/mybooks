import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from 'src/app/models/libro';
import { Usuario } from 'src/app/models/usuario';
import { ServicioLibrosService } from 'src/app/shared/servicio-libros.service';
import { ServicioUsuarioService } from 'src/app/shared/servicio-usuario.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  // public miLibro:Libro;
  // public milibro2: Libro;
  // public miLibro3: Libro;
  // public miLibro4: Libro;
  // public miLibro5: Libro;
  // public miLibro6: Libro;
  public arrayLibros: Libro[] = [];

  constructor( public miServicioLibros:ServicioLibrosService, private miServicioUsuario:ServicioUsuarioService) {

    // this.miLibro = new Libro(1,1,"Se lo que estás pensando","Terror","John Verdon",20.40,"../../../assets/libros/seloqueestaspensando.jpg");
    // this.milibro2 = new Libro(2,2,"Deja en paz al diablo","Terror","John Verdon",25.50,"../../../assets/libros/dejaenpazaldiablo.jpg");
    // this.miLibro3 = new Libro (3,3,"El hombre de la tiza","Thriller","C.J. Tudor",9.45,"../../../assets/libros/elhombredelatiza.jpg");
    // this.miLibro4 = new Libro(4,4,"Un invitado inesperado","Thriller","Shari Lapena",10.40,"../../../assets/libros/uninventoinesperado.jpg");
    // this.miLibro5 = new Libro(5,5,"Te veré bajo el hielo","Thriller","Robert Bryndza",9.45,"../../../assets/libros/teverebajoelhielo.jpg");
    // this.miLibro6 = new Libro(6,6,"Aguas Oscuras","Terror","Robert Bryndza",9.45,"../../../assets/libros/aguasoscuras.jpg");

    this.leerlibrosUsuario();

   }

  ngOnInit(): void {
  }

  leerlibrosUsuario():void{
    this.miServicioLibros.getAll().subscribe((data:any)=>{
      this.arrayLibros = data.resultado;
      console.log("Sacamos los libros");
      console.log(data);
      console.log(this.arrayLibros[0]);
    });
  }



  enviarLibro(idlibro,idusuario,titulo,tipo,autor,precio,ruta){
    // if(idlibro.value !="" && titulo.value != ""){
    //   this.arrayLibros.push(new Libro(idlibro.value,idusuario.value,titulo.value,tipo.value,autor.value,precio.value,ruta.value));
    // }else{
    //   console.log("No se ha especificado ningún libro.");
      
    // }
    
  }

  enviarLibro2(idlibro,idusuario,titulo,tipo,autor,precio,ruta):void{
    let nuevoUsuario = new Libro(idlibro.value,idusuario.value,titulo.value,tipo.value,autor.value,precio.value,ruta.value);
    this.miServicioLibros.add2(nuevoUsuario).subscribe((data:any)=>{
      console.log(data.resultado);
      if(data.resultado != -1)
      nuevoUsuario.id_libro = data.resultado;
        this.arrayLibros.push(nuevoUsuario);
    })

  }

  // encontrar(element,index,array){
  // };

  public buscar2(id_libro:string):void{
    if(id_libro == ""){
      //llamar getAll
      this.miServicioLibros.getAll().subscribe((data:any)=>{
        this.arrayLibros = data.resultado;
      });
    }else{
      this.miServicioLibros.getOne(Number(id_libro)).subscribe((data:any)=>{
        this.arrayLibros = data.resultado;
      });
    }
      
  }

  public buscar(idlibro){
   
    //si el campo idLibro está vacio mostramos todos.
    // if (idlibro.value == ""){
    //   console.log("Entra aqui");
    //   this.arrayLibros = this.miServicioLibros.getAll();
    // }else{
    //   console.log("Entra en motrar 1");
    //   console.log(this.miServicioLibros.getOne(idlibro.value));
    //   this.arrayLibros = [];
    //   this.arrayLibros.push(this.miServicioLibros.getOne(idlibro.value));
      
    // }
    
  }

  public eliminarLibro(idlibro){
   this.miServicioLibros.delete(idlibro);
    
  }

  public eliminarLibro2(idlibro){
    let noencontrado = true;
    let posicion = -1;

    this.miServicioLibros.delete(idlibro).subscribe((data:any)=>{
      console.log(data);
      if(data.error == false){
        for(let i = 0; i< this.arrayLibros.length && noencontrado; i++){
          if(this.arrayLibros[i].id_libro == idlibro){
            posicion = i;
            noencontrado = false;
          }
        }

        this.arrayLibros.splice(posicion,1);
      }
    })
  }

  editarLibro2(idlibro:number,idusuario:number,titulo:string,tipo:string,autor:string,precio:number,foto:string):void{
    let noencontrado = true;
    let posicion = -1;
    
    if(idlibro == null) 
      idlibro = 0
    if(idusuario == null)
      idusuario=0;
    if(titulo == "")
      titulo = null;
    if(tipo == "")
      tipo = null;
    if (autor == "")
      autor = null;
    if(precio == null)
      precio=0;
    if (foto == "")
      foto=null;


    let nuevoUsuario = new Libro(idlibro,idusuario,titulo,tipo,autor,precio,foto);
    this.miServicioLibros.edit(nuevoUsuario).subscribe((data:any)=>{
      console.log(data);
      
      if(data.error == false){
        for(let i = 0; i< this.arrayLibros.length && noencontrado; i++){
          if(this.arrayLibros[i].id_libro == idlibro){
            posicion = i;
            noencontrado = false;
          }

        }

      if(this.arrayLibros[posicion].id_usuario != idusuario && idusuario !=null)
        this.arrayLibros[posicion].id_usuario = idusuario;
      if(this.arrayLibros[posicion].titulo != titulo && titulo!="")
        this.arrayLibros[posicion].titulo = titulo;
      if(this.arrayLibros[posicion].tipo != tipo && tipo!="")
        this.arrayLibros[posicion].tipo = tipo;
      if(this.arrayLibros[posicion].autor != autor && autor !="")
        this.arrayLibros[posicion].autor = autor;
      if(this.arrayLibros[posicion].precio != precio && precio!=null)
        this.arrayLibros[posicion].precio = precio;
      if(this.arrayLibros[posicion].foto != foto && foto != "")
        this.arrayLibros[posicion].foto = foto;
      }else{
        console.log("No se ha encontrado el libro a editar.");
        
      }
    })
  }


  editarLibro(idlibro,idusuario,titulo,tipo,autor,precio,ruta){

    let posicion = -1;
    
    for (let i=0; i < this.arrayLibros.length; i++){
      if ( this.arrayLibros[i].id_libro == idlibro.value)
        posicion = i;
    }

    if (posicion !=-1){
      if(idusuario.value != "")
        this.arrayLibros[posicion].id_usuario = idusuario.value;
      if(titulo.value != "")
        this.arrayLibros[posicion].titulo = titulo.value;
      if(tipo.value != "")
        this.arrayLibros[posicion].tipo = tipo.value;
      if(autor.value != "")
        this.arrayLibros[posicion].autor = autor.value;
      if(precio.value!="")
        this.arrayLibros[posicion].precio = precio.value;
      if(ruta.value != "")
        this.arrayLibros[posicion].foto = ruta.value;
    }else{
      console.log("No se ha encontrado ningún libro con ese ID.");
      
    }

    
  }

}
