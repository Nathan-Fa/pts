import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import {SharedModule} from "../shared/shared.module";
import {AccordionModule} from 'primeng/accordion';
import {TabViewModule} from "primeng/tabview";
import {AnimateModule} from "primeng/animate";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: '', component: AboutUsComponent }
];

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class AboutUsModule { }
