import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../services/games/game.service';
import { Jeu } from '../../models/jeu';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-jeu-modification',
  templateUrl: './jeu-modification.component.html',
  styleUrls: ['./jeu-modification.component.css']
})
export class JeuModificationComponent implements OnInit {
  jeuForm!: FormGroup;
  categories: any[] = [];
  themes: any[] = [];
  editeurs: any[] = [];
  currentJeu!: Jeu;

  constructor(
    private formBuilder: FormBuilder,
    private jeuService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.jeuService.getJeu(parseInt(id)).subscribe({
          next: (jeuResponse) => {
            console.log(jeuResponse);
            this.currentJeu = jeuResponse.jeu;
            this.prepopulateForm();
          },
          error: (err) => {
            console.log('Erreur lors de la récupération des informations du jeu : ', err);
          }
        });
      } else {
        this.router.navigate(['/']);
      }
    });

    this.jeuForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      langue: ['', Validators.required],
      age_min: ['', Validators.required],
      nombre_joueurs_min: ['', Validators.required],
      nombre_joueurs_max: ['', Validators.required],
      duree_partie: ['', Validators.required],
      categorie: ['', Validators.required],
      theme: ['', Validators.required],
      editeur: ['', Validators.required]
    });

    this.fetchData();
  }

  fetchData(): void {
    this.fetchCategories();
    this.fetchThemes();
    this.fetchEditeurs();
  }

  fetchCategories(): void {
    this.jeuService.getCategories().subscribe(
      (data: any) => {
        this.categories = data.categories;
      },
      (error) => {
        console.error('Erreur lors de la récupération des catégories', error);
      }
    );
  }

  fetchThemes(): void {
    this.jeuService.getThemes().subscribe(
      (data: any) => {
        this.themes = data.theme;
      },
      (error) => {
        console.error('Erreur lors de la récupération des thèmes', error);
      }
    );
  }

  fetchEditeurs(): void {
    this.jeuService.getEditeurs().subscribe(
      (data: any) => {
        this.editeurs = data.editeurs;
      },
      (error) => {
        console.error('Erreur lors de la récupération des éditeurs', error);
      }
    );
  }

  prepopulateForm(): void {
    this.jeuForm.patchValue({
      nom: this.currentJeu.nom,
      description: this.currentJeu.description,
      langue: this.currentJeu.langue,
      age_min: this.currentJeu.age_min,
      nombre_joueurs_min: this.currentJeu.nombre_joueurs_min,
      nombre_joueurs_max: this.currentJeu.nombre_joueurs_max,
      duree_partie: this.currentJeu.duree_partie,
      categorie: this.currentJeu.categorie.nom,
      theme: this.currentJeu.theme.nom,
      editeur: this.currentJeu.editeur.nom
    });
  }

  onSubmit(): void {
    if (this.jeuForm.valid) {
      const jeuData: Jeu = this.jeuForm.value;
      jeuData.id = this.currentJeu.id
      console.log(jeuData)
      this.jeuService.updateJeu(jeuData).subscribe(
        (request: any) => {
          console.log(request);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du jeu', error);
        }
      );
    }
  }
}
