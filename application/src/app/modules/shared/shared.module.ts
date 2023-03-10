import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    CommonModule,
    PrimeNgModule,
  ],
})
export class SharedModule {
}
