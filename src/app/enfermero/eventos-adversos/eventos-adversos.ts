import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';

@Component({
  selector: 'app-eventos-adversos',
  imports: [CommonModule, RouterModule, Sidebar, Header],
  templateUrl: './eventos-adversos.html',
  styleUrl: './eventos-adversos.css',
  standalone: true
})
export class EventosAdversos {
  patientId = '';

  constructor(private router: Router) {
  }

  searchPatient(input: HTMLInputElement) {
    const id = input.value.trim();
    this.patientId = id;
    this.router.navigate(['/enfermero/eventos-adversos/form'], { state: { patientId: id } });
  }
}
