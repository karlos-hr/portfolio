import { Component, Input, OnInit } from '@angular/core';
import { IWorkExperience } from '../../../core/interfaces/work-experience.interface';

@Component({
  selector: 'app-work-experience-component',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  @Input({required : true})
  workExperience?: IWorkExperience;

  constructor() { }

  ngOnInit() {
  }

}
