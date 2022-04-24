import { Component, Input, OnInit } from '@angular/core';
import { IStyleWidget } from 'src/app/dashboard-interface';

@Component({
  selector: 'app-career-suggestion-widget',
  templateUrl: './career-suggestion-widget.component.html',
  styleUrls: ['./career-suggestion-widget.component.css']
})
export class CareerSuggestionWidgetComponent implements OnInit {

  @Input()
  link:string |undefined ="";

  @Input()
  sideImagePath:string |undefined ="";

  @Input()
  imagePath:string | undefined="";

  @Input()
  name:string="";

  @Input()
  desc:string="";

  @Input()
  size:string="";

  @Input()
  style:IStyleWidget={
    "colorTitle": "#EF8538",
    border: false,
    size: ''
  }

  @Input()
  recruitingLink:string="";

  constructor() { }

  ngOnInit(): void {
    
  }
  goToLink(url:string | undefined){
    if(url != undefined){
      window.open(url);
    }
    
  }

}
