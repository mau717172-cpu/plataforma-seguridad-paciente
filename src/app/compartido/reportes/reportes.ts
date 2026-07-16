import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-reportes',
  imports: [CommonModule, FormsModule, RouterModule, Header, Sidebar],
  templateUrl: './reportes.html',
  styleUrls: ['./reportes.css'],
  standalone: true
})
export class Reportes {
  patients = ['Paciente A', 'Paciente B', 'Paciente C'];
  selectedPatient = '';
  pendingReports = [
    { title: 'Reporte de ingreso', status: 'Pendiente' },
    { title: 'Reporte de seguimiento', status: 'Pendiente' }
  ];
  sentReports = [
    { title: 'Reporte de alta', status: 'Enviado' },
    { title: 'Reporte de evaluación inicial', status: 'Enviado' }
  ];
}

