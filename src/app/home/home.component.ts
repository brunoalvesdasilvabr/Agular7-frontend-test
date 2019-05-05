import { Component, OnInit } from '@angular/core';
import { State } from '../state.module';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Brazil States';
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
this.filteredStates = this.states;
this.dataService.getStates().subscribe(data => this.states = data);

}

}