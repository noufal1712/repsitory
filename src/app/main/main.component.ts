import { Component, OnInit } from '@angular/core';
import { DataService } from '../dashboard/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public data:any;  
   
  constructor(_dataService: DataService) {  

    debugger; 

    this.data = _dataService.getOption();  
    
  }  

  ngOnInit(): void {
  }

}
