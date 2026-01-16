package com.sesame.aeroconnectbackend.Controller;

import com.sesame.aeroconnectbackend.Entities.Administrateur;
import com.sesame.aeroconnectbackend.Repository.IAdministrateurRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RestController
@RequestMapping("/administrateurApi")
public class AdministrateurController {

    @Autowired
    private IAdministrateurRepository iAdministrateurRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials, HttpSession session) {
        String password = credentials.get("password");

        // Check if any admin in the DB has this exact plain text password
        Administrateur admin = iAdministrateurRepository.findByPassword(password);

        if (admin != null) {
            // Password exists in DB. Mark session as logged in.
            session.setAttribute("adminLoggedIn", true);
            return ResponseEntity.ok().build(); // 200 OK
        } else {
            // Password not found
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong password");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok().build();
    }

    @GetMapping("/check")
    public ResponseEntity<?> checkSession(HttpSession session) {
        if (session.getAttribute("adminLoggedIn") != null) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
    
}
