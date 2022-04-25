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
          "label":"Mes réalisations", 
          "items":[{"label":"Stage de première année",routerLink: ['/stage1A']},
          {"label":"Stage de deuxième année",routerLink: ['/stage2A']},
          {"label":"La sécurité dans le continuum cloud IoT",routerLink: ['/secuCloud']}
        ],
          "icon":"pi pi-compass"
      },
        {
          "label":"Mes projets",
          "items":[{"label":"Système de réservation de vélos",routerLink: ['/boite-clef-bdd']}
        ],
          "icon":"pi pi-code"
      },
              {
                "label":"About me",
                "icon":"pi pi-user",
                routerLink: ['/aboutMe']
              },
              {
                "label":"Home",
                "icon":"pi pi-home",
                routerLink: ['/']
              }
            ]
    }

                     
}


