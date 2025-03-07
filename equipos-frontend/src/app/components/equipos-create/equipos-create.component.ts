import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EquipoService } from '../../services/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './equipos-create.component.html',
  styleUrls: ['./equipos-create.component.css']
})
export class EquiposCreateComponent implements OnInit {
  equipoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private equipoService: EquipoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.equipoForm = this.fb.group({
      nombre: ['', Validators.required],
      ciudad: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.equipoForm.valid) {
      // Se hace casting para cumplir el tipo (ajusta según tu modelo)
      this.equipoService.createEquipo(this.equipoForm.value as any).subscribe({
        next: (res: any) => {
          console.log('Equipo creado:', res);
          this.router.navigate(['/equipos']);
        },
        error: (err: any) => console.error('Error al crear equipo', err)
      });
    }
  }
}
