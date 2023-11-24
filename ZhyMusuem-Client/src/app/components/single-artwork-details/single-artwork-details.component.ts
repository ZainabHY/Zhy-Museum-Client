import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork } from 'src/app/models/artwork.model';
import { ArtworkType } from 'src/app/models/artworkType.model';
import { ArtworkDataService } from 'src/app/services/artwork-data.service';
// import { ZoomerDirective } from 'src/app/directives/zoomer.directive';


@Component({
  selector: 'app-single-artwork-details',
  templateUrl: './single-artwork-details.component.html',
  styleUrls: ['./single-artwork-details.component.css'],
  // providers: [ZoomerDirective]
})
export class SingleArtworkDetailsComponent {
  choosenArtworkId ='';

  currentIndex = 0;
  artworksData: Artwork[] = [
    new Artwork('art5172', 'charcoal.png', '18 hours', 'Abstract painting', ArtworkType.Charcoal), 
    new Artwork('art1234', 'knitter-man.png', '18 hours', 'Knitter Man', ArtworkType.Charcoal), 
    new Artwork('art2345', 'charcoal6.png', '16 hours', 'Abstract painting', ArtworkType.Charcoal), 
    new Artwork('art3456', 'handicraft.png', '12 hours', 'Abstract painting', ArtworkType.Charcoal), 
    new Artwork('art1293', 'horse.png', '15 hours', 'Abstract painting', ArtworkType.Charcoal), 
    new Artwork('art9237', 'charcoal5.png', '15 hours', 'Abstract painting', ArtworkType.Charcoal), 
    new Artwork('art6291', 'charcoal4.png', '2 hours', 'Abstract painting', ArtworkType.Charcoal), 

    new Artwork('art1820', 'pencil1.JPEG', '1.5 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art9335', 'pencil3.JPEG', '2 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art1029', 'pencil6.jpg', '3 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art3937', 'pencil.JPEG', '2 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art3937', 'pencil2.jpg', '2 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art3937', 'pencil4.JPEG', '2 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art3937', 'pencil5.jpg', '2 hours', 'Abstract painting', ArtworkType.Pencil), 
    new Artwork('art3937', 'pencil7.JPEG', '2 hours', 'Abstract painting', ArtworkType.Pencil), 
  ];

  // Function to dynamically get the image path based on the artwork type
  getImagePath(artwork: Artwork): string {
    if (artwork.artworkType === ArtworkType.Charcoal) {
      return artwork.getImagePathCharcoal();
    } else if (artwork.artworkType === ArtworkType.Pencil) {
      return artwork.getImagePathPencil();
    } else {
      // Handle other artwork types 
      return 'zhy-bg.png';
    }
  }



  artwork: Artwork = new Artwork('', '', '', '', ArtworkType.Charcoal); // intial values

  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.params.subscribe(params => {
      const artworkId = params['id'];

      this.choosenArtworkId = artworkId;
      // Call a method to fetch the artwork details based on the ID
      this.fetchArtworkDetails(artworkId);
    });
  }

  // Implement a method to fetch artwork details based on the ID
  fetchArtworkDetails(artworkId: string): void {
    // Call your service or use any other method to get artwork details
    // For now, create a sample artwork
    // this.artwork = new Artwork(artworkId, 'sample-image.png', '2 hours', 'Sample Artwork', ArtworkType.Charcoal);
  
    for (const artwork of this.artworksData) {
      if (artwork.id === artworkId) {
        this.artwork = artwork;
        break;
      }
    }
  }


  // isZoomedIn = false;

  // zoomIn(): void {
  //   this.isZoomedIn = true;
  // }

  // zoomOut(): void {
  //   this.isZoomedIn = false;
  // }

  
}
