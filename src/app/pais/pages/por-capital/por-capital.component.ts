import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    // this.paisService.buscarPais(this.termino)
    //   .subscribe((resp) => {
    //     console.log(resp);
    //   }, (err) => {
    //     this.hayError = true;
    //   });
      
      this.paisService.buscarCapital(termino).subscribe({
        next: (paises) => {
          if (paises.length == undefined) {
            this.hayError = true;
          }
          this.paises = paises;
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
        },
      });
  }

}
