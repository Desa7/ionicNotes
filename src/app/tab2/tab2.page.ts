import { PhotoService } from './../services/photo.service';
import { Component } from '@angular/core';
import { Photo } from 'src/models/photo.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public photos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.loadSaved().then(() => {
      this.photos = this.photoService.getPhotos();
    });
  }

  public newPhoto():void {
    this.photoService.addNewToGallery();
  }
}
