# Análisis de Código — Plataforma Seguridad Paciente (Demo1)

**Fecha:** 2026-07-02  
**Framework:** Angular 18+ (Standalone Components)  
**Roles:** Médico, Paciente, Enfermero  

---

## 1. Estructura general del proyecto

```
src/app/
├── auth/login/                  ← Login único compartido
├── medico/                      ← 8 módulos
│   ├── dashboard-medico/
│   ├── mi-perfil/
│   ├── capacitacion/
│   ├── biblioteca/
│   ├── eventos-adversos/        ← incluye form separado
│   ├── atencion-paciente/
│   ├── reportes/
│   ├── header/
│   └── sidebar/
├── paciente/                    ← misma estructura (8 módulos)
└── enfermero/                   ← misma estructura (8 módulos)
```

**Total de rutas definidas:** 25 (1 login + 8 por rol)  
**Total de componentes fuente:** ~90 archivos (.ts/.html/.css)

---

## 2. Secciones COMPLETADAS

### Auth
- [x] **Login** (`/login`): Selector de perfil (médico/paciente/enfermero) con navegación al dashboard correspondiente. UI completa con Angular Material.

### Médico
- [x] **Dashboard** (`/medico/dashboard`): Menú de 6 tarjetas con íconos y navegación funcional.
- [x] **Biblioteca** (`/medico/biblioteca`): Integra componente `IcdListComponent` con servicio ICD externo.
- [x] **Capacitación — UI** (`/medico/capacitacion`): Selección de escenario (Triage / Hospitalización), expansión de dificultades (Fácil/Moderado/Difícil), vista de simulación con selector de paciente y placeholder de video.
- [x] **Eventos Adversos — Formulario** (`/medico/eventos-adversos/form`): Formulario extenso con fases (preoperatorio/operatorio/postoperatorio), campos de signos vitales, nivel de dolor, medicamentos, familia, etc.
- [x] **Atención Paciente — UI** (`/medico/atencion-paciente`): Selección de reporte, mapa de lesiones externas e internas con checkboxes jerárquicos, formulario de reporte.
- [x] **Reportes — UI** (`/medico/reportes`): Listado de reportes pendientes y enviados por paciente.
- [x] **Mi Perfil — UI** (`/medico/mi-perfil`): Tarjetas mostrando ID, nombre, área médica, pacientes asignados, simulaciones recomendadas y reportes pendientes.

### Paciente y Enfermero
- [x] **Dashboard**: Mismo esquema que médico, rutas correctas por rol.
- [x] **Biblioteca**: Réplica exacta con ICD funcional.
- [x] **Todos los módulos tienen UI generada**: Los 3 roles tienen todos sus módulos con plantillas HTML y estilos CSS completos.

---

## 3. Secciones PARCIALES (UI lista, lógica incompleta)

| Módulo | Problema |
|--------|----------|
| **Capacitación** (los 3 roles) | `getVideoEmbedUrl()` siempre retorna `null` — el video nunca se reproduce. El selector de paciente existe pero no dispara nada. |
| **Mi Perfil** (los 3 roles) | El objeto `profile` se inicializa vacío (`id: ''`, `name: ''`, listas vacías). No hay carga de datos. La vista siempre muestra `—` y "No hay...". |
| **Atención Paciente** (los 3 roles) | `submitReport()` solo hace `console.log()`. No hay persistencia ni feedback visual al usuario. |
| **Reportes** (los 3 roles) | Listas de reportes son datos hardcodeados. El botón "Rellenar" no tiene acción (`(click)` no está conectado). |
| **Eventos Adversos — Formulario** (los 3 roles) | `submitReport()` solo muestra un `alert('simulado')` y loguea en consola. No persiste datos. |
| **Eventos Adversos — Entry** (los 3 roles) | La búsqueda de paciente pasa el ID por `router.state` pero el formulario usa datos hardcodeados (ignora el ID recibido). |

---

## 4. Funciones/Características FALTANTES

### Autenticación
- No existe `AuthService` ni `AuthGuard`.
- El login **no valida** usuario/contraseña — navega con solo elegir el perfil.
- Cualquier usuario puede acceder a `/medico/dashboard` directamente desde la URL sin pasar por login.

### Integración con backend / datos reales
- Todos los datos son hardcodeados en los componentes (pacientes, reportes, áreas).
- No existe ningún `HttpService` o llamada HTTP (fuera de `icd.service.ts` para la biblioteca ICD).
- No hay modelo de datos compartido (`interfaces/models`) entre roles.

### Capacitación
- Falta implementar `getVideoEmbedUrl()`: debería mapear `(escenario + dificultad + paciente)` a una URL de video real.
- No existe lógica de progreso ni registro de simulaciones completadas.

### Mi Perfil
- Falta un `UserService` o `ProfileService` que cargue los datos del usuario autenticado.
- No hay funcionalidad para editar el perfil.

### Atención Paciente
- `submitReport()` necesita llamada HTTP para guardar el reporte.
- Falta confirmación/feedback visual al usuario después de enviar.

### Reportes
- El botón "Rellenar" no navega a ningún formulario.
- Falta `(click)` handler en el botón de reportes pendientes.
- Los reportes enviados no tienen función de "Ver detalle".

### Eventos Adversos
- Las fases "Operatorio" y "Postoperatorio" tienen campos definidos en el TS pero falta verificar si el template las renderiza correctamente.
- No hay validación de campos obligatorios antes de enviar.

### General
- **Sin route guards**: Rutas protegidas no implementadas.
- **Sin manejo de errores**: No hay `try/catch` ni mensajes de error al usuario.
- **Código duplicado masivo**: `AtencionPaciente` es prácticamente idéntico en los 3 roles. Lo mismo para `Reportes`, `MiPerfil`, `Capacitacion` y `EventosAdversos`.
- **Sin servicio compartido**: `icd.service.ts` está triplicado (uno por rol).
- **Sin estado global**: No hay `NgRx`, `signals store` ni servicio singleton para manejar estado de sesión.

---

## 5. Resumen por módulo

| Módulo | Estado UI | Estado Lógica | Conectado a datos |
|--------|-----------|---------------|-------------------|
| Login | ✅ Completo | ⚠️ Sin validación | ❌ No |
| Dashboard (3 roles) | ✅ Completo | ✅ Navegación OK | ❌ No |
| Mi Perfil (3 roles) | ✅ Completo | ❌ Sin carga | ❌ No |
| Capacitación (3 roles) | ✅ Completo | ❌ Video roto | ❌ No |
| Biblioteca (3 roles) | ✅ Completo | ✅ ICD funcional | ✅ Parcial (ICD API) |
| Eventos Adversos (3 roles) | ✅ Completo | ⚠️ Solo console.log | ❌ No |
| Atención Paciente (3 roles) | ✅ Completo | ⚠️ Solo console.log | ❌ No |
| Reportes (3 roles) | ✅ Completo | ❌ Botón sin acción | ❌ No |

---

## 6. Prioridades recomendadas

1. **AuthGuard + AuthService** — sin esto la app no tiene seguridad básica.
2. **UserService** — para cargar datos reales en Mi Perfil.
3. **Implementar `getVideoEmbedUrl()`** — bloquea el módulo de capacitación.
4. **Conectar `submitReport()`** a un endpoint HTTP real.
5. **Botón "Rellenar" en Reportes** — conectar a navegación o formulario.
6. **Refactorizar código duplicado** — servicios compartidos, componentes base por rol.
