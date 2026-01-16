package com.sesame.aeroconnectbackend.Controller;

import com.sesame.aeroconnectbackend.Entities.Vol;
import com.sesame.aeroconnectbackend.Repository.IUtilisateurRepository;
import com.sesame.aeroconnectbackend.Repository.IVolRepository;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/volApi")
public class VolController {

    @Autowired
    private IVolRepository ivolRepository;

    @GetMapping("/Vols")
    public List<Vol> getAllVols() {
        return ivolRepository.findAll();
    }

    @PostMapping("/Vols")
    public Vol addVol(@RequestBody Vol vol) {
        return ivolRepository.save(vol);
    }

    @GetMapping("/Vols/{id}")
    public ResponseEntity<Vol> getVolById(@PathVariable Long id) {
        Vol vol = ivolRepository.findById(id)
                .orElseThrow(() -> new ConfigDataResourceNotFoundException(null));
        return ResponseEntity.ok(vol);
    }

    @PutMapping("/Vols/{id}")
    public ResponseEntity<Vol> updateVol(@PathVariable Long id, @RequestBody Vol volInfos) {
        Vol vol = ivolRepository.findById(id)
                .orElseThrow(() -> new ConfigDataResourceNotFoundException(null));
        vol.setAvion(volInfos.getAvion());
        vol.setArrive(volInfos.getArrive());
        vol.setDepart(volInfos.getDepart());
        vol.setDateDepart(volInfos.getDateDepart());
        vol.setPrix(volInfos.getPrix());
        vol.setTime(volInfos.getTime());
        vol.setTimeDepart(volInfos.getTimeDepart());
        vol.setCompagnie(volInfos.getCompagnie());

        Vol newVol = ivolRepository.save(vol);
        return ResponseEntity.ok(newVol);
    }


    @DeleteMapping("/Vols/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteVol(@PathVariable Long id) {
        Vol vol = ivolRepository.findById(id)
                .orElseThrow(() -> new ConfigDataResourceNotFoundException(null));
        ivolRepository.delete(vol);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}