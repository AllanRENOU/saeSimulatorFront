import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigDto } from '../models/config-dto';
import { AffectationDto } from '../models/affectation-dto';
import { StoppointnDto } from '../models/stoppoint-dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:85/';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les configurations
  getConfigs(): Observable<ConfigDto[]> {
    return this.http.get<ConfigDto[]>(this.url + 'config');
  }

  getStoppoints(): Observable<StoppointnDto[]> {
    return this.http.get<StoppointnDto[]>(this.url + 'stoppoints');
  }

  // Méthode pour récupérer les affectations
  getAffectations(): Observable<AffectationDto[]> {
    return this.http.get<AffectationDto[]>(this.url + 'affectation');
  }

  getTimes(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'times');
  }
}
