package com.sesame.aeroconnectbackend.Repository;

import com.sesame.aeroconnectbackend.Entities.Vol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IVolRepository extends JpaRepository<Vol, Long> {

}
