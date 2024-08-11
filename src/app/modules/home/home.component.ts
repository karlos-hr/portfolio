import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  private _name : string  = 'Carlos Andres Horta Rios';

  constructor() { }

  ngOnInit() {
  }

  public get name() : string {
    return this._name;
  }

}
