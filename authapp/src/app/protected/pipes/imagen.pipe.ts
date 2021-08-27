import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if (heroe._id && !heroe.alt_img) {
      return `../../../assets/heroes/${heroe.id}.jpg`;
    }

    if (!heroe._id && !heroe.alt_img) {
      return '../../../assets/no-image.png'
    }

    if (heroe.alt_img) {
      return heroe.alt_img;
    } else {
      return `../../../assets/heroes/${heroe.id}.jpg`;
    }
  }

}