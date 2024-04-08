import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './pages/photos/photos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'photos', component: PhotosComponent }
];
