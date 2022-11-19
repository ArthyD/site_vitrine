import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { BoiteClefBddComponent } from './boite-clef-bdd/boite-clef-bdd.component';
import { SecuriteCloudComponent } from './securite-cloud/securite-cloud.component';
import { StageDeuxiemeAnneeComponent } from './stage-deuxieme-annee/stage-deuxieme-annee.component';

const routes: Routes = [
  {path:"aboutMe", component: AboutMeSectionComponent},
  {path:"boite-clef-bdd",component:BoiteClefBddComponent},
  {path:"stage2A",component:StageDeuxiemeAnneeComponent},
  {path:"secuCloud",component:SecuriteCloudComponent},
  {path:"",component:AboutMeSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
