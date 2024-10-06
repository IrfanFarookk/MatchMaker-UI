import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileViewComponent {
  profileDetails: any | null = '';
  clickedImage: any | null = '';
  currentIndex: any | null = '';
  slideOpts: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.currentIndex = 0;
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.profileDetails = navigation.extras.state['images'];
      this.clickedImage = navigation.extras.state['clickedImage'];
      this.currentIndex = this.profileDetails.findIndex((image: { id: any; }) => image.id === this.clickedImage.id);
    }

    this.slideOpts = {
      initialSlide: this.currentIndex ?? 0, // Default to 0 if currentIndex is null
      speed: 400
    };
  }

  goBack() {
    this.router.navigate(['']);
  }

  shortlist() {
    alert('shortlisted');
  }

  cross () {
    alert('Not Interested');
    this.nextImage();
  }

  selected () {
    this.nextImage();
    alert('Interested');
  }

  nextImage() {
    if ((this.profileDetails.length - 1) <= this.currentIndex) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = (this.currentIndex + 1);
    }
    console.log(this.currentIndex);
  }
}
