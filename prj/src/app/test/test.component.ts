import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: '[app-test]',
  template : `
  <h2 *ngIf="displayName; else nameElseBlock">
    Welcome Dimple
  </h2>
  <ng-template #nameElseBlock>
    <h2>
      Name is hidden
    </h2>
  </ng-template>
  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock>
    <h2>Codevolution</h2>
  </ng-template>
  <ng-template #elseBlock>
    <h2>Hidden</h2>    
  </ng-template>
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'blue'">You picked blue color</div>
    <div *ngSwitchCase="'green'">You picked green color</div>
    <div *ngSwitchDefault>Pick again</div>
  </div>
  <div *ngFor="let color of colors; index as i">
    <h2>{{i}} {{color}}</h2>
  </div>
  <div>
    <h2>{{"Hello " + parentData}}</h2>
  </div>
  <button (click)="fireEvent()">Send Event</button>
  <h2>{{"Codevolution" | lowercase}}</h2>
  <h2>{{"Codevolution" | uppercase}}</h2>
  <h2>{{"Welcome to codevolution" | titlecase}}</h2>
  <h2>{{"Codevolution" | slice:3:6}}</h2>
  <h2>{{person | json}}</h2>
  <h2>{{5.678 | number:'1.2-3'}}</h2>
  <h2>{{5.678 | number:'3.4-5'}}</h2>
  <h2>{{5.678 | number:'3.1-2'}}</h2>
  
  
  <h2>{{0.25 | percent}}</h2>
  <h2>{{0.25 | currency}}</h2>
  <h2>{{0.25 | currency:'GBP'}}</h2>
  <h2>{{0.25 | currency:'GBP':'code'}}</h2>
  
  <h2>{{date}}</h2>
  <h2>{{date | date:'short'}}</h2>
  <h2>{{date | date:'shortDate'}}</h2>
  <h2>{{date | date:'shortTime'}}</h2>
  
  
  
  
  `,
  styles: [`
  div{
    color : red;
  }
  `]
})
export class TestComponent implements OnInit {

  public displayName = false;
  public colors = ["red", "blue", "yellow", "orange"];
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('Hey Codevolution');
  }
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
