import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../../authentification.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private authService: AuthentificationService) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      pseudo: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const loginControl = this.registerForm.get('login');
      const prenomControl = this.registerForm.get('prenom');
      const nomControl = this.registerForm.get('nom');
      const pseudoControl = this.registerForm.get('pseudo');
      const emailControl = this.registerForm.get('email');
      const passwordControl = this.registerForm.get('password');

      if (loginControl && prenomControl && nomControl && pseudoControl && emailControl && passwordControl) {
        const login = loginControl.value;
        const prenom = prenomControl.value;
        const nom = nomControl.value;
        const pseudo = pseudoControl.value;
        const email = emailControl.value;
        const password = passwordControl.value;
        this.authService.register(login, prenom, nom, pseudo, email, password);
      }
    }
  }
}
