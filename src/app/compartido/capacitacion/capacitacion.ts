import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-capacitacion',
  imports: [CommonModule, FormsModule, Sidebar, Header, MatIconModule],
  templateUrl: './capacitacion.html',
  styleUrl: './capacitacion.css',
  standalone: true
})
export class Capacitacion {
  options = [
    {
      title: 'Escenario de Triage',
      difficulties: ['Fácil', 'Moderado', 'Difícil'],
      expanded: false
    },
    {
      title: 'Escenario de Hospitalización',
      difficulties: ['Fácil', 'Moderado', 'Difícil'],
      expanded: false
    }
  ];

  patients = [
    'Paciente X',
    'Paciente Y',
    'Paciente Z',
    'Paciente W'
  ];

  selectedScenario: any = null;
  selectedDifficulty: string = '';
  selectedPatient: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  toggle(scenario: any) {
    this.options.forEach(option => {
      if (option !== scenario) {
        option.expanded = false;
      }
    });
    scenario.expanded = !scenario.expanded;
  }

  selectDifficulty(scenario: any, difficulty: string) {
    this.selectedScenario = scenario;
    this.selectedDifficulty = difficulty;
    this.selectedPatient = '';
  }

  goBack() {
    this.selectedScenario = null;
    this.selectedDifficulty = '';
    this.selectedPatient = '';
  }

  getVideoEmbedUrl(): SafeResourceUrl | null {
    // Por ahora no implementamos el video, retornamos null
    return null;
  }
}
