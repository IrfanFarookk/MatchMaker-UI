import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfilesComponent } from '../profiles/profiles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProfilesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dropdownOpen = false;
  MatchingPofileCount = 8;
  newMatchCount = 5;
  public dataToPass = "Hello from HomeComponent!";
}
