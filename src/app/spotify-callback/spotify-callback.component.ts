import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-spotify-callback',
  templateUrl: './spotify-callback.component.html',
  styleUrls: ['./spotify-callback.component.scss']
})
export class SpotifyCallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.route.fragment.subscribe(next => authService.login(next));
  }

  ngOnInit(): void {
  }

}
