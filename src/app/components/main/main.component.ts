import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
  

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  authorizeUrl = 'https://github.com/login/oauth/authorize';
  tokenUrl = 'https://github.com/login/oauth/access_token';
  apiUrl       = 'https://api.github.com/user';
  redirectUri  = 'http://localhost:4200/home';
  private clientId = 'b2457b2325d1e7e100e5';
  private clientSecret = '483309ff9b58f89690943de02576a41fd049053d';
  encodedRedirectUri  = encodeURIComponent(this.redirectUri);
  accessToken  = null;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    let code$;
    this.route.queryParamMap.subscribe(params => {
      code$ = params.get('code');
      console.log('code: ' + code$);
      if ( code$ != null) {
      }
    });
    // const reqPOst = new HttpRequest( 'JSONP', this.tokenUrl, { client_id: this.clientId, client_secret: this.clientSecret, code });
    this.httpClient.post(this.tokenUrl, { client_id: this.clientId, client_secret: this.clientSecret, code: code$ }).subscribe(
      data => {console.log('code: ' + code$); console.log('code: ' + code$ + '\ndata: ' + JSON.stringify(data)); },
      error => {console.log(error); }
    );
    const uriLink = this.apiUrl + '?access_token=' + this.accessToken;
    const req = new HttpRequest( 'GET', uriLink, {'User-Agent': 'tcms-ui'});
    this.httpClient.request(req).subscribe(
      data => {console.log(data); }
    );
  }

}
