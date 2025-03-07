package com.equipos.equipos_api.controller;

import com.equipos.equipos_api.entity.Equipo;
import com.equipos.equipos_api.service.EquipoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/equipos")
public class EquipoController {

    private final EquipoService equipoService;

    public EquipoController(EquipoService equipoService) {
        this.equipoService = equipoService;
    }

    // Obtener todos los equipos
    @GetMapping
    public List<Equipo> getAllEquipos() {
        return equipoService.findAll();
    }
    
    // Crear un nuevo equipo
    @PostMapping
    public Equipo createEquipo(@RequestBody Equipo equipo) {
        return equipoService.save(equipo);
    }
    
    // Obtener un equipo por ID
    @GetMapping("/{id}")
    public Equipo getEquipo(@PathVariable Long id) {
        return equipoService.findById(id);
    }
    
    // Actualizar un equipo existente
    @PutMapping("/{id}")
    public Equipo updateEquipo(@PathVariable Long id, @RequestBody Equipo equipoDetails) {
        return equipoService.update(id, equipoDetails);
    }
    
    // Eliminar un equipo por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEquipo(@PathVariable Long id) {
        equipoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
