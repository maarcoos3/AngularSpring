package com.equipos.equipos_api.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "jugadores")
public class Jugador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String posicion;

    //relacion n-1
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "equipo_id")
    private Equipo equipo;
}
