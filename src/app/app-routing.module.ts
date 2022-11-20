import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { BoiteClefBddComponent } from './boite-clef-bdd/boite-clef-bdd.component';
import { SecuriteCloudComponent } from './securite-cloud/securite-cloud.component';
import { AssoComponent } from './asso/asso.component';
import { CyberComponent } from './cyber/cyber.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"aboutMe", component: AboutMeSectionComponent},
  {path:"boite-clef-bdd",component:BoiteClefBddComponent},
  {path:"secuCloud",component:SecuriteCloudComponent},
  {path:"associations",component:AssoComponent},
  {path:"homeProjects",component:HomeComponent},
  {path:"cyber",component:CyberComponent},
  {path:"",component:AboutMeSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
