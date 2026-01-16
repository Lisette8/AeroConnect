package com.sesame.aeroconnectbackend.Controller;

import com.sesame.aeroconnectbackend.Entities.Utilisateur;
import com.sesame.aeroconnectbackend.Repository.IUtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/utilisateurApi")
public class UtilisateurController {

    @Autowired
    private IUtilisateurRepository iUtilisateurRepository;

    @GetMapping("/getAllUtilisateur")
    public List<Utilisateur> getAllUtilisateur() {
        return iUtilisateurRepository.findAll();
    }
}
