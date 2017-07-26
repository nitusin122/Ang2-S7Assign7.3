import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PersonComponent } from './person-app.component';
import { colorChangeDirective } from "app/Directives/color-change.directive";

@NgModule({
  declarations: [
    PersonComponent,
    colorChangeDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PersonComponent]
})
export class AppModule { }
