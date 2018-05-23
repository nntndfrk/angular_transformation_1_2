import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  congratulations = [
    'Hello World',
    'Привет Мир',
    'Привіт Світ',
    'Hola Mundo',
    'Bonjour le monde',
  ];

  congratulation = '';

  constructor() {
    this.showCongratulation();
  }

  ngOnInit() {
    setInterval(this.showCongratulation, 3000);
  }

  showCongratulation = () => {
    this.congratulation = this.congratulations.splice(0, 1)[0];
    this.congratulations.push(this.congratulation);
  }

}
