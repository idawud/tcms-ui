import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authorizeUrl = 'https://github.com/login/oauth/authorize';
  tokenUrl = 'https://github.com/login/oauth/access_token';
  apiUrl       = 'https://api.github.com/user';
  redirectUri  = 'http://localhost:4200/home';
  private clientId = 'b2457b2325d1e7e100e5';
  encodedRedirectUri  = encodeURIComponent(this.redirectUri);
  accessToken  = null;

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
  }
  login() {
    console.log('login succ');
    const githubLink = this.authorizeUrl + '?scope=user%3Aemail&client_id=' + this.clientId + '&redirect_uri=' + this.encodedRedirectUri;
    this.router.navigate(['/']).then(result => {window.location.href = githubLink; } );
    }


}
