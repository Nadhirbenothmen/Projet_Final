import { Component,OnInit  } from '@angular/core';
import { PredictionService } from './prediction.service';


@Component({
  selector: 'app-ml-directeur',
  templateUrl: './ml-directeur.component.html',
  styleUrls: ['./ml-directeur.component.css']
})
export class MlDirecteurComponent  {

  nomJoueur: string="";
  predictedValue?: number;
  error: string="";
  results: any[] | undefined;
  loading: boolean = false;
  players?: string[] ;
  constructor(private apiService: PredictionService) {this.getPlayers(); }

  getPlayers(): void {
    this.apiService.getPlayers().subscribe(
      response => {
        this.players = response.players;
      },
      error => {
        console.error('Error fetching players:', error);
      }
    );
  }

  predictValue(event: any): void {
    const selectedPlayer = event.target.value;
    this.apiService.predictValue(selectedPlayer)
      .subscribe(
        data => {
          this.predictedValue = data.predicted_value/ 1000000;
          this.error = "";
        },
        error => {
          this.error = error.error.error;
          this.predictedValue = 0;
        }
      );
  }
  fetchSentiments(): void {
    this.loading = true;
    this.apiService.analyseSentiments().subscribe(
      (data) => {
        this.results = data.results;
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
        
      }
    );
  }
 

}
