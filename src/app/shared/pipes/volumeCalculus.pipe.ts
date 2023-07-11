import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'volumeCalculus'
})
export class VolumeCalculusPipe implements PipeTransform {
  transform(productType: string): string {
    return productType === 'Прочее' ? 'шт' : 'кг'
  }
}
