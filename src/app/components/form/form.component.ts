import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindUnitsService } from '../../services/find-units.service';
import { FilterUnitsService } from '../../services/filter-units.service';
import { Location } from '../../interfaces/location';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  results: Location[] = []
  filteredResults: Location[] = []
  formGroup!: FormGroup
  @Output() submitEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private unitsService: FindUnitsService,
    private filterUnitsService: FilterUnitsService,
  ){}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
    this.unitsService.getAllUnits().subscribe(data => {
      this.results = data;
      this.filteredResults = data;
    });
  }

  onSubmit(){
    let { showClosed, hour } = this.formGroup.value
    this.filteredResults = this.filterUnitsService.filter(this.results, showClosed, hour);
    this.unitsService.setFilteredUnits(this.filteredResults);

    this.submitEvent.emit();
  }

  onClear(){
    this.formGroup.reset();
  }
}
