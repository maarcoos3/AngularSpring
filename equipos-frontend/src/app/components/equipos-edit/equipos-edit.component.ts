// src/app/components/equipos-edit/equipos-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-equipos-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './equipos-edit.component.html',
  styleUrls: ['./equipos-edit.component.css']
})
export class EquiposEditComponent implements OnInit {
  equipoForm!: FormGroup;
  equipoId!: number;

  constructor(
    private fb: FormBuilder,
    private equipoService: EquipoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.equipoForm = this.fb.group({
      nombre: ['', Validators.required],
      ciudad: ['', Validators.required]
    });
    this.equipoId = Number(this.route.snapshot.paramMap.get('id'));
    this.equipoService.getEquipo(this.equipoId).subscribe({
      next: (equipo: any) => this.equipoForm.patchValue(equipo),
      error: (err: any) => console.error('Error al cargar el equipo', err)
    });
  }

  onSubmit(): void {
    if (this.equipoForm.valid) {
      this.equipoService.updateEquipo(this.equipoId, this.equipoForm.value as any).subscribe({
        next: (res: any) => {
          console.log('Equipo actualizado:', res);
          this.router.navigate(['/equipos']);
        },
        error: (err: any) => console.error('Error al actualizar equipo', err)
      });
    }
  }
}
