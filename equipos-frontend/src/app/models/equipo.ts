// src/app/models/equipo.ts

export interface Equipo {
    id?: number;
    nombre: string;
    ciudad: string;
    jugadores?: any[]; // Puedes ajustar el tipo según definas la interfaz de Jugador
  }
  