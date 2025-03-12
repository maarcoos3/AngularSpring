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
      equipoId: [0]  // Se actualizará según el jugador
    });
    this.jugadorId = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarJugador(this.jugadorId);
  }

  cargarJugador(id: number): void {
    this.jugadorService.getJugador(id).subscribe({
      next: (jugador: any) => {
        // Actualiza el formulario con los datos del jugador
        this.jugadorForm.patchValue(jugador);
        // Obtiene el equipoId, ya sea desde un objeto anidado 'equipo' o desde la propiedad directa
        const equipoId = jugador.equipo ? jugador.equipo.id : (jugador.equipoId || jugador.equipo_id);
        if (equipoId) {
          this.equipoId = equipoId;
          // Actualiza el campo equipoId en el formulario para asegurar su presencia
          this.jugadorForm.patchValue({ equipoId: equipoId });
        } else {
          console.error("No se encontró equipoId en el objeto jugador", jugador);
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
          // Redirige al detalle del equipo utilizando this.equipoId
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
