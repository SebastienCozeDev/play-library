import {CommentaireRequest} from "./commentaireRequest";
import {Jeu} from "../models/jeu";
import {AchatRequest} from "./achat-request";
import {Achat} from "../models/achat";

export interface JeuRequest {
  image_enc: string;
  status: string,
  message: string,
  achats: Achat[],
  commentaires: CommentaireRequest[],
  jeu: Jeu,
  nb_likes: number,
  note_moyenne: number,
  prix_moyen: number
}
