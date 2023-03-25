import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./modules/shared/layout/not-found/not-found.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  {
    path: 'accueil',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'detection-objets',
    loadChildren: () => import('./modules/object-detection/object-detection.module').then(m => m.ObjectDetectionModule),
  },
  {
    path: '**',
    redirectTo: 'page-introuvable',
    pathMatch: 'full'
  },
  {
    path: ':page-introuvable',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
