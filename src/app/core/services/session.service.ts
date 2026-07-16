import { Injectable, signal } from '@angular/core';
import { Rol } from '../models/rol.model';

const CLAVE_ALMACENAMIENTO = 'sp-rol';

@Injectable({
  providedIn: 'root'
})
export class ServicioSesion {
  #rol = signal<Rol | null>(ServicioSesion.leerRolAlmacenado());

  rol = this.#rol.asReadonly();

  establecerRol(rol: Rol): void {
    this.#rol.set(rol);
    sessionStorage.setItem(CLAVE_ALMACENAMIENTO, rol);
  }

  limpiarRol(): void {
    this.#rol.set(null);
    sessionStorage.removeItem(CLAVE_ALMACENAMIENTO);
  }

  private static leerRolAlmacenado(): Rol | null {
    const almacenado = sessionStorage.getItem(CLAVE_ALMACENAMIENTO);
    if (almacenado === 'medico' || almacenado === 'enfermero' || almacenado === 'paciente') {
      return almacenado;
    }
    return null;
  }
}
