import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../../../core/interfaces/projects.interface';

@Component({
  selector: 'app-project-component',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input({required: true})
  project?: IProject


  protected imageIndex : number = 0;

  constructor() { }

  ngOnInit() {
  }


  back (event: MouseEvent){
    event.stopPropagation();
    event.preventDefault();
    this.imageIndex--;
    this.imageIndex = this.imageIndex < 0 ? (this.project?.images.length ?? 0) - 1: this.imageIndex;
  }

  next(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.imageIndex++;
    this.imageIndex %= this.project?.images.length ?? 0;
  }
    

}
