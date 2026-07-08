import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  standalone: true
})
export class Sidebar {
  @Input() activeRoute: string = '';

  menuItems: SidebarItem[] = [
    { label: 'Mi perfil', icon: 'person', route: '/medico/mi-perfil' },
    { label: 'Capacitación por simulación', icon: 'settings', route: '/medico/capacitacion' },
    { label: 'Biblioteca de protocolos', icon: 'description', route: '/medico/biblioteca' },
    { label: 'Eventos adversos', icon: 'warning', route: '/medico/eventos-adversos' },
    { label: 'Atención del paciente', icon: 'local_hospital', route: '/medico/atencion-paciente' },
    { label: 'Reportes', icon: 'bar_chart', route: '/medico/reportes' }
  ];

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
