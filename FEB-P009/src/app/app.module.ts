// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Trabalho1Component } from './trabalho1/trabalho1.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Trabalho1Component,   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule, // Certifique-se de adicionar a AppRoutingModule aqui
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
