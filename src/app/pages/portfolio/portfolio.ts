import { Component } from '@angular/core';
import { Intro } from "./intro/intro";

@Component({
  selector: 'app-portfolio',
  imports: [Intro],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {}
