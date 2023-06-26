import {CategorieRequest} from "../requests/categorieRequest";
import {ThemeRequest} from "../requests/themeRequest";
import {EditeurRequest} from "../requests/editeurRequest";

export interface Jeu {
  id: number,
  nom: string,
  description: string,
  langue: string,
  url_media: string,
  age_min: number,
  nombre_joueurs_min: number,
  nombre_joueurs_max: number,
  duree_partie: number,
  valide: number,
  categorie: CategorieRequest,
  theme: ThemeRequest,
  editeur: EditeurRequest,
  created_at: string,
  updated_at: string,
}
