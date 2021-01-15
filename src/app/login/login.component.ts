import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onClick() {
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=61344a499c064622992ef2a3abd7a114&redirect_uri=http://localhost:4200/spotify-callback&scope=user-top-read user-read-recently-played user-library-read&response_type=token&state=123';
  }

}
