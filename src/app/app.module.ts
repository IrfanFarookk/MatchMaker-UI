import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // If you are using forms
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
