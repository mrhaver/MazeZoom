import { Component } from "@angular/core";

@Component({
   selector: 'my-component',
   template: `
     <isotope>
       <isotope-brick class="brick" *ngFor="let brick of bricks">{{brick.title}}</masonry-brick>
     </isotope>
     `,
     styles: [`
       .brick { width: 200px; }
     `]
 })
 class MyComponent {
   bricks = [
     {title: 'Brick 1'},
     {title: 'Brick 2'},
     {title: 'Brick 3'},
     {title: 'Brick 4'},
     {title: 'Brick 5'},
     {title: 'Brick 6'}
   ]
 }