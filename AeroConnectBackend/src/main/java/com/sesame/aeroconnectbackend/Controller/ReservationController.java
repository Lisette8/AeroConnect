package com.sesame.aeroconnectbackend.Controller;

import com.sesame.aeroconnectbackend.Entities.Contact;
import com.sesame.aeroconnectbackend.Entities.Reservation;
import com.sesame.aeroconnectbackend.Repository.IContactRepository;
import com.sesame.aeroconnectbackend.Repository.IReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/reservationApi")
public class ReservationController {

    @Autowired
    private IReservationRepository iReservationRepository;

    @GetMapping("/Reservation")
    public List<Reservation> getAllReservations() {
        return iReservationRepository.findAll();
    }

    @PostMapping("/Reservation")
    public Reservation addReservation(@RequestBody Reservation reservation) {
        return iReservationRepository.save(reservation);
    }

}
