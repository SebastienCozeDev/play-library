import {Jeu} from "../models/jeu";

export interface JeuxRequest {
  status: string,
  jeux: Jeu[],
}
