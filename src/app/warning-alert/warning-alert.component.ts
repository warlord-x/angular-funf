import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent{
  @Input() sharedWarningText:string = 'default shared text for warning';
}
