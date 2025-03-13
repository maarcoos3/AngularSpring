import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JugadorService } from '../../services/jugador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jugadores-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './jugadores-edit.component.html',
  styleUrls: ['./jugadores-edit.component.css']
})
export class JugadoresEditComponent implements OnInit {
  jugadorForm!: FormGroup;
  jugadorId!: number;
  equipoId!: number; 

  constructor(
    private fb: FormBuilder,
    private jugadorService: JugadorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jugadorForm = this.fb.group({
      nombre: ['', Validators.required],
      posicion: ['', Validators.required],
      equipoId: [0]
    });
    this.jugadorId = Number(this.route.snapshot.paramMap.get('id'));
    // Asigna el equipoId desde el parámetro 'id2' de la ruta, si existe
    const routeEquipoId = Number(this.route.snapshot.paramMap.get('id2'));
    if (routeEquipoId) {
      this.equipoId = routeEquipoId;
      this.jugadorForm.patchValue({ equipoId: routeEquipoId });
    }
    this.cargarJugador(this.jugadorId);
  }

  cargarJugador(id: number): void {
    this.jugadorService.getJugador(id).subscribe({
      next: (jugador: any) => {
        // Actualiza el formulario con los datos del jugador
        this.jugadorForm.patchValue(jugador);
        // Solo si no se ha establecido un equipoId desde la ruta, se extrae del objeto jugador
        if (!this.equipoId || this.equipoId === 0) {
          const equipoIdFromJugador = jugador.equipo ? jugador.equipo.id : (jugador.equipoId || jugador.equipo_id);
          if (equipoIdFromJugador) {
            this.equipoId = equipoIdFromJugador;
            this.jugadorForm.patchValue({ equipoId: equipoIdFromJugador });
          } else {
            console.error("No se encontró equipoId en el objeto jugador", jugador);
          }
        }
      },
      error: (err: any) => console.error('Error al cargar el jugador', err)
    });
  }
  
  onSubmit(): void {
    if (this.jugadorForm.valid) {
      this.jugadorService.updateJugador(this.jugadorId, this.jugadorForm.value).subscribe({
        next: (res: any) => {
          console.log('Jugador actualizado:', res);
          // Redirige al detalle del equipo utilizando el equipoId obtenido (priorizando el parámetro de la ruta)
          if (this.equipoId && this.equipoId !== 0) {
            this.router.navigate(['/equipos/view', this.equipoId]);
          } else {
            this.router.navigate(['/equipos']);
          }
        },
        error: (err: any) => console.error('Error al actualizar jugador', err)
      });
    }
  }
}
