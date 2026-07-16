export type Rol = 'medico' | 'enfermero' | 'paciente';

export function obtenerIdsMenuPermitidos(rol: Rol | null): string[] {
  if (rol === 'paciente') {
    return ['perfil', 'capacitacion', 'biblioteca', 'reportes'];
  }
  return ['perfil', 'capacitacion', 'biblioteca', 'eventos', 'atencion', 'reportes'];
}
