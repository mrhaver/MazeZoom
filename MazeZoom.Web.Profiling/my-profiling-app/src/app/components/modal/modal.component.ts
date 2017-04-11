import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-modal',
  template: `
  <div (click)="hide()" class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
       [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
     <div class="modal-dialog">
      <div class="modal-content">
        <ng-content select=".app-modal-body"></ng-content>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  public visible = false;
  private visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
}