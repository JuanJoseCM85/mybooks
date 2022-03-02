export class Libro {

    constructor(public id_libro:number = 0,public id_usuario:number = 0,
                public titulo:string, public tipoLibro:string,
                public autor:string, public precio:number,
                public photo:string){};    
}
