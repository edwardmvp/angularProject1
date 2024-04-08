import { Component } from '@angular/core';
import { PhotosService } from '../../services/photos.service.spec';
import { Photo } from '../../components/models/photo';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent {
  photos?: Photo[]

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe((fetchPhotos) => this.photos = fetchPhotos)
  }
}
