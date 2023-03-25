import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from "../shared/shared.module";
import {ObjectDetectionComponent} from "./object-detection.component";

const routes: Routes = [
  { path: '', component: ObjectDetectionComponent }
];

@NgModule({
  declarations: [
    ObjectDetectionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class ObjectDetectionModule { }
