import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigDto } from './models/config-dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:85/config';

  constructor(private http: HttpClient) {}

  getConfigs(): Observable<ConfigDto[]> {
    return this.http.get<ConfigDto[]>(this.apiUrl);
  }
}
