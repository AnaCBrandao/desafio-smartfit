import { Component, Input } from '@angular/core';
import { Location } from '../../interfaces/location';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card!: Location

  constructor() {}


}
