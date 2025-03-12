import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-jugadores-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jugadores-delete.component.html',
  styleUrls: ['./jugadores-delete.component.css']
})
export class JugadoresDeleteComponent implements OnInit {
  jugadorId!: number;
  jugador: any;

  constructor(
    private jugadorService: JugadorService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.jugadorId = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarJugador(this.jugadorId);
  }

  cargarJugador(id: number): void {
    this.jugadorService.getJugador(id).subscribe({
      next: (res: any) => this.jugador = res,
      error: (err: any) => console.error('Error al cargar el jugador', err)
    });
  }

  confirmarEliminacion(): void {
    this.jugadorService.deleteJugador(this.jugadorId).subscribe({
      next: () => {
        console.log('Jugador eliminado');
        this.router.navigate(['/jugadores']);
      },
      error: (err: any) => console.error('Error al eliminar jugador', err)
    });
  }
}
