import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  images = ["images/titelbild.png", "images/wein.jpg"];

  constructor() { }

  ngOnInit() {

  }

}
