import { Component, OnInit } from '@angular/core';
import { IWorkExperience } from '../../core/interfaces/work-experience.interface';
import { workExperiences } from '../../data/mocks/work-experience.mock';
import { IProject } from '../../core/interfaces/projects.interface';
import { projects } from '../../data/mocks/projects.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _name : string  = 'Carlos Andres Horta Rios';
  private _githubLink : string = 'https://github.com/karlos-hr';
  private _linkedinLink : string = 'https://www.linkedin.com/in/carloshrios';

  private _workExperiences : IWorkExperience[] = workExperiences; 
  private _projects : IProject[] = projects; 

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

  public get workExperiences() : IWorkExperience[]{
    return this._workExperiences;
  }

  public get projects () : IProject [] {
    return this._projects;
  }

}
