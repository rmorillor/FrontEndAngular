import { Component, OnInit } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';
import { HeroesService } from '../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../components/confirmar/confirmar.component';
import { PublicadoresService } from '../services/publicador.service';
import { Publicador } from '../interfaces/publicador.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  publishers: Publicador[] = [];

  heroe: Heroe = {
    id: '',
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: '',
    alt_img: ''
  }

  constructor(private heroesService: HeroesService,
    private publisherService: PublicadoresService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {

    if (this.router.url.includes('edit')) {
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.heroesService.getHeroeById(id))
        )
        .subscribe(heroe => this.heroe = heroe);
    }

    this.publisherService.getPublishers().subscribe(({ publicador }) => this.publishers = publicador);

  }

  guardar() {

    if (this.heroe.superhero.trim().length === 0) {
      return;
    } else if (this.heroe.publisher.trim().length === 0) {
      return;
    } else if (this.heroe.alter_ego.trim().length === 0) {
      return;
    } else if (this.heroe.characters.trim().length === 0) {
      return;
    }

    if (!this.heroe._id) {

      if (this.heroe.publisher == 'DC Comics') {

        const index = this.heroe.superhero.indexOf(" ");

        if (index !== -1) {
          this.heroe.id = "dc-" + this.heroe.superhero.substring(0, index).toLowerCase();
        } else {
          this.heroe.id = "dc-" + this.heroe.superhero.toLowerCase();
        }

      } else if (this.heroe.publisher == 'Marvel Comics') {

        const index = this.heroe.superhero.indexOf(" ");

        if (index !== -1) {
          this.heroe.id = "marvel-" + this.heroe.superhero.substring(0, index).toLowerCase();
        } else {
          this.heroe.id = "marvel-" + this.heroe.superhero.toLowerCase();
        }
      } else {

        this.heroe.id = this.heroe.publisher + '-' + this.heroe.superhero.toLowerCase();
      }


      this.heroesService.creartHeroe(this.heroe)
        .subscribe(heroe => {
          this.mostrarSnackbar('Registro creado');
          this.router.navigate(['/dashboard/edit', heroe.id])
        })

    } else {

      this.heroesService.editarHeroe(this.heroe)
        .subscribe(heroe => {
          this.mostrarSnackbar('Registro actualizado')
        })

    }
  }

  borrar() {

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: { ...this.heroe }
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.heroesService.eliminarHeroe(this.heroe._id!)
            .subscribe(resp => {
              this.router.navigate(['/dashboard/list']);
            })
        }
      }
    )
  }

  mostrarSnackbar(msg: string) {

    this._snackBar.open(msg, 'Ok!', {
      duration: 2500
    });

  }
}