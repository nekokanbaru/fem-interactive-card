import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, CardsComponent, FormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
