import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerice1',
  templateUrl: './exerice1.component.html',
  styleUrls: ['./exerice1.component.css']
})
export class Exerice1Component implements OnInit {

  public liaison1: string;
  public liaison2: string;
  public liaison3: string;
  constructor() { }

  ngOnInit(): void {
    this.liaison1 = "Bonjour";
    this.liaison3 = "Bonjour";
  }

  sayBonjour(value: string): void
  {
    this.liaison2 = 'Bonjour ' + value;
  }
}
