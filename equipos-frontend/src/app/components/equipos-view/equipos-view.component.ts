import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-equipos-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipos-view.component.html',
  styleUrls: ['./equipos-view.component.css']
})
export class EquiposViewComponent implements OnInit {
  equipo!: Equipo;

  constructor(
    private route: ActivatedRoute,
    private equipoService: EquipoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.equipoService.getEquipo(id).subscribe({
      next: (equipo: Equipo) => this.equipo = equipo,
      error: (err: any) => console.error('Error al cargar el equipo', err)
    });
  }
}
