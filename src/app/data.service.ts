import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }
  
  giphyApiKey= 'urCAPcnpUHkGJJ9NU7hQ8q8mWEU70Lmo'; 
  giphyUrl= 'https://api.giphy.com/v1/gifs/';

  getTrendingGifs(){
    return this.http.get(this.giphyUrl+`trending?api_key=` + this.giphyApiKey+ `&limit=25`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    });
  }

  searchGifs(gifName: String){ 
    return this.http.get(this.giphyUrl+ `search?q=${gifName}&api_key=` + this.giphyApiKey + `&limit=25`)
    .subscribe((response: any) => {
      this.gifs.next(response.data); 
  });
  }
  getGifs(){
    return this.gifs.asObservable();
  }
}