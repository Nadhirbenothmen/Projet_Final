import { Component } from '@angular/core';
import { PredictionService } from './prediction.service';

@Component({
  selector: 'app-ml-medical',
  templateUrl: './ml-medical.component.html',
  styleUrls: ['./ml-medical.component.css']
})
export class MlMedicalComponent {

  players?: string[] ;
  selectedPlayer: string | null = null;
  prediction?: any;
  nom_joueur?:string;

  constructor(private dataService: PredictionService) {
    this.getPlayers();
  }

  getPlayers(): void {
    this.dataService.getPlayers().subscribe(
      response => {
        this.players = response.players;
      },
      error => {
        console.error('Error fetching players:', error);
      }
    );
  }

  predict(event: any): void {
    const selectedPlayer = event.target.value;
    if (selectedPlayer) {
   
      console.log(selectedPlayer);
      this.dataService.predict(selectedPlayer).subscribe(
        response => {
          this.prediction = response;
          console.log(this.prediction);
        },
        
        error => {
          console.error('Prediction error:', error);
        }
      );
    }
  }
  
}
