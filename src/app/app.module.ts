import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ImageService } from '../app/services/image.service';

import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    HomeComponent,
    ProfilesComponent,
    ProfileViewComponent,
    CommonModule,
    FormsModule,
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    IonicModule.forRoot()
  ],
  providers: [
    ImageService,
    provideHttpClient()
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
