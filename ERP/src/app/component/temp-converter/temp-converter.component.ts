import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.scss']
})
export class TempConverterComponent implements OnInit {

  fahrenheit = 0;
  celsius = 0;

  constructor() { }

  ngOnInit(): void {
  }

  convertToF() {
    console.log('convert to F');
    // (0°C x9/5)+32=32°F
    this.fahrenheit = (this.celsius * 9/5) + 32;
  }

  convertToC() {
    console.log('convert to C');
    this.celsius = (this.fahrenheit - 32) * (5/9);
  }

}
