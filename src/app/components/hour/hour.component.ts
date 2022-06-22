import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.scss']
})
export class HourComponent implements OnInit {

  @Input() hours: any;
  
  ngOnInit(): void {}

}
