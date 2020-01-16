import { Component } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent{
  appareilName: string = 'Machine à laver';
  appareilStatus: string = "éteint";

  getStatus() {
    return this.appareilStatus;
  }
}
