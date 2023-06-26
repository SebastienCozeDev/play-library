import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users/users.service";
import {Observable} from "rxjs";
import {UserRequest} from "../../requests/UserRequest";
import {UpdateAvatarProfileRequest} from "../../requests/UpdateAvatarProfileRequest";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-profile-avatar-update-form',
  templateUrl: './profile-avatar-update-form.component.html',
  styleUrls: ['./profile-avatar-update-form.component.css']
})
export class ProfileAvatarUpdateFormComponent implements OnInit {

  public avatar: FormControl = new FormControl('', [Validators.required]);

  public currentProfile$: Observable<UserRequest>;

  public id = 0;

  public personalProfile = true;
  fileForm!: FormGroup;

  constructor(public route: ActivatedRoute, private profileService: UsersService, private router: Router, private formBuilder: FormBuilder,
              private http: HttpClient) {
    this.currentProfile$ = this.profileService.getUser();
  }

  ngOnInit(): void {
    this.id = +(this.route.snapshot.paramMap.get('id') || 0);
    const personalProfileString: string | null = this.route.snapshot.paramMap.get('personal-profile' || 'false');
    if (personalProfileString == 'false' || personalProfileString == null) this.personalProfile = false;
    this.fileForm = this.formBuilder.group({
      file: ['', Validators.required]
    });
  }

  /**
   * Event for edit button.
   */
  public editButtonEvent(): void {
    if (this.avatar.value != '') {
      const newUser: UpdateAvatarProfileRequest = {
        avatar: this.avatar.value,
      }
      this.profileService.updateAvatarUser(this.id, newUser).subscribe(
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
    if (this.avatar.hasError('required')) {
      return 'Ce champs doit comporter le lieu d\'une image valide';
    }
    return '';
  }

  uploadFile(): void {
    const formData = new FormData();
    const fileInput = document.querySelector('#filepicker') as HTMLInputElement;
    if (fileInput?.files && fileInput.files.length > 0) {
      formData.append('image', fileInput.files[0]);
      const headers = new HttpHeaders(); // Create headers object
      headers.append('enctype', 'multipart/form-data'); // Set content type header
      console.log("ici")
      this.http.post('http://localhost:8000/api/updateAvatar/' + this.id, formData, {headers}).subscribe(
        (response) => {
          console.log(response);
          console.log('File uploaded successfully');
          // Handle the response as needed
        },
        (error) => {
          console.error('An error occurred while uploading the file:', error);
          // Handle the error as needed
        }
      );
    }
  }
}
