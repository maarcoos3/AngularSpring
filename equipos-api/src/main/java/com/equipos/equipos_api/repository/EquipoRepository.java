package com.equipos.equipos_api.repository;

import com.equipos.equipos_api.entity.Equipo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// interfaz como un repositorio de Spring para la gestión de datos de la entidad Equipo
@Repository
public interface EquipoRepository extends JpaRepository<Equipo, Long> {
}
