package com.sesame.aeroconnectbackend.Repository;

import com.sesame.aeroconnectbackend.Entities.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUtilisateurRepository extends JpaRepository<Utilisateur, Long> {

}
