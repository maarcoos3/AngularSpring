import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-equipos-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipos-delete.component.html',
  styleUrls: ['./equipos-delete.component.css']
})
export class EquiposDeleteComponent implements OnInit {
  equipoId!: number;
  equipo: any;

  constructor(
    private equipoService: EquipoService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.equipoId = Number(this.route.snapshot.paramMap.get('id'));
    this.equipoService.getEquipo(this.equipoId).subscribe({
      next: (res: any) => this.equipo = res,
      error: (err: any) => console.error('Error al cargar el equipo', err)
    });
  }

  confirmarEliminacion(): void {
    this.equipoService.deleteEquipo(this.equipoId).subscribe({
      next: () => {
        console.log('Equipo eliminado');
        this.router.navigate(['/equipos']);
      },
      error: (err: any) => console.error('Error al eliminar equipo', err)
    });
  }
}
