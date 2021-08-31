import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicadoresService } from '../services/publicador.service';
import { switchMap } from 'rxjs/operators';
import { Publicador } from '../interfaces/publicador.interface';

@Component({
  selector: 'app-editar-publicador',
  templateUrl: './editar-publicador.component.html',
  styleUrls: ['./editar-publicador.component.css']
})
export class EditarPublicadorComponent implements OnInit {

  @ViewChild('editarPublicador') editarPublicador!: NgForm

  initPublicador: Publicador = {
    _id: '',
    codigo: '',
    descripcion: '',
    cantidadpublicaciones: 0,
    __v: 0
  }

  constructor(private activatedRoute: ActivatedRoute,
    private publicadorService: PublicadoresService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ codigo }) => this.publicadorService.getPublisherByCode(codigo))
      )
      .subscribe(publisher => this.initPublicador = publisher);

  }

  guardar() {

    this.initPublicador = {
      _id: this.editarPublicador.value._id,
      codigo: this.editarPublicador.value.codigo,
      descripcion: this.editarPublicador.value.descripcion,
      cantidadpublicaciones: this.editarPublicador.value.cantidadpublicaciones,
      __v: this.editarPublicador.value.__v
    }

    this.publicadorService.editPublisher(this.initPublicador)
      .subscribe(() => {
        this.router.navigate(['/dashboard/publisher']);
      });

  }

}
