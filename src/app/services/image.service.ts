import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Image {
  id: string;
  imgUrl: string;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private jsonUrl = '/assets/images.json';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.jsonUrl);
  }
}
