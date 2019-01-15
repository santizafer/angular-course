import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaComponent } from './hola/hola.component';
import { PruebaComponent } from './prueba/prueba.component';
import { UserComponent } from './user/user.component';
import { PruebaDosComponent } from './prueba-dos/prueba-dos.component';
import { FromAtomComponent } from './from-atom/from-atom.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    PruebaComponent,
    UserComponent,
    PruebaDosComponent,
    FromAtomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
