import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { Publicador, Publicadores } from '../interfaces/publicador.interface';
import { PublicadoresService } from '../services/publicador.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../components/confirmar/confirmar.component';

@Component({
  selector: 'app-publicador',
  templateUrl: './publicador.component.html',
  styleUrls: ['./publicador.component.css']
})
export class PublicadorComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'codigo', 'descripcion', 'publicaciones', 'accion'];

  publicadores: Publicador[] = [];

  dataSource: MatTableDataSource<Publicador> = new MatTableDataSource(this.publicadores);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private publicadoresService: PublicadoresService,
    public dialog: MatDialog,
    private router: Router) {

    this.publicadoresService.getPublishers()
      .subscribe(publishers => {

        this.publicadores = publishers.publicador;
        this.dataSource = new MatTableDataSource(this.publicadores);

      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  eliminar(id: string) {

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: {}
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.publicadoresService.deletePublisher(id!)
            .subscribe(() => {

              this.publicadoresService.getPublishers()
                .subscribe(publishers => {

                  this.publicadores = publishers.publicador;
                  this.dataSource = new MatTableDataSource(this.publicadores);

                });

            })
        }
      }
    )
  }


}