import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public username: string;  

  constructor(_dataService: DataService) {  
      this.username = 'noufal'; 
      _dataService.setOption('username', this.username);  
    
  }  
 
  ngOnInit(): void {
  }

}
