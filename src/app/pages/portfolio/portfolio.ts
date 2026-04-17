import { Component } from '@angular/core';
import { Intro } from "./intro/intro";
import { AboutMe } from "./about-me/about-me";
import { Skills } from "./skills/skills";
import { Education } from "./education/education";

@Component({
  selector: 'app-portfolio',
  imports: [Intro, AboutMe, Skills, Education],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {}
