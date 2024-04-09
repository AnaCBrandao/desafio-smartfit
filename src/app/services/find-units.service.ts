import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsResponse } from '../interfaces/units-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindUnitsService {
  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUnits(): Observable<UnitsResponse> {
    return this.httpClient.get<UnitsResponse>(this.apiUrl)
  }
}
