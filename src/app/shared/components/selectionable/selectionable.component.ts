import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ISelectionableComponent } from '../../../core/interfaces/selectionable-component.interface';
import { IOptionsProjects } from '../../../core/interfaces/options-projects.interace';

@Component({
  selector: 'app-selectionable',
  templateUrl: './selectionable.component.html',
  styleUrls: ['./selectionable.component.scss']
})
export class SelectionableComponent implements OnInit {

  @Input({required : true})
  data!: ISelectionableComponent;

  hoverSelected?: IOptionsProjects;

  private _idSelect : string = 'states-button';
  private _projectTyping : string = ""
  private _timeOutTyping : any ;

  @ViewChild('dropdownStates',{static: true}) dropdownStates? : ElementRef;
  constructor() { }

  ngOnInit() {
  }

  optionSelection( option : IOptionsProjects) : void {
    this.data.selected = option;
    this.removeSelections();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const srcElement : any = event.target;
    if(!srcElement) return;
    const letter : string = event.key; 
    if(srcElement.id != this._idSelect) return;
    
    if (letter === 'Enter' && this.hoverSelected) {
      this.data.selected = this.hoverSelected;
      return;
    }else if(letter.length > 1) {
      delete this.hoverSelected;
      return;
    }

    
    
    this._projectTyping += letter;
    this.hoverSelected = this.data?.options.find((value : IOptionsProjects) => value.name.toLowerCase().startsWith(this._projectTyping.toLowerCase()));
    if(this.hoverSelected){
      const value : string = this.hoverSelected.value;
      const valueElement = document.getElementById(value);
      if(valueElement) {
        valueElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if(this._timeOutTyping) clearTimeout(this._timeOutTyping); 
    
    this._timeOutTyping= setTimeout(() => {
      this._projectTyping = "";
    },300);

    
  }

  removeSelections(removeHidden : boolean = false) {
    if(!this.dropdownStates) return;
    const element : HTMLElement = this.dropdownStates.nativeElement;
    if(!element.classList.contains('hidden')) element.classList.add('hidden');
    else if(removeHidden) element.classList.remove('hidden');
    delete this.hoverSelected;
  }
  public get idSelect () : string {
    return this._idSelect;
  }
}
