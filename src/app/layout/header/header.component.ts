import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  

  private _githubLink : string = 'https://github.com/karlos-hr';
  private _linkedinLink : string = 'https://www.linkedin.com/in/carloshrios';

  constructor() { }

  ngOnInit() {
  }


  public get linkedinLink() : string{
    return this._linkedinLink;
  } 

  public get githubLink() : string{
    return this._githubLink;
  } 

}
