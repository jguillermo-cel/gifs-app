import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gif! :Gif;

  constructor(){}

  ngOnInit(): void {
    console.log(this.gif);
    if( !this.gif) throw new Error('Gif property is required');
  }
}
