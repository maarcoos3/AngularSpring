package com.equipos.equipos_api.service;

import com.equipos.equipos_api.entity.Equipo;
import com.equipos.equipos_api.exception.ResourceNotFoundException;
import com.equipos.equipos_api.repository.EquipoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

// indica que esta clase es un servicio de Spring
@Service
public class EquipoService {

    // interactuar con la base de datos
    private final EquipoRepository equipoRepository;

    // inyección de dependencia del repositorio 
    public EquipoService(EquipoRepository equipoRepository) {
        this.equipoRepository = equipoRepository;
    }

    // obtener lista completa 
    public List<Equipo> findAll() {
        return equipoRepository.findAll();
    }

    // buscar  
    public Equipo findById(Long id) {
        return equipoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Equipo no encontrado con id: " + id));
    }

    // guardar 
    public Equipo save(Equipo equipo) {
        return equipoRepository.save(equipo);
    }

    // actualizar 
    public Equipo update(Long id, Equipo equipoDetails) {
        Equipo equipo = findById(id);
        equipo.setNombre(equipoDetails.getNombre());
        equipo.setCiudad(equipoDetails.getCiudad());
        
        return equipoRepository.save(equipo);
    }

    // eliminar  
    public void delete(Long id) {
        Equipo equipo = findById(id);
        equipoRepository.delete(equipo);
    }
}
