import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigDto } from '../models/config-dto';
import { AffectationDto } from '../models/affectation-dto';
import { StoppointnDto } from '../models/stoppoint-dto';
import {TimeDto} from '../models/time-dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les configurations
  getConfigs(): Observable<ConfigDto[]> {
    return this.http.get<ConfigDto[]>(this.url + 'config');
  }

  createConfig(config : ConfigDto): Observable<ConfigDto>{
    return this.http.post<ConfigDto>(this.url + 'config', config);
  }

  getStoppoints(config: ConfigDto): Observable<StoppointnDto[]> {
    return this.http.get<StoppointnDto[]>(this.url + 'arret?configId='+config.id);
  }

  // Méthode pour récupérer les affectations
  getAffectations(config: ConfigDto, stoppoint: StoppointnDto): Observable<AffectationDto[]> {
    return this.http.get<AffectationDto[]>(this.url + 'affectations?configId='+config.id+"&stopCode="+stoppoint.area);
  }

  getTimes(config: ConfigDto, affectation: AffectationDto): Observable<TimeDto[]> {
    return this.http.get<TimeDto[]>(this.url + 'times?configId='+config.id+ "&stopCode=" + affectation.stopCode + "&line="+affectation.line +"&destination=" + affectation.destination);
  }
}
