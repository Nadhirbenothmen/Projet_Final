import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/club');
  }
  predictRank(team: string): Observable<any> {
    return this.http.post<any>('http://localhost:5000/predict_rank', { team: team });
  }
  predictFormation(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/predict_formation');
  }
}
