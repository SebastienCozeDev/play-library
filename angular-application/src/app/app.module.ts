import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FooterComponent} from './components/footer/footer.component';
import {AProposComponent} from './components/a-propos/a-propos.component';
import {ContactComponent} from './components/contact/contact.component';
import {JeuDetailsComponent} from './components/jeu-details/jeu-details.component';
import {HomeComponent} from "./components/home/home.component";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShowTokenComponent} from './show-token/show-token.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {JeuxListeComponent} from './components/jeux-liste/jeux-liste.component';
import {GameService} from "./services/games/game.service";
import {MatTableModule} from "@angular/material/table";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ProfileComponent} from "./components/profile/profile.component";
import {MatListModule} from "@angular/material/list";
import {AuthInterceptor} from "./auth.interceptor";
import { CarteJeuComponent } from './components/carte-jeu/carte-jeu.component';
import { CarteJeuNoteComponent } from './components/carte-jeu/carte-jeu-note/carte-jeu-note.component';
import { JeuCreationComponent } from './components/jeu-creation/jeu-creation.component';
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { CommentModalComponent } from './components/comment-modal/comment-modal.component';
import {MatIconModule} from "@angular/material/icon";
import { CommentaireEditComponent } from './components/commentaire-edit/commentaire-edit.component';
import { ProfileUpdateFormComponent } from './components/profile-update-form/profile-update-form.component';
import {MatChipsModule} from "@angular/material/chips";
import {JeuModificationComponent} from "./components/jeu-modification/jeu-modification.component";
import { DeleteCommentaireComponent } from './components/delete-commentaire/delete-commentaire.component';
import { ProfileAvatarUpdateFormComponent } from './components/profile-avatar-update-form/profile-avatar-update-form.component';
import { CreateAchatModalComponent } from './components/create-achat-modal/create-achat-modal.component';
import { DeleteAchatModalComponent } from './components/delete-achat-modal/delete-achat-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { UploadJeuImageComponent } from './components/upload-jeu-image/upload-jeu-image.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShowTokenComponent,
    FooterComponent,
    AProposComponent,
    ContactComponent,
    JeuDetailsComponent,
    HomeComponent,
    ProfileComponent,
    JeuxListeComponent,
    CarteJeuComponent,
    CarteJeuNoteComponent,
    JeuCreationComponent,
    JeuModificationComponent,
    ProfileUpdateFormComponent,
    CommentModalComponent,
    CommentaireEditComponent,
    DeleteCommentaireComponent,
    ProfileAvatarUpdateFormComponent,
    CreateAchatModalComponent,
    DeleteAchatModalComponent,
    UploadJeuImageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        HttpClientModule,
        MatTableModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatListModule,
        MatTableModule,
        MatGridListModule,
        MatIconModule,
        MatChipsModule,
        FormsModule,
        MatDialogModule,
        MatIconModule,
        MatGridListModule,
        MatIconModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
  providers: [
    GameService,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
