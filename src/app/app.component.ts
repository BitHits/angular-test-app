import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DG Growth';

  constructor(public authService: AuthenticationService) {

  }

  ngOnInit() {
    if (localStorage.getItem('loggedIn') === 'true') {
      this.authService.SuccessfulLogin();
    }
  }

}
