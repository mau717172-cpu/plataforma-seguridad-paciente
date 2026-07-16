import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { IcdListComponent } from './icd-list/icd-list.component';

@Component({
  selector: 'app-biblioteca',
  imports: [Sidebar, Header, IcdListComponent],
  templateUrl: './biblioteca.html',
  styleUrl: './biblioteca.css',
  standalone: true
})
export class Biblioteca {

}
