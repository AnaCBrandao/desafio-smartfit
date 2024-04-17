import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { LegendComponent } from './components/legend/legend.component';
import { FooterComponent } from './components/footer/footer.component';
import { BehaviorSubject } from 'rxjs';
import { CardsListComponent } from "./components/cards-list/cards-list.component";
import { Location } from './interfaces/location';
import { FindUnitsService } from './services/find-units.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FormComponent,
        LegendComponent,
        FooterComponent,
        CommonModule,
        CardsListComponent
    ]
})
export class AppComponent {
  title = 'desafio-smartfit';
  showCards = new BehaviorSubject(false)
  unitsList: Location[] = [];

  constructor(
    private unitsService: FindUnitsService
  ){}

  onSubmit(){
    this.unitsList = this.unitsService.getFilteredUnits() 
    this.showCards.next(true)
  }
}

// 2:19:41
