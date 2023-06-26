import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UsersService} from "../../services/users/users.service";
import {Observable} from "rxjs";
import {UserRequest} from "../../requests/UserRequest";

@Component({
  selector: 'app-delete-commentaire',
  templateUrl: './delete-commentaire.component.html',
  styleUrls: ['./delete-commentaire.component.css']
})
export class DeleteCommentaireComponent implements OnInit {
  user_id = 0;
  id: number;

  constructor(
    public dialogRef: MatDialogRef<DeleteCommentaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    public userService: UsersService
  ) {
    this.id = data;
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


  confirmDelete(): void {
    const url = `http://localhost:8000/api/commentaire/${this.id}`;
    this.http.delete(url)
      .subscribe(
        () => {
          console.log('Commentaire delete avec succès !');
          this.dialogRef.close("success");
        },
        (error) => {
          console.error("Une erreur s'est produite lors de l'ajout du commentaire :", error);
        }
      );
    this.dialogRef.close();
  }
}
