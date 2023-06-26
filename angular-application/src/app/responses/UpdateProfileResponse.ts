export interface UpdateProfileResponse {

  status: string;

  message: string;

  adherent: {
    id: number;

    login: string;

    email: string;

    valide: number;

    nom: string;

    prenom: string;

    pseudo: string;

    avatar: string;
  };

}
