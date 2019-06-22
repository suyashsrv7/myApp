import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textValue: String = 'Example Text';
  disableInputBox: Boolean = false;
  boxValue: String = 'Type Here';
  ghostText: Boolean = false;
  ghostTextVal: String = null;
  twoWayBindVal: String = null;

  disableInput() {
    this.disableInputBox = !this.disableInputBox;
    if (this.disableInputBox === false) {
      this.boxValue = 'Type Here';
    } else {
      this.boxValue = 'Input box is Disabled';
    }
  }

  updateGhostText(event: any) {
    if(this.ghostText === true) {
      this.ghostTextVal = (event.target).value;
    }
  }

  enableGhostText() {
    this.ghostText = !this.ghostText;
  }
}
