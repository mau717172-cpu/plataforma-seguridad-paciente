import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Header } from '../header/header';
import { ServicioSesion } from '../../core/services/session.service';
import { obtenerIdsMenuPermitidos } from '../../core/models/rol.model';

interface ElementoMenu {
  id: string;
  titulo: string;
  icono: string;
  color: string;
  ruta: string;
}

const TODOS_ELEMENTOS_MENU: ElementoMenu[] = [
  {
    id: 'perfil',
    titulo: 'Mi perfil',
    icono: 'person',
    color: '#E3F2FD',
    ruta: '/mi-perfil'
  },
  {
    id: 'capacitacion',
    titulo: 'Capacitación por simulación',
    icono: 'settings',
    color: '#E3F2FD',
    ruta: '/capacitacion'
  },
  {
    id: 'biblioteca',
    titulo: 'Biblioteca de protocolos',
    icono: 'description',
    color: '#E3F2FD',
    ruta: '/biblioteca'
  },
  {
    id: 'eventos',
    titulo: 'Reporte de eventos adversos',
    icono: 'assignment',
    color: '#E3F2FD',
    ruta: '/eventos-adversos'
  },
  {
    id: 'atencion',
    titulo: 'Atención del paciente',
    icono: 'local_hospital',
    color: '#E3F2FD',
    ruta: '/atencion-paciente'
  },
  {
    id: 'reportes',
    titulo: 'Reportes',
    icono: 'bar_chart',
    color: '#E3F2FD',
    ruta: '/reportes'
  }
];

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true
})
export class Dashboard {
  private sesion = inject(ServicioSesion);
  private router = inject(Router);

  elementosMenu = computed(() => {
    const idsPermitidos = obtenerIdsMenuPermitidos(this.sesion.rol());
    return TODOS_ELEMENTOS_MENU.filter(item => idsPermitidos.includes(item.id));
  });

  navegarA(ruta: string) {
    this.router.navigate([ruta]);
  }
}
