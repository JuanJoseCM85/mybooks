import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public miLibro:Libro;
  public milibro2: Libro;
  public miLibro3: Libro;
  public miLibro4: Libro;
  public miLibro5: Libro;
  public miLibro6: Libro;
  public arrayLibros: Libro[];

  constructor() {

    this.miLibro = new Libro(1,1,"Se lo que estás pensando","Terror","John Verdon",20.40,"../../../assets/libros/seloqueestaspensando.jpg");
    this.milibro2 = new Libro(2,2,"Deja en paz al diablo","Terror","John Verdon",25.50,"../../../assets/libros/dejaenpazaldiablo.jpg");
    this.miLibro3 = new Libro (3,3,"El hombre de la tiza","Thriller","C.J. Tudor",9.45,"../../../assets/libros/elhombredelatiza.jpg");
    this.miLibro4 = new Libro(4,4,"Un invitado inesperado","Thriller","Shari Lapena",10.40,"../../../assets/libros/uninventoinesperado.jpg");
    this.miLibro5 = new Libro(5,5,"Te veré bajo el hielo","Thriller","Robert Bryndza",9.45,"../../../assets/libros/teverebajoelhielo.jpg");
    this.miLibro6 = new Libro(6,6,"Aguas Oscuras","Terror","Robert Bryndza",9.45,"../../../assets/libros/aguasoscuras.jpg");

    this.arrayLibros = [this.miLibro,this.milibro2,this.miLibro3,this.miLibro4,this.miLibro5,this.miLibro6];

   }

  ngOnInit(): void {
  }

  enviarLibro(idlibro,idusuario,titulo,tipo,autor,precio,ruta){
    this.arrayLibros.push(new Libro(idlibro.value,idusuario.value,titulo.value,tipo.value,autor.value,precio.value,ruta.value));
  }

}
