import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService ,Image } from '../../services/image.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [ CommonModule, HttpClientModule ],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css'
})
export class ProfilesComponent  implements OnInit {
  images: Image[] = [];
  constructor(private imageService: ImageService, private router: Router) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(data => {
      this.images = data;
    });
  }

  @Input() someData: any; 

  yes(section: any) {
    this.router.navigate(['/profile'], {
      state: {
        images: this.images,
        clickedImage: section
      }});
  }

  no() {
  }
}
