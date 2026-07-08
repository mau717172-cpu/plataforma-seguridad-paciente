import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ]
})
export class LoginComponent {

  perfil: string = '';
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  ingresar() {
    if (this.perfil === 'medico') {
      this.router.navigate(['/medico/dashboard']);
    } else if (this.perfil === 'paciente') {
      this.router.navigate(['/paciente/dashboard']);
    } else if (this.perfil === 'enfermero') {
      this.router.navigate(['/enfermero/dashboard']);
    } else {
      alert('Perfil no disponible por ahora');
    }
  }
}
