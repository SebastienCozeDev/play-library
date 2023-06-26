export interface UserRequest {

  status: string;
  message: string;

  adherent: {
    id: number;
    nom: string;
    prenom: string;
    pseudo: string;
    login: string;
    avatar: any;
    email: string;
  };

  commentaires: Commentaire[];
  achats: Achat[];
  likes: Like[];
}

interface Commentaire {
  jeu_id: number;
  user_id: number;
  commentaire: string;
  date_com: string;
  note: number;
  etat: string;
}

interface Achat {
  user_id: number;
  jeu_id: number;
  date_achat: string;
  lieu_achat: string;
  prix: number;
}

interface Like {
  jeu_id: number;
  jeu_nom: string;
}

