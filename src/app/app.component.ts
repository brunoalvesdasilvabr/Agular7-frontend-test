import { DataService } from './data.service';
import { State } from './state.module';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  states: State[];
  filteredStates:State[];
  private _searchItem:string;
  get searchItem():string{
    return this._searchItem
  }
  set searchItem(value: string){
    this._searchItem = value;
    this.filteredStates = this.filterName(value)
  }

  filterName(searchItem: string){
    return this.states.filter(State => State.nome.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1)
  }

  

constructor(private dataService: DataService){}

ngOnInit(){
   this.dataService.getStates()
  .subscribe(data => this.states = data);
this.filteredStates = this.states
}

triggerViewmore(){
 document.querySelector('.viewMore').style.display = "block"
}

fecharViewMore(){
  document.querySelector('.viewMore').style.display = "none";
}
}


