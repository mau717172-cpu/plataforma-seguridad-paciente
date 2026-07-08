import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';

interface FormField {
  label: string;
  type: 'textarea' | 'text' | 'number' | 'select' | 'radio';
  value: string;
  options?: string[];
}

interface FormSection {
  groupName?: string;
  fields: FormField[];
}

@Component({
  selector: 'app-eventos-adversos-form',
  imports: [CommonModule, FormsModule, RouterModule, Sidebar, Header],
  templateUrl: './eventos-adversos-form.html',
  styleUrl: './eventos-adversos-form.css',
  standalone: true
})
export class EventosAdversosForm {
  patientId = '';

  patientInfo = {
    name: 'Nombre de paciente',
    gender: 'Femenino',
    number: '000123'
  };

  selectedPhase = 'preoperatorio';

  preoperativeChecks: FormSection[] = [
    {
      fields: [{ label: 'Historia Médica', type: 'textarea', value: '' }]
    },
    {
      groupName: 'Signos Vitales',
      fields: [
        { label: 'LPM (Latidos por minuto)', type: 'number', value: '' },
        { label: 'Observaciones', type: 'textarea', value: '' }
      ]
    },
    {
      groupName: 'Control del dolor',
      fields: [
        { label: 'Nivel de dolor', type: 'select', value: '', options: ['1 - Sin dolor', '2', '3', '4', '5', '6', '7', '8', '9', '10 - Dolor máximo'] },
        { label: 'Observaciones', type: 'textarea', value: '' }
      ]
    },
    {
      fields: [{ label: 'Educación preoperatoria', type: 'textarea', value: '' }]
    },
    {
      fields: [{ label: 'Preparación del paciente', type: 'textarea', value: '' }]
    },
    {
      fields: [{ label: 'Resultados de laboratorio', type: 'textarea', value: '' }]
    },
    {
      fields: [{ label: 'Informe del paciente de enfermería', type: 'textarea', value: '' }]
    },
    {
      fields: [{ label: 'Disponibilidad/preparación del quirófano', type: 'textarea', value: '' }]
    },
    {
      fields: [{ label: 'Gestión de riesgos', type: 'textarea', value: '' }]
    },
    {
      fields: [{ label: 'Tipo de sangre', type: 'select', value: '', options: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] }]
    }
  ];

  medicationChecks: FormField[] = [
    { label: 'Antibióticos', type: 'textarea', value: '' },
    { label: 'Bloqueadores beta', type: 'textarea', value: '' },
    { label: 'Preparación intestinal', type: 'textarea', value: '' },
    { label: 'Ingresar Otro', type: 'textarea', value: '' }
  ];

  psychosocialChecks: FormField[] = [
    { label: 'Presente familiar', type: 'radio', value: '', options: ['Sí', 'No'] },
    { label: 'Nombre del familiar', type: 'text', value: '' },
    { label: 'Relación', type: 'textarea', value: '' },
    { label: 'Educación familiar', type: 'radio', value: '', options: ['Sí', 'No'] }
  ];

  operatorioChecks: FormField[] = [
    { label: 'Verificación de paciente', type: 'textarea', value: '' },
    { label: 'Equipo quirúrgico', type: 'textarea', value: '' },
    { label: 'Tiempo de cirugía', type: 'textarea', value: '' },
    { label: 'Anestesia', type: 'textarea', value: '' },
    { label: 'Hemorragia', type: 'textarea', value: '' }
  ];

  postoperatorioChecks: FormField[] = [
    { label: 'Recuperación', type: 'textarea', value: '' },
    { label: 'Cuidados postoperatorios', type: 'textarea', value: '' },
    { label: 'Medicamentos postoperatorios', type: 'textarea', value: '' },
    { label: 'Alta médica', type: 'textarea', value: '' },
    { label: 'Seguimiento', type: 'textarea', value: '' }
  ];

  // Nuevos campos dinámicos
  observaciones = '';
  requiereSeguimiento = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { patientId?: string } | undefined;
    this.patientId = state?.patientId ?? '';
  }

  goBack() {
    this.router.navigate(['/enfermero/eventos-adversos']);
  }

  selectPhase(phase: string) {
    this.selectedPhase = phase;
  }

  submitReport() {
    console.log('Guardar reporte', {
      patientId: this.patientId,
      phase: this.selectedPhase,
      preoperative: this.preoperativeChecks,
      medication: this.medicationChecks,
      psychosocial: this.psychosocialChecks,
      observaciones: this.observaciones,
      requiereSeguimiento: this.requiereSeguimiento
    });
    alert('Formulario de reporte guardado (simulado).');
  }
}
