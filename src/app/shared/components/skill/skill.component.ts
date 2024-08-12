import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from '../../../core/interfaces/skill.interface';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input({required: true})
  skill?: ISkill 

  constructor() { }

  ngOnInit() {
  }

}
