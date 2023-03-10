import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {SharedModule} from "../shared/shared.module";
import {AccordionModule} from 'primeng/accordion';
import {TabViewModule} from "primeng/tabview";
import {AnimateModule} from "primeng/animate";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class HomeModule { }
