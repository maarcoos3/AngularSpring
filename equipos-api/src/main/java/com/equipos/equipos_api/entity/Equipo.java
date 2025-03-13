package com.equipos.equipos_api.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;


//anotaciones de lombok para reducir el código repetitivo
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "equipos")
public class Equipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String ciudad;

    //relacion 1-n     cascade y orphanRemoval son atribitos para ayudan a mantener la consistencia de datos
    @OneToMany(mappedBy = "equipo", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Jugador> jugadores;
}

