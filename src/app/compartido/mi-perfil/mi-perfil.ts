import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { ServicioSesion } from '../../core/services/session.service';

@Component({
  selector: 'app-mi-perfil',
  imports: [CommonModule, Sidebar, Header],
  templateUrl: './mi-perfil.html',
  styleUrl: './mi-perfil.css',
  standalone: true
})
export class MiPerfil {
  private sesion = inject(ServicioSesion);

  esClinico = computed(() => {
    const rol = this.sesion.rol();
    return rol === 'medico' || rol === 'enfermero';
  });

  perfil = {
    id: '',
    nombre: '',
    areaMedica: '',
    pacientesAsignados: [] as string[],
    simulacionesRecomendadas: [] as string[],
    reportesPendientes: [] as string[],
    reportesAdjuntos: [] as string[],
    proximasCitas: [] as string[]
  };
}
