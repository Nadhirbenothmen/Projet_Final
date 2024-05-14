import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-inscription-popup',
  templateUrl: './inscription-popup.component.html',
  styleUrls: ['./inscription-popup.component.css']
})
export class InscriptionPopupComponent {
  constructor(public dialogRef: MatDialogRef<InscriptionPopupComponent>) {}

  close(): void {
    this.dialogRef.close();
  }

}
