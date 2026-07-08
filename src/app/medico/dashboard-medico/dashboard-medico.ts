import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Header } from '../header/header';

interface MenuItem {
  id: string;
  title: string;
  icon: string;
  color: string;
  route: string;
}

@Component({
  selector: 'app-dashboard-medico',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, Header],
  templateUrl: './dashboard-medico.html',
  styleUrl: './dashboard-medico.css',
  standalone: true
})
export class DashboardMedico {

  menuItems: MenuItem[] = [
    {
      id: 'perfil',
      title: 'Mi perfil',
      icon: 'person',
      color: '#E3F2FD',
      route: '/medico/mi-perfil'
    },
    {
      id: 'capacitacion',
      title: 'Capacitación por simulación',
      icon: 'settings',
      color: '#E3F2FD',
      route: '/medico/capacitacion'
    },
    {
      id: 'biblioteca',
      title: 'Biblioteca de protocolos',
      icon: 'description',
      color: '#E3F2FD',
      route: '/medico/biblioteca'
    },
    {
      id: 'eventos',
      title: 'Reporte de eventos adversos',
      icon: 'assignment',
      color: '#E3F2FD',
      route: '/medico/eventos-adversos'
    },
    {
      id: 'atencion',
      title: 'Atención del paciente',
      icon: 'local_hospital',
      color: '#E3F2FD',
      route: '/medico/atencion-paciente'
    },
    {
      id: 'reportes',
      title: 'Reportes',
      icon: 'bar_chart',
      color: '#E3F2FD',
      route: '/medico/reportes'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
