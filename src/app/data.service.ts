import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigDto } from './models/config-dto';
import { AffectationDto } from './models/affectation-dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private configUrl = 'http://localhost:85/config';
  private affectationUrl = 'http://localhost:85/affectation';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les configurations
  getConfigs(): Observable<ConfigDto[]> {
    return this.http.get<ConfigDto[]>(this.configUrl);
  }

  // Méthode pour récupérer les affectations
  getAffectations(): Observable<AffectationDto[]> {
    return this.http.get<AffectationDto[]>(this.affectationUrl);
  }
}
