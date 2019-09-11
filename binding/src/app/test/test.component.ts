import { Component, OnInit } from '@angular/core';


@Component({
  selector: '[app-test]',
  template: `<div>
  <h2> Welcome {{name}} </h2>
  <h2> {{2+2}} </h2>
  <h2> {{"Welcome " + name}} </h2>
  <h2> {{name.length}} </h2>
  <h2> {{name.toUpperCase()}} </h2>
  <h2> {{greetUser()}} </h2>
  <h2> {{window.location.href}} </h2>
  <h2> {{siteURL}} </h2>
  <input [id]= "myId" type = "text" value = "Dimple">
  <input disabled id = "{{myId}}" type = "text" value = "Dimple">
  <input disabled = "false" id="{{myId}}" type="text" value = "Dimple">
  <input [disabled] = "false" id="{{myId}}" type = "text" value = "Dimple">
  <input [disabled] = "isDisabled" id = "{{myId}}" type = "text" value="Dimple">
  <input bind-disabled = "isDisabled" id = "{{myId}}" type = "text" value = "Dimple">
  <h2 [class] = "successClass">Codevolution</h2>
  <h2 class="text-special" [class]="successClass">Codevolution</h2>
  <h2 [class.text-danger]="hasError">Codevolution</h2>
  <h2 [ngClass]="messageClasses">Codevolution</h2>
  <h2 [style.color] = "orange">Style Binding 1</h2>
  <h2 [style.color] = "hasError ? 'red' : 'green'>Style Binding 2</h2>
  <h2 [style.color] = "highlightColor">Style Binding 3</h2>
  <h2 [ngStyle] = "titleStyles">Style Binding 4</h2>
  <button click="onClick()">Greet</button>
  {{greeting}}
  <button click = "onClick($event)">Greet</button>
  {{greeting}}
  <button (click)="greeting='Welcome Dimple'">Greet</button>
  {{greeting}}
  <input #myInput type = "text">
  <button (click)="logMessage(myInput.value)>Log</button>
  <input [(ngModel)] = "name" type = "text">
  {{name}}
  </div>
  ` ,
  styles: [`
  .text-success{
    color: green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style: italic;
  }
`]
})

export class TestComponent implements OnInit {

    public name = "Codevolution";
    public url = window.location.href;
    public myId = "testId";
    public isDisabled = true;
    public successClass = "text-success";
    public hasError = false;
    public isSpecial = true;
    public messageClasses = {
      "text-success": !this.hasError,
      "text-danger": this.hasError,
      "text-special": this.isSpecial
    }
  
    public highlightColor = "orange";
    public titleStyles = {
      color: "blue",
      fontStyle: "italic"
    }
  
    public greeting = "";
    
    constructor() { }
  
    ngOnInit() {
    }
  
    greetUser(){
      return "Hello " + this.name;
    }
  
    onClick(event){
      console.log(event)
      this.greeting = event.type;
    }
    
    logMessage(value){
      console.log(value)
    }
  
  }