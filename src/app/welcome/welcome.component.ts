import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: String = '';
  constructor(private route: ActivatedRoute) { }//Injection de l'objet ActivatedRoute pour la récupération des donnèes du routage.

  ngOnInit() {
    //console.log(this.route.snapshot.paramMap.get('id'));
    this.name = this.route.snapshot.params['id'];
  }

}
