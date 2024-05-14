import { Component } from '@angular/core';
import { PredictionService } from './prediction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ml-prep-physique',
  templateUrl: './ml-prep-physique.component.html',
  styleUrls: ['./ml-prep-physique.component.css']
})
export class MlPrepPhysiqueComponent {

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
