package com.equipos.equipos_api.controller;

import com.equipos.equipos_api.entity.Jugador;
import com.equipos.equipos_api.service.JugadorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jugadores")
public class JugadorController {

    private final JugadorService jugadorService;

    public JugadorController(JugadorService jugadorService) {
        this.jugadorService = jugadorService;
    }

    // Obtener todos los jugadores
    @GetMapping
    public List<Jugador> getAllJugadores() {
        return jugadorService.findAll();
    }
    
    // Crear un nuevo jugador
    @PostMapping
    public Jugador createJugador(@RequestBody Jugador jugador) {
        return jugadorService.save(jugador);
    }
    
    // Obtener un jugador por ID
    @GetMapping("/{id}")
    public Jugador getJugador(@PathVariable Long id) {
        return jugadorService.findById(id);
    }
    
    // Actualizar un jugador existente
    @PutMapping("/{id}")
    public Jugador updateJugador(@PathVariable Long id, @RequestBody Jugador jugadorDetails) {
        return jugadorService.update(id, jugadorDetails);
    }
    
    // Eliminar un jugador por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJugador(@PathVariable Long id) {
        jugadorService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
