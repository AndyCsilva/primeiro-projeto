import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CursosModule } from './cursos/cursos.module';

import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
