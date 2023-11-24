import { Component, OnInit } from '@angular/core';
import { Artwork } from 'src/app/models/artwork.model';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ArtworkType } from 'src/app/models/artworkType.model';
import { ArtistService } from 'src/app/services/artist.service';


@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
// export class ArtworkListComponent implements OnInit{
  export class ArtworkListComponent{
  // Create a card slideshow of artworks

  currentIndex = 0;

  // artworksData: Artwork[] = [];

  artworksData: Artwork[] = [
    new Artwork('art5172', 'charcoal-land.png', '18 hours', 'Abstract painting', ArtworkType.Charcoal), 
    new Artwork('art1234', 'knitter-man-land.png', '18 hours', 'Knitter Man', ArtworkType.Charcoal), 
    new Artwork('art2345', 'charcoal6-land.png', '16 hours', 'Abstract painting', ArtworkType.Charcoal), 
    new Artwork('art3456', 'handicraft-land.png', '12 hours', 'Abstract painting', ArtworkType.Charcoal), 
    new Artwork('art1293', 'horse-land.png', '15 hours', 'Abstract painting', ArtworkType.Charcoal), 
    new Artwork('art9237', 'charcoal5-land.png', '15 hours', 'Abstract painting', ArtworkType.Charcoal), 
    new Artwork('art6291', 'charcoal4-land.png', '2 hours', 'Abstract painting', ArtworkType.Charcoal), 

    new Artwork('art1820', 'pencil1-land.png', '1.5 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art9335', 'pencil3-land.png', '2 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art1029', 'pencil6-land.png', '3 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art3937', 'pencil-land.png', '2 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art3937', 'pencil2-land.png', '2 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art3937', 'pencil4-land.png', '2 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art3937', 'pencil5-land.png', '2 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art3937', 'pencil7-land.png', '2 hours', 'Abstract painting', ArtworkType.Pencil), 
  ];

  
  constructor(private router: Router, private artistService: ArtistService) {


  }
  // ngOnInit(): void {
  //   this.artistService.getAllArtworks().subscribe(
  //     (data)=>{
  //       this.artworksData = data;
  //     }
  //   )
  // }

  // Redirecting to the artwork details
  // Works
  openSingleArtwork(id: string) {
    if (id) {
      this.router.navigate(['/single-artwork', id]);
    } else {
      console.error('Artwork ID is null or undefined'); // handling potential null or undefined ids
    }


  }

  // openSingleArtwork(index: number): void {
  //   if (index >= 0 && index < this.artworksData.length) {
  //     const artworkId = this.artworksData[index].id;
  //     this.router.navigate(['/single-artwork', artworkId]);
  //   } else {
  //     console.error('Invalid index:', index);
  //   }
  // }
  

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
