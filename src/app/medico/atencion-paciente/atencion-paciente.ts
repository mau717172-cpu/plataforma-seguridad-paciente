import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-atencion-paciente',
  imports: [CommonModule, FormsModule, Sidebar, Header, MatIconModule],
  templateUrl: './atencion-paciente.html',
  styleUrl: './atencion-paciente.css',
  standalone: true
})
export class AtencionPaciente {
  reports = ['Reporte de población de lesiones', 'Consultas pendientes'];
  selectedReport = '';
  patients = ['Paciente 1', 'Paciente 2', 'Paciente 3'];
  selectedPatient = '';

  externalAreas = [
    { label: 'Cuello', checked: false },
    { label: 'Hombro', checked: false },
    { label: 'Brazos', checked: false },
    { label: 'Manos', checked: false },
    { label: 'Piernas', checked: false },
    { label: 'Pies', checked: false },
    { label: 'Abdomen', checked: false },
    { label: 'Espalda', checked: false }
  ];

  internalSystems = [
    {
      label: 'Sistema Cardiaco',
      checked: false,
      selected: false,
      organs: [
        { label: 'Corazón', checked: false },
        { label: 'Vasos sanguíneos', checked: false }
      ]
    },
    {
      label: 'Sistema Respiratorio',
      checked: false,
      selected: false,
      organs: [
        { label: 'Pulmones', checked: false },
        { label: 'Tráquea', checked: false },
        { label: 'Bronquios', checked: false }
      ]
    },
    {
      label: 'Sistema Digestivo',
      checked: false,
      selected: false,
      organs: [
        { label: 'Estómago', checked: false },
        { label: 'Intestinos', checked: false },
        { label: 'Hígado', checked: false }
      ]
    },
    {
      label: 'Sistema Nervioso',
      checked: false,
      selected: false,
      organs: [
        { label: 'Cerebro', checked: false },
        { label: 'Médula espinal', checked: false }
      ]
    }
  ];

  showReportForm = false;
  reportForm = {
    tipoLesion: '',
    gravedad: '',
    riesgos: '',
    tratamiento: ''
  };

  selectReport(report: string) {
    this.selectedReport = report;
    this.selectedPatient = '';
    this.showReportForm = false;
    this.resetSelections();
  }

  selectPatient(patient: string) {
    this.selectedPatient = patient;
    this.showReportForm = false;
    this.reportForm = { tipoLesion: '', gravedad: '', riesgos: '', tratamiento: '' };
    this.resetSelections();
  }

  toggleSystem(system: any) {
    system.selected = !system.selected;
    if (!system.selected) {
      system.organs.forEach((organ: any) => organ.checked = false);
    }
  }

  prepareReport() {
    this.showReportForm = true;
  }

  submitReport() {
    console.log('Reporte enviado', {
      reportType: this.selectedReport,
      patient: this.selectedPatient,
      externalAreas: this.externalAreas.filter(area => area.checked).map(area => area.label),
      internalSystems: this.internalSystems.filter(system => system.checked).map(system => system.label),
      selectedOrgans: this.internalSystems
        .flatMap(system => system.organs)
        .filter((organ: any) => organ.checked)
        .map((organ: any) => organ.label),
      form: this.reportForm
    });
    this.showReportForm = false;
    this.reportForm = { tipoLesion: '', gravedad: '', riesgos: '', tratamiento: '' };
  }

  resetSelections() {
    this.externalAreas.forEach(area => area.checked = false);
    this.internalSystems.forEach(system => {
      system.checked = false;
      system.selected = false;
      system.organs.forEach((organ: any) => organ.checked = false);
    });
  }
}
