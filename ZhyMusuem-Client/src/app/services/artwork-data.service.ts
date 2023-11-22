import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artwork } from 'src/app/models/artwork.model';


@Injectable({
  providedIn: 'root'
})
export class ArtworkDataService {

  constructor() { }

  private artworks: Artwork[] = [
    new Artwork('art1234', 'bg.png', '18 hours', 'Abstract painting', 'Charcoal'), 
    new Artwork('art2345', 'zhy-bg.png', '16 hours', 'Abstract painting', 'Charcoal'), 
    new Artwork('art3456', 'bg.jpg', '13 hours', 'Abstract painting', 'Charcoal'), 
    new Artwork('art1293', 'bg.jpg', '15 hours', 'Abstract painting', 'Charcoal'), 
    new Artwork('art9237', 'bg.jpg', '15 hours', 'Abstract painting', 'Charcoal'), 
    new Artwork('art5172', 'bg.jpg', '12 hours', 'Abstract painting', 'Charcoal'), 
    new Artwork('art0193', 'bg.jpg', '3 hours', 'Abstract painting', 'Pencil'), 
    new Artwork('art6291', 'bg.jpg', '2 hours', 'Abstract painting', 'Pencil'), 
    new Artwork('art1820', 'bg.jpg', '1.5 hours', 'Abstract painting', 'Pencil'), 
    new Artwork('art9335', 'bg.jpg', '2 hours', 'Abstract painting', 'Pencil'), 
    new Artwork('art1029', 'bg.jpg', '3 hours', 'Abstract painting', 'Pencil'), 
    new Artwork('art3937', 'bg.jpg', '2 hours', 'Abstract painting', 'Pencil'), 
  ];

  getArtworkDetails(id: string): Observable<Artwork | undefined> {
    const artwork = this.artworks.find((a) => a.id === id);
    return of(artwork);
  }
}
