import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

@NgModule({
  declarations: [//Déclaration des composants de l'application
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent
  ],
  imports: [//Import des modules Angular ou nos propres modules
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],//Référence les services, pipes et directives
  bootstrap: [AppComponent]//Le point d'entrée de l'application
})
export class AppModule { }
