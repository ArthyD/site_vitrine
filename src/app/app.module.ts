import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SuggestionWidgetComponent } from 'src/widgets/suggestion-widget/suggestion-widget.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {TabMenuModule} from 'primeng/tabmenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {CarouselModule} from 'primeng/carousel';
import {TimelineModule} from 'primeng/timeline';
import {FieldsetModule} from 'primeng/fieldset';
import {DropdownModule} from 'primeng/dropdown';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputNumberModule} from 'primeng/inputnumber';


import {MenuModule} from 'primeng/menu';
import { CardModule, } from 'primeng/card';
import {ImageModule} from 'primeng/image';

import { CareerSuggestionWidgetComponent } from '../widgets/career-suggestion-widget/career-suggestion-widget.component';
import { ImageCarousselWidgetComponent } from '../widgets/image-caroussel-widget/image-caroussel-widget.component';
import { TimelineWidgetComponent } from '../widgets/timeline-widget/timeline-widget.component';
import { MessagesModule } from 'primeng/messages';

import { HttpClientModule } from '@angular/common/http';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { StagePremiereAnneeComponent } from './stage-premiere-annee/stage-premiere-annee.component';
import { StageDeuxiemeAnneeComponent } from './stage-deuxieme-annee/stage-deuxieme-annee.component';
import { SecuriteCloudComponent } from './securite-cloud/securite-cloud.component';
import { BoiteClefBddComponent } from './boite-clef-bdd/boite-clef-bdd.component';


@NgModule({
  declarations: [
    AppComponent,
    SuggestionWidgetComponent,
    CareerSuggestionWidgetComponent,
    ImageCarousselWidgetComponent,
    TimelineWidgetComponent,
    AboutMeSectionComponent,
    StagePremiereAnneeComponent,
    StageDeuxiemeAnneeComponent,
    SecuriteCloudComponent,
    BoiteClefBddComponent




  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    TabMenuModule,
    PanelMenuModule,
    MenuModule,
    TieredMenuModule,
    CheckboxModule,
    CardModule,
    ImageModule,
    DialogModule,
    CarouselModule,
    TimelineModule,
    FieldsetModule,
    DropdownModule,
    InputTextareaModule,
    InputNumberModule,
    ScrollPanelModule,
    HttpClientModule,
    ConfirmDialogModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
