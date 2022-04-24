import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-caroussel-widget',
  templateUrl: './image-caroussel-widget.component.html',
  styleUrls: ['./image-caroussel-widget.component.css']
})
export class ImageCarousselWidgetComponent implements OnInit {

  @Input()
  imageList:any[]=[];

  @Input()
  name:string="";

  show:boolean=false;

  currentImage:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
