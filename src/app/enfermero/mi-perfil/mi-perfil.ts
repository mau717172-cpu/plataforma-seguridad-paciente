import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';

@Component({
  selector: 'app-mi-perfil',
  imports: [CommonModule, Sidebar, Header],
  templateUrl: './mi-perfil.html',
  styleUrl: './mi-perfil.css',
  standalone: true
})
export class MiPerfil {
  profile = {
    id: '',
    name: '',
    medicalArea: '',
    assignedPatients: [] as string[],
    recommendedSimulations: [] as string[],
    pendingReports: [] as string[]
  };
}

