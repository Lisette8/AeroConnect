import { Routes } from '@angular/router';
import { Reservations } from './ComponentsList/reservations/reservations';
import { Vols } from './ComponentsList/vols/vols';
import { VolsCreation } from './ComponentsList/vols-creation/vols-creation';
import { VolsUpdate } from './ComponentsList/vols-update/vols-update';
import { VolsDetails } from './ComponentsList/vols-details/vols-details';
import { Login } from './ComponentsList/Authentification/login/login';
import { AuthGuard } from './Guard/auth-guard';
import { Acceuil } from './ComponentsList/acceuil/acceuil';
import { APropos } from './ComponentsList/a-propos/a-propos';
import { Contact } from './ComponentsList/contact/contact';
import { Feedback } from './ComponentsList/feedback/feedback';
import { ReservationList } from './ComponentsList/reservation-list/reservation-list';
import { UtilisateurList } from './ComponentsList/utilisateur-list/utilisateur-list';
import { Statistiques } from './ComponentsList/statistiques/statistiques';


export const routes: Routes = [
    {
        path: 'vols-creation',
        component: VolsCreation,
    },
    { 
        path: '',
        component: Acceuil
    },
    { 
        path: 'acceuil',
        component: Acceuil
    },
    { 
        path: 'vols',
        component: Vols
    },
    {
        path: 'reservation',
        component: Reservations
    },
    {
        path: 'vols-update/:id',
        component: VolsUpdate,

    },
    { 
        path: 'vols-details/:id',
        component: VolsDetails
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'a-propos',
        component: APropos
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'feedback',
        component: Feedback
    },
    {
        path: 'reservation-list',
        component: ReservationList
    },
    { 
        path: 'utilisateur-list',
        component: UtilisateurList
    },
    { 
        path: 'statistiques',
        component: Statistiques
    }


    
];
