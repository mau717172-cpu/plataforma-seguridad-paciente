import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';

// Medico components
import { DashboardMedico } from './medico/dashboard-medico/dashboard-medico';
import { MiPerfil } from './medico/mi-perfil/mi-perfil';
import { Capacitacion } from './medico/capacitacion/capacitacion';
import { Biblioteca } from './medico/biblioteca/biblioteca';
import { EventosAdversos } from './medico/eventos-adversos/eventos-adversos';
import { AtencionPaciente } from './medico/atencion-paciente/atencion-paciente';
import { Reportes } from './medico/reportes/reportes';
import { EventosAdversosForm } from './medico/eventos-adversos/eventos-adversos-form';

// Paciente components
import { DashboardPaciente } from './paciente/dashboard-paciente/dashboard-paciente';
import { MiPerfil as MiPerfilPaciente } from './paciente/mi-perfil/mi-perfil';
import { Capacitacion as CapacitacionPaciente } from './paciente/capacitacion/capacitacion';
import { Biblioteca as BibliotecaPaciente } from './paciente/biblioteca/biblioteca';
import { EventosAdversos as EventosAdversosPaciente } from './paciente/eventos-adversos/eventos-adversos';
import { AtencionPaciente as AtencionPacientePaciente } from './paciente/atencion-paciente/atencion-paciente';
import { Reportes as ReportesPaciente } from './paciente/reportes/reportes';
import { EventosAdversosForm as EventosAdversosFormPaciente } from './paciente/eventos-adversos/eventos-adversos-form';

// Enfermero components
import { DashboardEnfermero } from './enfermero/dashboard-enfermero/dashboard-enfermero';
import { MiPerfil as MiPerfilEnfermero } from './enfermero/mi-perfil/mi-perfil';
import { Capacitacion as CapacitacionEnfermero } from './enfermero/capacitacion/capacitacion';
import { Biblioteca as BibliotecaEnfermero } from './enfermero/biblioteca/biblioteca';
import { EventosAdversos as EventosAdversosEnfermero } from './enfermero/eventos-adversos/eventos-adversos';
import { AtencionPaciente as AtencionPacienteEnfermero } from './enfermero/atencion-paciente/atencion-paciente';
import { Reportes as ReportesEnfermero } from './enfermero/reportes/reportes';
import { EventosAdversosForm as EventosAdversosFormEnfermero } from './enfermero/eventos-adversos/eventos-adversos-form';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // Medico routes
  { path: 'medico/dashboard', component: DashboardMedico },
  { path: 'medico/mi-perfil', component: MiPerfil },
  { path: 'medico/capacitacion', component: Capacitacion },
  { path: 'medico/biblioteca', component: Biblioteca },
  { path: 'medico/eventos-adversos', component: EventosAdversos },
  { path: 'medico/atencion-paciente', component: AtencionPaciente },
  { path: 'medico/reportes', component: Reportes },
  { path: 'medico/eventos-adversos/form', component: EventosAdversosForm },

  // Paciente routes
  { path: 'paciente/dashboard', component: DashboardPaciente },
  { path: 'paciente/mi-perfil', component: MiPerfilPaciente },
  { path: 'paciente/capacitacion', component: CapacitacionPaciente },
  { path: 'paciente/biblioteca', component: BibliotecaPaciente },
  { path: 'paciente/eventos-adversos', component: EventosAdversosPaciente },
  { path: 'paciente/atencion-paciente', component: AtencionPacientePaciente },
  { path: 'paciente/reportes', component: ReportesPaciente },
  { path: 'paciente/eventos-adversos/form', component: EventosAdversosFormPaciente },

  // Enfermero routes
  { path: 'enfermero/dashboard', component: DashboardEnfermero },
  { path: 'enfermero/mi-perfil', component: MiPerfilEnfermero },
  { path: 'enfermero/capacitacion', component: CapacitacionEnfermero },
  { path: 'enfermero/biblioteca', component: BibliotecaEnfermero },
  { path: 'enfermero/eventos-adversos', component: EventosAdversosEnfermero },
  { path: 'enfermero/atencion-paciente', component: AtencionPacienteEnfermero },
  { path: 'enfermero/reportes', component: ReportesEnfermero },
  { path: 'enfermero/eventos-adversos/form', component: EventosAdversosFormEnfermero }
];
