import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GameService} from "../../services/games/game.service";
import {AchatRequest} from "../../requests/achat-request";

@Component({
  selector: 'app-delete-achat-modal',
  templateUrl: './delete-achat-modal.component.html',
  styleUrls: ['./delete-achat-modal.component.css']
})
export class DeleteAchatModalComponent {

  constructor(
    private dialogRef: MatDialogRef<DeleteAchatModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private jeuService: GameService
  ) {
  }

  onSave(): void {
    console.log('Achat jeu id :', this.data.id);

    this.jeuService.deleteAchat(this.data.id).subscribe(
      (createdAchat: AchatRequest) => {
        console.log('Cancel achat :', createdAchat);
        this.dialogRef.close("success");

      },
      (error) => {
        console.error('Erreur lors du cancel de l\'achat', error);
        this.dialogRef.close();
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
