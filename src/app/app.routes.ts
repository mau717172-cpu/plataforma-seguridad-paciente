import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { Dashboard } from './compartido/dashboard/dashboard';
import { MiPerfil } from './compartido/mi-perfil/mi-perfil';
import { Capacitacion } from './compartido/capacitacion/capacitacion';
import { Biblioteca } from './compartido/biblioteca/biblioteca';
import { EventosAdversos } from './compartido/eventos-adversos/eventos-adversos';
import { EventosAdversosForm } from './compartido/eventos-adversos/eventos-adversos-form';
import { AtencionPaciente } from './compartido/atencion-paciente/atencion-paciente';
import { Reportes } from './compartido/reportes/reportes';
import { rolClinicoGuard } from './core/guards/rol-clinico.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: Dashboard },
  { path: 'mi-perfil', component: MiPerfil },
  { path: 'capacitacion', component: Capacitacion },
  { path: 'biblioteca', component: Biblioteca },
  { path: 'reportes', component: Reportes },
  { path: 'eventos-adversos', component: EventosAdversos, canActivate: [rolClinicoGuard] },
  { path: 'eventos-adversos/form', component: EventosAdversosForm, canActivate: [rolClinicoGuard] },
  { path: 'atencion-paciente', component: AtencionPaciente, canActivate: [rolClinicoGuard] },
  { path: '**', redirectTo: 'login' }
];
