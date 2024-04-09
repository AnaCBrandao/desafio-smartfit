import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { UnitsResponse } from '../interfaces/units-response';
import { HttpClient } from '@angular/common/http';
import { Location } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class FindUnitsService {
  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"

  private allUnitsSubject: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>([]);
  private allUnits$: Observable<Location[]> = this.allUnitsSubject.asObservable();
  private filteredUnits: Location[] = [];

  constructor(
    private httpClient: HttpClient
  ) { 
    this.httpClient.get<UnitsResponse>(this.apiUrl).subscribe(data => {
      this.allUnitsSubject.next(data.locations);
      this.filteredUnits = data.locations;
    });
  }

  getAllUnits(): Observable<Location[]> {
    return this.allUnits$;
  }

  getFilteredUnits() {
    return this.filteredUnits;
  }

  setFilteredUnits(value: Location[]) {
    this.filteredUnits = value;
  }
}
