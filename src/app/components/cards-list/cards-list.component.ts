import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Location } from '../../interfaces/location';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent {
  @Input() unitsList: Location[] = []

  constructor(
  ){}

  
}
