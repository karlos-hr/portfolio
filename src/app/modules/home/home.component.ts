import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  private _name : string  = 'Carlos Andres Horta Rios';
  private _githubLink : string = 'https://github.com/karlos-hr';
  private _linkedinLink : string = 'https://www.linkedin.com/in/carloshrios';

  constructor() { }

  ngOnInit() {
  }

  public get name() : string {
    return this._name;
  }

  public get linkedinLink() : string{
    return this._linkedinLink;
  } 

  public get githubLink() : string{
    return this._githubLink;
  } 

}
