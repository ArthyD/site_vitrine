import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IDashboardJson, IDashBoardWidget } from './dashboard-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arthur_website';
  items: MenuItem[]=[];
  

  constructor() { 
    
  }

    ngOnInit(): void {
      this.items=[

      {
          "label":"Mes projets",
          "items":[{"label":"Système de réservation de vélos",routerLink: ['/boite-clef-bdd']},
          {"label":"Ma formation à la cybersécurité",routerLink: ['/cyber']},
          {"label":"Projets personels à la maison",routerLink: ['/homeProjects']},
          {"label":"La sécurité dans le continuum cloud IoT",routerLink: ['/secuCloud']},
          
        ],
          "icon":"pi pi-code"
      },
      {
        "label":"Mon engagement",
        
        "icon":"pi pi-compass",
        routerLink: ['/associations']
    },
              {
                "label":"About me",
                "icon":"pi pi-user",
                routerLink: ['/']
              }

            ]
    }

                     
}


