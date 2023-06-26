import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GameService} from "../../services/games/game.service";
import {AchatRequest} from "../../requests/achat-request";

@Component({
  selector: 'app-create-achat-modal',
  templateUrl: './create-achat-modal.component.html',
  styleUrls: ['./create-achat-modal.component.css']
})
export class CreateAchatModalComponent implements OnInit {
  achatForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateAchatModalComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private jeuService: GameService
  ) {
  }

  ngOnInit(): void {
    this.achatForm = this.formBuilder.group({
      prix: ['', Validators.required],
      lieu_achat: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSave(): void {
    if (this.achatForm.valid) {
      const achatData = this.achatForm.value;
      achatData.jeu_id = this.data.id;
      console.log('Achat data:', achatData);

      this.jeuService.createAchat(achatData).subscribe(
        (createdAchat: AchatRequest) => {
          console.log(createdAchat.message, createdAchat);
          this.dialogRef.close("success");

        },
        (error) => {
          console.error('Erreur lors de la création de l\'achat', error);
          this.dialogRef.close("error");

        }
      );

    }
  }

  onCancel(): void {
    this.dialogRef.close("error");
  }

}
