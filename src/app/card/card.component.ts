import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  //#region  props

  images: string[] = ['../../assets/image/(1).jpg', '../../assets/image/(2).jpg', '../../assets/image/(3).jpg', '../../assets/image/(5).jpg', '../../assets/image/(6).jpg'];
  currentIndex: number = 0;
  interval: any;
  //#endregion

  //#region  onstart

  constructor() { }

  ngOnInit() {
    // this.startRotation();
  }
  //#endregion
  
  //#region  next and prev

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  //#endregion

  //#region  start and end

  startRotation() {
    this.interval = setInterval(() => {
      this.next();
    }, 2000); // Change image every 2 seconds
  }

  stopRotation() {
    clearInterval(this.interval);
  }
  //#endregion

}
