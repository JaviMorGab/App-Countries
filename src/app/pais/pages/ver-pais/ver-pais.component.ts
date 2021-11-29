import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap, debounceTime } from 'rxjs';

import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

    console.log(this.pais);

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log), debounceTime(1000)
      )
      .subscribe(pais => this.pais = pais);

    // this.activatedRoute.params
    // .subscribe(({ id }) = > {
    //   console.log(id);
      
    //   this.PaisService.getpaisPorAlpha(id)
    //   .subscribe(pais => {
    //     console.log(pais);
    //   });
    // });
  }

}
