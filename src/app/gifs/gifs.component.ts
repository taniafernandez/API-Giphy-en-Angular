import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  gifs: any [] = []; //donde se almacenan los gifs el array puede ser de cualquier tipo
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs(); 
    this.dataService.getGifs().subscribe((response: any) => {  
      this.gifs = response;
    }); 
  }
}
