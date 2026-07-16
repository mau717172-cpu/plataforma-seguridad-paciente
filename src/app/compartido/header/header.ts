import { Component, Input, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ServicioSesion } from '../../core/services/session.service';

const ETIQUETAS_ROL: Record<string, string> = {
  paciente: 'Paciente',
  enfermero: 'Enfermero',
  medico: 'Médico'
};

const COLORES_ROL: Record<string, string> = {
  paciente: '#28a745',
  enfermero: '#ffc107',
  medico: '#007bff'
};

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header {
  @Input() paginaActual: string = '';
  @Input() paginaPrincipal: string = '';

  private sesion = inject(ServicioSesion);
  private router = inject(Router);

  rolUsuario = computed(() => {
    const rol = this.sesion.rol();
    return rol ? ETIQUETAS_ROL[rol] : '';
  });

  colorRol = computed(() => {
    const rol = this.sesion.rol();
    return rol ? COLORES_ROL[rol] : '#007bff';
  });

  navegarAlInicio() {
    this.router.navigate(['/dashboard']);
  }
}
