import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../services/games/game.service';
import { JeuRequest } from '../../requests/jeuRequest';
import { Jeu } from '../../models/jeu';
import {Router} from "@angular/router";

@Component({
  selector: 'app-jeu-creation',
  templateUrl: './jeu-creation.component.html',
  styleUrls: ['./jeu-creation.component.css']
})
export class JeuCreationComponent implements OnInit {
  jeuForm!: FormGroup;
  categories: any[] = [];
  themes: any[] = [];
  editeurs: any[] = [];

  constructor(private formBuilder: FormBuilder, private jeuService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.initJeuForm();
    this.fetchData();
  }

  initJeuForm(): void {
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
  }
  fetchData(): void {
    this.fetchCategories()
    this.fetchThemes()
    this.fetchEditeurs()
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
        this.editeurs = data.editeurs; // Extract keys from the object
      },
      (error) => {
        console.error('Erreur lors de la récupération des éditeurs', error);
      }
    );
  }



  onSubmit(): void {
    if (this.jeuForm.valid) {
      const jeuData: Jeu = this.jeuForm.value;
      this.jeuService.createJeu(jeuData).subscribe(
        (createdJeu: JeuRequest) => {
          console.log('Jeu créé avec succès', createdJeu);
          this.router.navigate(["/jeux/" + createdJeu.jeu.id]);        },
        (error) => {
          console.error('Erreur lors de la création du jeu', error);
        }
      );
    }
  }
}
