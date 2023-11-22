export class Artwork{

    constructor(
        public id: string,
        public image: string,
        public timeSpent: string,
        public description: string,
        public artworkType: string
    ) {}

    // Add a method to get the full image path
  getImagePath(): string {
    // return `/assets/images/${this.image}`;

    const imagePath = `/assets/images/${this.image}`;
    console.log('Image Path:', imagePath);// for Checking
    return imagePath;
  }
}