import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServicioSesion } from '../services/session.service';

export const rolClinicoGuard: CanActivateFn = () => {
  const sesion = inject(ServicioSesion);
  if (sesion.rol() === 'paciente') {
    return inject(Router).parseUrl('/dashboard');
  }
  return true;
};
