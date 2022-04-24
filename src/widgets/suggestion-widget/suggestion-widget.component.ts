import { Component, Input, OnInit } from '@angular/core';
import { IStyleWidget } from 'src/app/dashboard-interface';


@Component({
  selector: 'app-suggestion-widget',
  templateUrl: './suggestion-widget.component.html',
  styleUrls: ['./suggestion-widget.component.css']
})
export class SuggestionWidgetComponent implements OnInit {

  @Input()
  link:string |undefined ="";

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

  constructor() { }

  ngOnInit(): void {
    
  }
  goToLink(url:string | undefined){
    if(url != undefined){
      window.open(url);
    }
    
  }
}
