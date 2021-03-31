import { Component, OnInit } from '@angular/core';
import { Photos } from 'src/app/modules/interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
    slides: Photos[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
