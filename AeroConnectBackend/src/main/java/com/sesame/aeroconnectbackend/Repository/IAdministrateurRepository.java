package com.sesame.aeroconnectbackend.Repository;

import com.sesame.aeroconnectbackend.Entities.Administrateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAdministrateurRepository extends JpaRepository<Administrateur,Long> {
    Administrateur findByPassword(String password);
}
