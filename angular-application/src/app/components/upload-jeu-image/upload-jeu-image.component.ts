import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GameService} from "../../services/games/game.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-upload-jeu-image',
  templateUrl: './upload-jeu-image.component.html',
  styleUrls: ['./upload-jeu-image.component.css']
})
export class UploadJeuImageComponent {
  fileForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.fileForm = this.formBuilder.group({
      file: ['', Validators.required]
    });
  }

  uploadFile(): void {
    const formData = new FormData();
    const fileInput = document.querySelector('#filepicker') as HTMLInputElement;
    if (fileInput?.files && fileInput.files.length > 0) {
      formData.append('image', fileInput.files[0]);
      const headers = new HttpHeaders(); // Create headers object
      headers.append('enctype', 'multipart/form-data'); // Set content type header
      console.log("ici")
      this.http.post('http://localhost:8000/api/jeu/1/editUrl', formData, { headers }).subscribe(
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
