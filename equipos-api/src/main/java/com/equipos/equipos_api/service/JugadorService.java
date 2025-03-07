package com.equipos.equipos_api.service;

import com.equipos.equipos_api.entity.Jugador;
import com.equipos.equipos_api.entity.Equipo;
import com.equipos.equipos_api.exception.ResourceNotFoundException;
import com.equipos.equipos_api.repository.JugadorRepository;
import com.equipos.equipos_api.repository.EquipoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JugadorService {

    private final JugadorRepository jugadorRepository;
    private final EquipoRepository equipoRepository;

    public JugadorService(JugadorRepository jugadorRepository, EquipoRepository equipoRepository) {
        this.jugadorRepository = jugadorRepository;
        this.equipoRepository = equipoRepository;
    }

    public List<Jugador> findAll() {
        return jugadorRepository.findAll();
    }

    public Jugador findById(Long id) {
        return jugadorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Jugador no encontrado con id: " + id));
    }

    public Jugador save(Jugador jugador) {
        // Si se asigna un equipo, se valida que exista
        if (jugador.getEquipo() != null && jugador.getEquipo().getId() != null) {
            Equipo equipo = equipoRepository.findById(jugador.getEquipo().getId())
                    .orElseThrow(() -> new ResourceNotFoundException("Equipo no encontrado con id: " + jugador.getEquipo().getId()));
            jugador.setEquipo(equipo);
        }
        return jugadorRepository.save(jugador);
    }

    public Jugador update(Long id, Jugador jugadorDetails) {
        Jugador jugador = findById(id);
        jugador.setNombre(jugadorDetails.getNombre());
        jugador.setPosicion(jugadorDetails.getPosicion());
        // Permitir cambiar el equipo asignado, si se especifica
        if (jugadorDetails.getEquipo() != null && jugadorDetails.getEquipo().getId() != null) {
            Equipo equipo = equipoRepository.findById(jugadorDetails.getEquipo().getId())
                    .orElseThrow(() -> new ResourceNotFoundException("Equipo no encontrado con id: " + jugadorDetails.getEquipo().getId()));
            jugador.setEquipo(equipo);
        } else {
            jugador.setEquipo(null);
        }
        return jugadorRepository.save(jugador);
    }

    public void delete(Long id) {
        Jugador jugador = findById(id);
        jugadorRepository.delete(jugador);
    }
}

