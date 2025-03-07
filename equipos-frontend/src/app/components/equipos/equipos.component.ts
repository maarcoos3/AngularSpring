// src/app/components/equipos/equipos.component.ts

import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: Equipo[] = [];

  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.cargarEquipos();
  }

  cargarEquipos(): void {
    this.equipoService.getEquipos().subscribe(
      data => {
        this.equipos = data;
        console.log('Equipos cargados', this.equipos);
      },
      error => {
        console.error('Error al cargar los equipos', error);
      }
    );
  }
}
