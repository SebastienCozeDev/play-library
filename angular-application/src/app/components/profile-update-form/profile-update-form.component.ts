import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users/users.service";
import {Observable} from "rxjs";
import {UserRequest} from "../../requests/UserRequest";
import {UpdateProfileRequest} from "../../requests/UpdateProfileRequest";

@Component({
  selector: 'app-profile-update-form',
  templateUrl: './profile-update-form.component.html',
  styleUrls: ['./profile-update-form.component.css']
})
export class ProfileUpdateFormComponent implements OnInit {

  public login: FormControl = new FormControl('', [Validators.required]);

  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);

  public nom: FormControl = new FormControl('', [Validators.required]);

  public prenom: FormControl = new FormControl('', [Validators.required]);

  public pseudo: FormControl = new FormControl('', [Validators.required]);

  public password: FormControl = new FormControl('', [Validators.required]);

  public currentProfil$: Observable<UserRequest>;

  public id = 0;

  public hide = true;

  public personalProfile = true;

  constructor(public route: ActivatedRoute, private profilService: UsersService, private router: Router) {
    this.currentProfil$ = this.profilService.getUser();
  }

  ngOnInit(): void {
    this.id = +(this.route.snapshot.paramMap.get('id') || 0);
    const personalProfileString: string | null = this.route.snapshot.paramMap.get('personal-profile' || 'false');
    if (personalProfileString == 'false' || personalProfileString == null) this.personalProfile = false;
    this.currentProfil$ = this.profilService.getUser(parseInt(String(this.id)));
    this.currentProfil$.subscribe((userResponse: UserRequest) => {
      this.login.setValue(userResponse.adherent.login);
      this.email.setValue(userResponse.adherent.email);
      this.nom.setValue(userResponse.adherent.nom);
      this.prenom.setValue(userResponse.adherent.prenom);
      this.pseudo.setValue(userResponse.adherent.pseudo);
    });
  }

  /**
   * Event for edit button.
   */
  public editButtonEvent(): void {
    let valid = true;
    for (const formElementValue of [this.login.value, this.email.value, this.nom.value, this.prenom.value, this.pseudo.value, this.password.value]) {
      if (formElementValue == '') {
        valid = false;
        break;
      }
    }
    if (valid) {
      const newUser: UpdateProfileRequest = {
        id: this.id,
        login: this.login.value,
        email: this.email.value,
        nom: this.nom.value,
        prenom: this.prenom.value,
        password: this.password.value,
        pseudo: this.pseudo.value,
      }
      this.profilService.updateUser(this.id, newUser).subscribe(
        () => {
          console.log('Updated');
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'utilisateur : ', error);
        }
      )
      if (this.personalProfile) {
        this.router.navigate(['/profile']).then(r => r);
      } else {
        this.router.navigate(['/profile', this.id]).then(r => r);
      }
    }
  }

  /**
   * Get the error message.
   */
  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'Ce champs ne peut pas être vide';
    }
    if (this.login.hasError('required')) {
      return 'Ce champs ne peut pas être vide';
    }
    if (this.nom.hasError('required')) {
      return 'Ce champs ne peut pas être vide';
    }
    if (this.prenom.hasError('required')) {
      return 'Ce champs ne peut pas être vide';
    }
    if (this.password.hasError('required')) {
      return 'Ce champs ne peut pas être vide';
    }
    if (this.pseudo.hasError('required')) {
      return 'Ce champs ne peut pas être vide';
    }
    return this.email.hasError('email') ? 'Ce n\'est pas une adresse mail valide' : '';
  }

}
