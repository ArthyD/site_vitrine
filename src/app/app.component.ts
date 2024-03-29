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

       /* {
          "label":"Mes projets",
          "items":[{"label":"Système de réservation de vélos",routerLink: ['/boite-clef-bdd']},
          {"label":"La sécurité dans le continuum cloud IoT",routerLink: ['/secuCloud']}
        ],
          "icon":"pi pi-code"
      },*/
              {
                "label":"About me",
                "icon":"pi pi-user",
                routerLink: ['/']
              }

            ]
    }

                     
}


