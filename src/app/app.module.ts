import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { ImageService } from '../app/services/image.service';

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
  providers: [
    ImageService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
