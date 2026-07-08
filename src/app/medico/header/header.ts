import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header implements OnInit {
  @Input() currentPage: string = '';
  @Input() parentPage: string = '';

  userRole: string = '';
  roleColor: string = '#007bff';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.detectUserRole();
  }

  detectUserRole(): void {
    const url = this.router.url;

    if (url.includes('/paciente/')) {
      this.userRole = 'Paciente';
      this.roleColor = '#28a745'; // Verde
    } else if (url.includes('/enfermero/')) {
      this.userRole = 'Enfermero';
      this.roleColor = '#ffc107'; // Amarillo
    } else if (url.includes('/medico/')) {
      this.userRole = 'Médico';
      this.roleColor = '#007bff'; // Azul
    }
  }

  navigateToHome() {
    if (this.userRole === 'Paciente') {
      this.router.navigate(['/paciente/dashboard']);
    } else if (this.userRole === 'Enfermero') {
      this.router.navigate(['/enfermero/dashboard']);
    } else {
      this.router.navigate(['/medico/dashboard']);
    }
  }
}
