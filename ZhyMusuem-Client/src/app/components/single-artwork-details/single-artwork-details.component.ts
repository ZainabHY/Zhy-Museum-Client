import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork } from 'src/app/models/artwork.model';
import { ArtworkDataService } from 'src/app/services/artwork-data.service';

@Component({
  selector: 'app-single-artwork-details',
  templateUrl: './single-artwork-details.component.html',
  styleUrls: ['./single-artwork-details.component.css']
})
export class SingleArtworkDetailsComponent implements OnInit {
    
  artwork: Artwork | undefined;

  constructor(private route: ActivatedRoute, private artworkService: ArtworkDataService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // Check if id is not null before calling getArtworkDetails
    if (id) {
      this.artworkService.getArtworkDetails(id).subscribe((artwork) => {
        this.artwork = artwork;
      });
    } else {
      console.error('ID parameter is null');
    }
  }
}
