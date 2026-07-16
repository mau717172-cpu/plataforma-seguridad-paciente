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
  idPaciente = '';

  constructor(private router: Router) {
  }

  buscarPaciente(entrada: HTMLInputElement) {
    const id = entrada.value.trim();
    this.idPaciente = id;
    this.router.navigate(['/eventos-adversos/form'], { state: { idPaciente: id } });
  }
}
