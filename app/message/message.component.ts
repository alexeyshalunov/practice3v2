import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Output() onChanged = new EventEmitter<boolean>();

  timeStartInterval: number = 10;
  timeTemp:number;
  interval:number = 0;
  MessageText:string = "";
  finColor:boolean;
  showNewComponent:boolean = false;

  start() {
    this.finColor = true;
    this.interval = setInterval(() => {
      if(this.timeStartInterval >= 0) {
        this.timeTemp = this.timeStartInterval;
        this.timeStartInterval--;        
        this.MessageText = "";
        this.showNewComponent = false;
      } else {
        this.MessageText = "Time's Up!!!";
        this.timeStartInterval = 10;
        this.showNewComponent = true;
      }
    },1000);
    return(this.showNewComponent);
  }

  pause() {
    clearInterval(this.interval);
    this.finColor = false;
    return(this.finColor);
  }

  change(text:boolean) {
      this.onChanged.emit(text);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
