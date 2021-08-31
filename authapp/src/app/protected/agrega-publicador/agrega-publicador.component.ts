import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicadoresService } from '../services/publicador.service';

@Component({
  selector: 'app-agrega-publicador',
  templateUrl: './agrega-publicador.component.html',
  styleUrls: ['./agrega-publicador.component.css']
})
export class AgregaPublicadorComponent implements OnInit {

  @ViewChild('agregarPublicador') agregarPublicador!: NgForm

  initPublicador = {
    codigo: '',
    descripcion: '',
    cantidadpublicaciones: 0
  }

  guardarPublicador = {
    codigo: '',
    descripcion: '',
    cantidadpublicaciones: 0
  }

  constructor(private publicadorService: PublicadoresService, private router: Router) { }

  ngOnInit(): void {
  }

  guardar() {

    this.guardarPublicador = {
      codigo: this.agregarPublicador.value.codigo,
      descripcion: this.agregarPublicador.value.descripcion,
      cantidadpublicaciones: this.agregarPublicador.value.cantidadpublicaciones
    }

    this.publicadorService.createPublisher(this.guardarPublicador)
      .subscribe(() => {
        this.router.navigate(['/dashboard/publisher']);
      });

  }

  codigoValido(): boolean {
    return this.agregarPublicador?.controls.codigo?.invalid
      && this.agregarPublicador?.controls.producto?.touched;
  }

}
