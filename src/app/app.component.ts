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

constructor(private dataService: DataService){}

ngOnInit(){
  return this.dataService.getStates()
  .subscribe(data => this.states = data)
}
}
