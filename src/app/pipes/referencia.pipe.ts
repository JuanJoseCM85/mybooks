import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'referencia'
})
export class ReferenciaPipe implements PipeTransform {

  transform(valor: number): string {
    let result:string;

    result = "Ref-" + valor;
    return result;
  }

}
