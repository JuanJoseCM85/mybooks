export class Libro {

    constructor(public id_libro:number = 0,public id_usuario:number = 0,
                public titulo:string, public tipo:string,
                public autor:string, public precio:number,
                public foto:string){};    
}
