import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css']
})
export class AboutMeSectionComponent implements OnInit {

  constructor() { }

  mapSchools:any;

  schoolsLocation:any=[
    {
      "name":"IMT Atlantique Brest",
      "location":[48.358677, -4.571171]
  },
  {
      "name":"IMT Atlantique Nantes",
      "location":[47.281884, -1.519911]
  },
  {
      "name":"Lycée Faidherbe",
      "location":[50.615115, 3.078029]
  },
  {
      "name":"Technische Universität München TUM",
      "location":[48.149116, 11.567334]
  }
  ]

  timeline:any=[{"name":"Prépa PCSI/PSI*","date":"2018/2019"},
  {"name":"Première année IMT Atlantique","date":"2020"},
  {"name":"Stage en recherche","date":"Juillet 2021"},
  {"name":"IMT Atlantique Nantes automatique et contrôle commande","date":"2021"},
  {"name":"Stage ingénieur à Ifremer","date":"Début 2022"},
  {"name":"Semestre d\'échange académique à TUM","date":"2022"},
  {"name":"IMT Atlantique Système Embarqué Hétérogène","date":"2023"},
  {"name":"Futur","date":"Futur"}
  ]

  assos:any=[
    {"name":"Bureau du développement durable","image":"../../assets/logo/bdd.png"},
    {"name":"Animateur fresque du climat","image":"../../assets/logo/fdclimat.png"},
    {"name":"Animateur fresque du numérique","image":"../../assets/logo/fdnumerique.png"},
    {"name":"Coordinateur du groupe TforC","image":"../../assets/logo/tforc.png"}
  ]

  selectedElement:string="Prépa PCSI/PSI*";

  ngOnInit(): void {
    this.mapSchools = L.map('mapSchools').setView([48.3833, -4.6167], 3);
    this.mapSchools.scrollWheelZoom.disable();
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Arthy Map'
    }).addTo(this.mapSchools);
    
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
      iconSize: [24,36],
      iconAnchor: [12,36]
    });

   
      for(let location of this.schoolsLocation){
        L.marker([location.location[0],location.location[1]], {icon: myIcon}).bindPopup(location.name).addTo(this.mapSchools);
      }
    
  }

}
