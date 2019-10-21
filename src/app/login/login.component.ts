import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'naoufal';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.username === 'naoufal' && this.password === 'test') {
      //Je veux naviguer vers 'welcome', URL Dynamic on peut utiliser <a [routerLink]="['welcome', this.username]">
      this.router.navigate(['welcome', this.username]);// Injection de l'objet router au sein du composant LoginComponent
    } else {
      this.invalidLogin = true;
    }
    //console.log(this.password);
  }

}
