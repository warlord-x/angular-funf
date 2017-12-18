import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'changed';
  name = 'what';
  sharedWarningTextInApp = 'set from appcomponent';

  userCreatedEvent(event: any){
    console.log(event);
  }
}
