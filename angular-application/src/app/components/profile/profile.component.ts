import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserRequest} from "../../requests/UserRequest";
import {UsersService} from "../../services/users/users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profilCourant$: Observable<UserRequest>;

  public personalProfile: boolean;

  constructor(private profilService: UsersService, private routes: ActivatedRoute) {
    this.profilCourant$ = this.profilService.getUser();
    this.personalProfile = true;
  }

  ngOnInit(): void {
    const id = this.routes.snapshot.paramMap.get('id');
    if (id) {
      this.profilCourant$ = this.profilService.getUser(parseInt(id));
      this.personalProfile = false;
    } else {
      this.profilCourant$ = this.profilService.getUser();
    }
  }
}
