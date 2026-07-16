import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ServicioSesion } from '../../core/services/session.service';
import { Rol } from '../../core/models/rol.model';

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

  private router = inject(Router);
  private sesion = inject(ServicioSesion);

  ingresar() {
    if (this.perfil === 'medico' || this.perfil === 'paciente' || this.perfil === 'enfermero') {
      this.sesion.establecerRol(this.perfil as Rol);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Perfil no disponible por ahora');
    }
  }
}
