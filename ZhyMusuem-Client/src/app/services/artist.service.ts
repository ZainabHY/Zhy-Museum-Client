import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtworkType } from '../models/artworkType.model';
import { Artwork } from '../models/artwork.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  readonly API_URL = 'http://localhost:8001/zhyMuseum/api';

  constructor(private http: HttpClient) { }

  getAllArtworks(): Observable<any> {


    // const artwork: Object = {
    //   image: image,
    //   timeSpent: timeSpent,
    //   description: description,
    //   artworkType: artworkType
    // }

    return this.http.get<Artwork[]>(`${this.API_URL}/both/getAllArtworks`);
  }


}
