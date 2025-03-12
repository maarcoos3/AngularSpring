import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jugadores-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './jugadores-list.component.html',
  styleUrls: ['./jugadores-list.component.css']
})
export class JugadoresListComponent implements OnInit {
  jugadores: Jugador[] = [];

  constructor(private jugadorService: JugadorService) {}

  ngOnInit(): void {
    this.cargarJugadores();
  }

  cargarJugadores(): void {
    this.jugadorService.getJugadores().subscribe({
      next: (jugadores: Jugador[]) => this.jugadores = jugadores,
      error: (err: any) => console.error('Error al cargar jugadores', err)
    });
  }
}
