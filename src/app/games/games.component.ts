import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  public games;

  constructor() {

   }

  ngOnInit(): void {
  this.games = [
      {
        titulo: 'CBLOL - SEMANA 1 - 04 de Julho',
        jogos: [
          {
            id: 1, horario: '12:00h', time1: 'KBM', logo1: '../../assets/kabum.png', time2: 'VK', logo2: '../../assets/keyd.png'
          },
          {
            id: 2, horario: '13:00h', time1: 'PNG', logo1: '../../assets/pain.png', time2: 'SAN', logo2: '../../assets/santos.png'
          },
          {
            id: 3, horario: '14:00h', time1: 'FUR', logo1: '../../assets/furia.png', time2: 'FLA', logo2: '../../assets/flamengo.png'
          },
          {
            id: 4, horario: '15:00h', time1: 'ITZ', logo1: '../../assets/intz.png', time2: 'PRG', logo2: '../../assets/prodigy.png'
          },
        ]
      }
    ];
    console.log(this.games[0].jogos);
  }
  testClick(){
    console.log('clicked')
  }

}
