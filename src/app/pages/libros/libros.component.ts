import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ServicioLibrosService } from 'src/app/shared/servicio-libros.service';

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
  public arrayLibros: Libro[];

  constructor( public miServicioLibros:ServicioLibrosService) {

    // this.miLibro = new Libro(1,1,"Se lo que estás pensando","Terror","John Verdon",20.40,"../../../assets/libros/seloqueestaspensando.jpg");
    // this.milibro2 = new Libro(2,2,"Deja en paz al diablo","Terror","John Verdon",25.50,"../../../assets/libros/dejaenpazaldiablo.jpg");
    // this.miLibro3 = new Libro (3,3,"El hombre de la tiza","Thriller","C.J. Tudor",9.45,"../../../assets/libros/elhombredelatiza.jpg");
    // this.miLibro4 = new Libro(4,4,"Un invitado inesperado","Thriller","Shari Lapena",10.40,"../../../assets/libros/uninventoinesperado.jpg");
    // this.miLibro5 = new Libro(5,5,"Te veré bajo el hielo","Thriller","Robert Bryndza",9.45,"../../../assets/libros/teverebajoelhielo.jpg");
    // this.miLibro6 = new Libro(6,6,"Aguas Oscuras","Terror","Robert Bryndza",9.45,"../../../assets/libros/aguasoscuras.jpg");

    this.arrayLibros = miServicioLibros.getAll();

   }

  ngOnInit(): void {
  }

  enviarLibro(idlibro,idusuario,titulo,tipo,autor,precio,ruta){
    if(idlibro.value !="" && titulo.value != ""){
      this.arrayLibros.push(new Libro(idlibro.value,idusuario.value,titulo.value,tipo.value,autor.value,precio.value,ruta.value));
    }else{
      console.log("No se ha especificado ningún libro.");
      
    }
    
  }

  // encontrar(element,index,array){
  // };

  public buscar(idlibro){
   
    //si el campo idLibro está vacio mostramos todos.
    if (idlibro.value == ""){
      console.log("Entra aqui");
      this.arrayLibros = this.miServicioLibros.getAll();
    }else{
      console.log("Entra en motrar 1");
      console.log(this.miServicioLibros.getOne(idlibro.value));
      this.arrayLibros = [];
      this.arrayLibros.push(this.miServicioLibros.getOne(idlibro.value));
      
    }
    
  }

  public eliminarLibro(idlibro){
   this.miServicioLibros.delete(idlibro);
    
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
        this.arrayLibros[posicion].tipoLibro = tipo.value;
      if(autor.value != "")
        this.arrayLibros[posicion].autor = autor.value;
      if(precio.value!="")
        this.arrayLibros[posicion].precio = precio.value;
      if(ruta.value != "")
        this.arrayLibros[posicion].photo = ruta.value;
    }else{
      console.log("No se ha encontrado ningún libro con ese ID.");
      
    }

    
  }

}
