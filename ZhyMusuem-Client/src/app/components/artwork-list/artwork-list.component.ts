import { Component } from '@angular/core';
import { Artwork } from 'src/app/models/artwork.model';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent {
  // Create a card slideshow of artworks

  currentIndex = 0;
  artworksData: Artwork[] = [
    new Artwork('art5172', 'charcoal-land.png', '18 hours', 'Abstract painting', 'Charcoal'), 
    new Artwork('art1234', 'knitter-man-land.png', '18 hours', 'Knitter Man', 'Charcoal'), 
    new Artwork('art2345', 'charcoal6-land.png', '16 hours', 'Abstract painting', 'Charcoal'), 
    new Artwork('art3456', 'handicraft-land.png', '12 hours', 'Abstract painting', 'Charcoal'), 
    new Artwork('art1293', 'horse-land.png', '15 hours', 'Abstract painting', 'Charcoal'), 
    new Artwork('art9237', 'charcoal5-land.png', '15 hours', 'Abstract painting', 'Charcoal'), 
    new Artwork('art6291', 'charcoal4-land.png', '2 hours', 'Abstract painting', 'Charcoal'), 

    new Artwork('art1820', 'pencil1-land.png', '1.5 hours', 'Abstract painting', 'Pencil'), 
    new Artwork('art9335', 'pencil3-land.png', '2 hours', 'Abstract painting', 'Pencil'), 
    new Artwork('art1029', 'pencil6-land.png', '3 hours', 'Abstract painting', 'Pencil'), 
    new Artwork('art3937', 'pencil-land.png', '2 hours', 'Abstract painting', 'Pencil'), 
    new Artwork('art3937', 'pencil2-land.png', '2 hours', 'Abstract painting', 'Pencil'), 
    new Artwork('art3937', 'pencil4-land.png', '2 hours', 'Abstract painting', 'Pencil'), 
    new Artwork('art3937', 'pencil5-land.png', '2 hours', 'Abstract painting', 'Pencil'), 
    new Artwork('art3937', 'pencil7-land.png', '2 hours', 'Abstract painting', 'Pencil'), 
  ];


  // showNext() {
  //   console.log('Next button clicked'); // for Checking
  //   this.currentIndex = (this.currentIndex + 1) % this.artworksData.length;
  // }

  // showPrev() {
  //   console.log('Previous button clicked'); // for Checking
  //   this.currentIndex = (this.currentIndex - 1 + this.artworksData.length) % this.artworksData.length;
  // }
  
  constructor(private router: Router) {}

  // Redirecting to the artwork details
  openSingleArtwork(id: string) {
    this.router.navigate(['/single-artwork', id]);
  }

  // Showing next artwork in slide-show
  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.artworksData.length;
  }

  // Showing previous artwork in slide-show
  showPrev() {
    this.currentIndex = (this.currentIndex - 1 + this.artworksData.length) % this.artworksData.length;
  }

  navigateToSingleArtwork(id: string) {
    // Navigate to SingleArtworkComponent with the selected artwork's ID
    this.router.navigate(['/single-artwork', id]);
  }
}
