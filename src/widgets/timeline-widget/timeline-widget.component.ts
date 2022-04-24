import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-widget',
  templateUrl: './timeline-widget.component.html',
  styleUrls: ['./timeline-widget.component.css']
})
export class TimelineWidgetComponent implements OnInit {

  @Input()
  events:any[]=[];


  constructor() { }

  ngOnInit(): void {
    
  }

}
