import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ServicioSesion } from '../../core/services/session.service';
import { obtenerIdsMenuPermitidos } from '../../core/models/rol.model';

interface ElementoBarralateral {
  id: string;
  etiqueta: string;
  icono: string;
  ruta: string;
}

const TODOS_ELEMENTOS_MENU: ElementoBarralateral[] = [
  { id: 'perfil', etiqueta: 'Mi perfil', icono: 'person', ruta: '/mi-perfil' },
  { id: 'capacitacion', etiqueta: 'Capacitación por simulación', icono: 'settings', ruta: '/capacitacion' },
  { id: 'biblioteca', etiqueta: 'Biblioteca de protocolos', icono: 'description', ruta: '/biblioteca' },
  { id: 'eventos', etiqueta: 'Eventos adversos', icono: 'warning', ruta: '/eventos-adversos' },
  { id: 'atencion', etiqueta: 'Atención del paciente', icono: 'local_hospital', ruta: '/atencion-paciente' },
  { id: 'reportes', etiqueta: 'Reportes', icono: 'bar_chart', ruta: '/reportes' }
];

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  standalone: true
})
export class Sidebar {
  private sesion = inject(ServicioSesion);
  private router = inject(Router);

  elementosMenu = computed(() => {
    const idsPermitidos = obtenerIdsMenuPermitidos(this.sesion.rol());
    return TODOS_ELEMENTOS_MENU.filter(item => idsPermitidos.includes(item.id));
  });

  esActivo(ruta: string): boolean {
    return this.router.url === ruta;
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }
}
