import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private baseUrl = 'http://localhost:5000'; // Assurez-vous de modifier l'URL en fonction de votre configuration Flask

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/players');
  }

  predict(nom_joueur: string): Observable<any> {
    return this.http.post<any>('http://localhost:5000/predict', { nom_joueur }, { headers: { 'Content-Type': 'application/json' } });
  }
}
