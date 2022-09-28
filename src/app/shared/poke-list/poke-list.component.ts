import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.apiListAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results
      }
    );
  }

}
