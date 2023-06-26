import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GameService} from "../../services/games/game.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Jeu} from "../../models/jeu";
import {UsersService} from "../../services/users/users.service";
import {Observable} from "rxjs";
import {UserRequest} from "../../requests/UserRequest";

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css']
})
export class CommentModalComponent implements OnInit {
  commentaire = '';
  note = 0;
  commentaireForm!: FormGroup;
  jeu: Jeu | undefined;
  user_id = 0;

  constructor(public dialogRef: MatDialogRef<CommentModalComponent>, public gameService: GameService, private route: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: { jeu: Jeu }, public userService: UsersService
  ) {
    this.jeu = data.jeu;
    this.initCommentaireForm();
    this.fetchData();

  }

  ngOnInit(): void {
    const userObservable: Observable<UserRequest> = this.userService.getUser();
    userObservable.subscribe((user) => {
      this.user_id = user.adherent.id;
    });
  }

  initCommentaireForm(): void {
    this.commentaireForm = this.formBuilder.group({
      commentaire: ['', Validators.required],
      note: ['', Validators.required],
      date_com: [''],
      jeu_id: [''],
      user_id: [''],
      etat: ['']
    });
  }

  fetchData(): void {
    this.fetchJeu();
  }

  fetchJeu(): void {
    if (this.jeu?.id) {
      this.gameService.getJeu(this.jeu?.id).subscribe({
        next: (jeuResponse) => {
          this.jeu = jeuResponse.jeu;
        },
        error: (err) => {
          console.log('Erreur lors de la récupération des informations du jeu : ', err);
        }
      });
    }
  }

  createComment(): void {
    const id_jeu = this.jeu?.id;
    const url = `http://localhost:8000/api/jeu/${id_jeu}/commentaire`;
    const commentaireData = {
      commentaire: this.commentaireForm.value.commentaire,
      date_com: new Date(),
      note: this.commentaireForm.value.note,
      jeu_id: this.jeu?.id,
      user_id: this.user_id,
      etat: 'public'
    };
    this.http.post(url, commentaireData)
      .subscribe(
        () => {
          console.log('Commentaire ajouté avec succès !');
          this.dialogRef.close("success");
        },
        (error) => {
          console.error("Une erreur s'est produite lors de l'ajout du commentaire :", error);
        }
      );
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
