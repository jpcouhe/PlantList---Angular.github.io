import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plantTypeColor'
})
export class PlantTypeColorPipe implements PipeTransform {

  transform(type:string): string {

    let color: string;
  
    switch (type) {
      case 'interieur':
        color = 'lighten-1';
        break;
      case 'Exterieur':
        color = 'darken-1';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return color;
  
  }

}
