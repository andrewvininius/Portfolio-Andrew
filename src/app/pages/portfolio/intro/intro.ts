// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-intro',
//   imports: [],
//   templateUrl: './intro.html',
//   styleUrl: './intro.scss',
// })
// export class Intro {}
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro {

  isOpen = signal(false);

  constructor() {
    effect(() => {
      document.body.style.overflow = this.isOpen() ? 'hidden' : 'auto';
    });
  }

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }
}
