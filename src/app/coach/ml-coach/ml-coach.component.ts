import { Component } from '@angular/core';
import { PredictionService } from './prediction.service';

@Component({
  selector: 'app-ml-coach',
  templateUrl: './ml-coach.component.html',
  styleUrls: ['./ml-coach.component.css']
})
export class MlCoachComponent {
  team: string = "";
  predictedRank?: number;
  formationPrediction?: string;
  players?: string[] ;
  constructor(private predictionService: PredictionService) {this.getPlayers();}

  getPlayers(): void {
    this.predictionService.getPlayers().subscribe(
      response => {
        this.players = response.players;
      },
      error => {
        console.error('Error fetching players:', error);
      }
    );
  }
  predict(event: any) {
    const team = event.target.value;
    console.log(team)
    this.predictionService.predictRank(team).subscribe(
      (response) => {
        this.predictedRank = response.predicted_rank;
        console.log(this.predictedRank)
      },
      (error) => {
        console.error(error);
      }
    );
  }


  predictFormation(): void {
    this.predictionService.predictFormation().subscribe(
      (response) => {
        this.formationPrediction = response.formation_prediction;
        console.log(this.formationPrediction)
      },
      (error) => {
        console.error(error);
      }
    );
  }

 
}
