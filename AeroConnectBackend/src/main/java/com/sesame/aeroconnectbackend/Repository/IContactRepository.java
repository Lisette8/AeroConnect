package com.sesame.aeroconnectbackend.Repository;

import com.sesame.aeroconnectbackend.Entities.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IContactRepository extends JpaRepository<Contact, Long> {
}
