import { Component, OnInit, ViewChild } from '@angular/core';
import { IOptionsProjects } from '../../core/interfaces/options-projects.interace';
import { options_projects } from '../../data/mocks/projects/options-projects.mock';
import { SelectionableComponent } from '@components/components';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  private _filterOptions : IOptionsProjects[] = options_projects;
  @ViewChild(SelectionableComponent) selectionable?: SelectionableComponent;


  constructor() { }

  ngOnInit() {
  }

  
  public get filterOptions () : IOptionsProjects[]{
    return this._filterOptions;
  } 
}
