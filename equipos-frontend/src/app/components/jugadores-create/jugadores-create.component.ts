import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JugadorService } from '../../services/jugador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jugadores-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './jugadores-create.component.html',
  styleUrls: ['./jugadores-create.component.css']
})
export class JugadoresCreateComponent implements OnInit {
  jugadorForm!: FormGroup;
  equipoId!: number;

  constructor(
    private fb: FormBuilder,
    private jugadorService: JugadorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Si se pasa el equipoId en los query params, lo asignamos
    this.equipoId = Number(this.route.snapshot.queryParamMap.get('equipoId')) || 0;
    this.jugadorForm = this.fb.group({
      nombre: ['', Validators.required],
      posicion: ['', Validators.required],
      equipoId: [this.equipoId]  // Asigna el equipo si se proporciona
    });
  }

  onSubmit(): void {
    if (this.jugadorForm.valid) {
      this.jugadorService.createJugador(this.jugadorForm.value).subscribe({
        next: (res: any) => {
          console.log('Jugador creado:', res);
          // Redirige a la vista de jugadores o a la vista del equipo según prefieras
          this.router.navigate(['/jugadores']);
        },
        error: (err: any) => console.error('Error al crear jugador', err)
      });
    }
  }
}
