package com.sesame.aeroconnectbackend.Controller;

import com.sesame.aeroconnectbackend.Entities.Contact;
import com.sesame.aeroconnectbackend.Entities.Vol;
import com.sesame.aeroconnectbackend.Repository.IContactRepository;
import com.sesame.aeroconnectbackend.Repository.IUtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/contactApi")
public class ContactController {

    @Autowired
    private IContactRepository iContactRepository;

    @GetMapping("/Contact")
    public List<Contact> getAllContacts() {
        return iContactRepository.findAll();
    }

    @PostMapping("/Contact")
    public Contact addContact(@RequestBody Contact contact) {
        return iContactRepository.save(contact);
    }
}
