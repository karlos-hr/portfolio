import { Component, OnInit } from '@angular/core';
import { ITagProject } from '../../core/interfaces/projects.interface';
import { tags } from '../../data/mocks/footer.mock';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private _year : string = '2024';
  private _tags : ITagProject[]  = tags;

  constructor() { }

  ngOnInit() {
  }


  public get tags() : ITagProject[] { 
    return this._tags;
  }
  public get year() : string {
    return this._year;
  }

}
