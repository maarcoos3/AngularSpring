import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EquiposComponent } from './components/equipos/equipos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EquiposComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'equipos-frontend';
  
}
