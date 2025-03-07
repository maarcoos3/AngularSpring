package com.equipos.equipos_api.service;

import com.equipos.equipos_api.entity.Equipo;
import com.equipos.equipos_api.exception.ResourceNotFoundException;
import com.equipos.equipos_api.repository.EquipoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipoService {

    private final EquipoRepository equipoRepository;

    public EquipoService(EquipoRepository equipoRepository) {
        this.equipoRepository = equipoRepository;
    }

    public List<Equipo> findAll() {
        return equipoRepository.findAll();
    }

    public Equipo findById(Long id) {
        return equipoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Equipo no encontrado con id: " + id));
    }

    public Equipo save(Equipo equipo) {
        return equipoRepository.save(equipo);
    }

    public Equipo update(Long id, Equipo equipoDetails) {
        Equipo equipo = findById(id);
        equipo.setNombre(equipoDetails.getNombre());
        equipo.setCiudad(equipoDetails.getCiudad());
        // Si necesitas actualizar los jugadores, aquí se podría implementar la lógica
        return equipoRepository.save(equipo);
    }

    public void delete(Long id) {
        Equipo equipo = findById(id);
        equipoRepository.delete(equipo);
    }
}
