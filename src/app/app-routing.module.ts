import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantrecipelogComponent } from './CBS3/plantrecipelog/plantrecipelog.component';
import { CMActionCodeComponent } from './CBS3/cmaction-code/cmaction-code.component';

const routes: Routes = [
  {
    path: 'CMActionCode',
    component: CMActionCodeComponent
  },
  {
    path: 'PlantRecipe',
    component: PlantrecipelogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
