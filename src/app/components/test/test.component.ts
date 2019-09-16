import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  name: string;
  age: number;

  constructor() {
    this.name = 'Charles';
    this.age = 22;
  }

  ngOnInit() {
  }

}
