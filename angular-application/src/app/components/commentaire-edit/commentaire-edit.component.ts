import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommentaireRequest} from "../../requests/commentaireRequest";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UsersService} from "../../services/users/users.service";
import {Jeu} from "../../models/jeu";
import {Observable} from "rxjs";
import {UserRequest} from "../../requests/UserRequest";

@Component({
  selector: 'app-commentaire-edit-modal',
  templateUrl: './commentaire-edit.component.html',
  styleUrls: ['./commentaire-edit.component.css']
})
export class CommentaireEditComponent implements OnInit {
  commentaireForm: FormGroup;
  user_id = 0;
  commentaire: CommentaireRequest;

  constructor(
    public dialogRef: MatDialogRef<CommentaireEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { commentaire: CommentaireRequest, jeu: Jeu },
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    public userService: UsersService
  ) {
    this.commentaireForm = this.formBuilder.group({
      commentaire: [data.commentaire.commentaire, Validators.required],
      note: [data.commentaire.note, Validators.required]
    });
    this.commentaire = data.commentaire;
  }

  ngOnInit(): void {
    const userObservable: Observable<UserRequest> = this.userService.getUser();
    userObservable.subscribe((user) => {
      this.user_id = user.adherent.id;
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }


  onSubmit(): void {
    if (this.commentaireForm.valid) {
      const id_commentaire = this?.commentaire.id;
      const url = `http://localhost:8000/api/commentaire/${id_commentaire}`;
      const commentaireData = {
        ...this.data.commentaire,
        commentaire: this.commentaireForm.value.commentaire,
        note: this.commentaireForm.value.note
      };
      this.http.patch(url, commentaireData)
        .subscribe(
          () => {
            console.log('Commentaire modifié avec succès !');
            this.dialogRef.close("success");
          },
          (error) => {
            console.error("Une erreur s'est produite lors de l'ajout du commentaire :", error);
          }
        );

      this.dialogRef.close();
    }
  }
}
