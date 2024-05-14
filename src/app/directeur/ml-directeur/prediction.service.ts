import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private http: HttpClient) { }


  getPlayers(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/playersValue');
  }
  predictValue(nomJoueur: string): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:5000/predict_player_value', { player_name: nomJoueur });
  }
  analyseSentiments(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:5000/analyse_sentiments');
  }
}
