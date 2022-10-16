import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-abaut',
  templateUrl: './abaut.component.html',
  styleUrls: ['./abaut.component.scss']
})
export class AbautComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Abaut');
  }

}
