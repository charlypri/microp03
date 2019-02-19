import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NuevoEentoPage } from './nuevo-eento.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoEentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NuevoEentoPage]
})
export class NuevoEentoPageModule {}
