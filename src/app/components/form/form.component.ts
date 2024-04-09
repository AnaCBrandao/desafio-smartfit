import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindUnitsService } from '../../services/find-units.service';

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
  results = []
  formGroup!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private unitsService: FindUnitsService
  ){}

  ngOnInit(): void {
    this.unitsService.getAllUnits().subscribe(data => console.log(data))
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
  }

  onSubmit(){}

  onClear(){}
}
