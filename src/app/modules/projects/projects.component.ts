import { Component, OnInit } from '@angular/core';
import { IOptionsProjects } from '../../core/interfaces/options-projects.interace';
import { options_projects } from '../../data/mocks/projects/options-projects.mock';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  private _filterOptions : IOptionsProjects[] = options_projects;

  constructor() { }

  ngOnInit() {
  }

  
  optionSelection( value : string) : void {
    alert(value);
  }

  public get filterOptions () : IOptionsProjects[]{
    return this._filterOptions;
  } 
}
