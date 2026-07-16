import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IcdService } from '../icd.service';

// Componente para mostrar la lista de códigos ICD-11
@Component({
  selector: 'app-icd-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './icd-list.component.html',
  styleUrls: ['./icd-list.component.css']
})
export class IcdListComponent implements OnInit {
  // Variable para almacenar los datos de la API
  icdData: any = null;

  // Variable para manejar el estado de carga
  loading: boolean = true;

  // Variable para manejar errores
  error: string | null = null;

  // Campo de búsqueda
  searchTerm: string = '';

  // Datos filtrados para la búsqueda
  filteredData: any = null;

  // Inyección del servicio ICD
  constructor(private icdService: IcdService) { }

  // Método del ciclo de vida que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Llamar al servicio para obtener los códigos ICD
    this.icdService.getCodes().subscribe({
      next: (data) => {
        // Guardar los datos obtenidos
        this.icdData = data;
        this.filteredData = data;
        this.loading = false;
      },
      error: (err) => {
        // Manejar errores
        this.error = 'Error al cargar los códigos ICD. Verifica la conexión a internet.';
        this.loading = false;
        console.error('Error en la carga de ICD:', err);
      }
    });
  }

  // Método para filtrar los resultados por término de búsqueda
  onSearch(): void {
    if (!this.searchTerm || !this.searchTerm.trim()) {
      // Si no hay término, mostrar todos los datos
      this.filteredData = this.icdData;
      return;
    }

    // Filtrar datos basado en el término de búsqueda
    const term = this.searchTerm.toLowerCase();
    const filtered = this.filterIcdData(this.icdData, term);
    this.filteredData = filtered;
  }

  // Método para filtrar la estructura de ICD
  private filterIcdData(data: any, term: string): any {
    if (!data) return null;

    // Copiar el objeto raíz
    const result = { ...data };

    // Si hay capítulos, filtrarlos
    if (data.child && Array.isArray(data.child)) {
      result.child = data.child
        .map((chapter: any) => this.filterChapter(chapter, term))
        .filter((chapter: any) => chapter !== null);

      // Si no hay capítulos después del filtro, retornar null
      if (result.child.length === 0) {
        return null;
      }
    }

    return result;
  }

  // Método para filtrar un capítulo individual
  private filterChapter(chapter: any, term: string): any {
    // Verificar si el título del capítulo contiene el término
    const chapterTitle = chapter.title?.['@value']?.toLowerCase() || '';
    const chapterMatches = chapterTitle.includes(term);

    // Filtrar categorías dentro del capítulo
    let filteredCategories: any[] = [];
    if (chapter.child && Array.isArray(chapter.child)) {
      filteredCategories = chapter.child.filter((category: any) => {
        const categoryTitle = category.title?.['@value']?.toLowerCase() || '';
        return categoryTitle.includes(term);
      });
    }

    // Retornar capítulo si coincide con búsqueda o tiene categorías que coinciden
    if (chapterMatches || filteredCategories.length > 0) {
      const filteredChapter = { ...chapter };
      if (filteredCategories.length > 0) {
        filteredChapter.child = filteredCategories;
      }
      return filteredChapter;
    }

    return null;
  }
}
