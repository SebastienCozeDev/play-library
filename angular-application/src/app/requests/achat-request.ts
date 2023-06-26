import {Jeu} from "../models/jeu";
import {Achat} from "../models/achat";
import {UserRequest} from "./UserRequest";

export interface AchatRequest {
  status: string,
  message: string,
  achat: Achat,
  adherant: UserRequest,
  jeu: Jeu,
}
