import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private _year : string = '2024';

  constructor() { }

  ngOnInit() {
  }


  public get year() : string {
    return this._year;
  }

}
