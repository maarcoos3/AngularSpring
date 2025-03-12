import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EquipoService } from '../../services/equipo.service';
import { JugadorService } from '../../services/jugador.service';
import { Equipo } from '../../models/equipo';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-equipos-view',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './equipos-view.component.html',
  styleUrls: ['./equipos-view.component.css']
})
export class EquiposViewComponent implements OnInit {
  equipo!: Equipo;
  jugadores: Jugador[] = []; // Aseguramos que la propiedad existe

  constructor(
    private route: ActivatedRoute,
    private equipoService: EquipoService,
    private jugadorService: JugadorService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarEquipo(id);
    this.cargarJugadores(id);
  }

  cargarEquipo(id: number): void {
    this.equipoService.getEquipo(id).subscribe({
      next: (equipo: Equipo) => (this.equipo = equipo),
      error: (err: any) => console.error('Error al cargar el equipo', err)
    });
  }

  cargarJugadores(equipoId: number): void {
    this.jugadorService.getJugadoresPorEquipo(equipoId).subscribe({
      next: (jugadores: Jugador[]) => (this.jugadores = jugadores),
      error: (err: any) => console.error('Error al cargar jugadores', err)
    });
  }
}
