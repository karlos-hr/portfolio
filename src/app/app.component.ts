import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  private _title : string = 'Portfolio';
  private _description : string = "I am a web application developer, specialized in technological solutions and the development of unique applications tailored to the specific needs of each project.";


  constructor ( private meta: Meta){
    this.meta.updateTag({name : 'description', content: this._description});
  }



}
