import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [`
    .online{
      color: red;
    }
  `]
})
export class UserFormComponent implements OnInit {

  username: string = '';
  userNameEmpty: boolean = true;
  detailsDisplay:boolean = true;
  toggleButtonText:string = 'hide';
  clicksList:string[]=[];
  constructor() { }


  ngOnInit() {
  }

  onUserNameEntry(event: any){
    event.target.value.length == 0 ? this.userNameEmpty=true : this.userNameEmpty=false;
  }

  onResetClick(){
    this.username='';
    this.userNameEmpty=true;

  }
  onDisplayDetails(){
    this.detailsDisplay = !this.detailsDisplay;
    this.toggleButtonText == 'hide' ? this.toggleButtonText='show': this.toggleButtonText='hide';
    this.clicksList.push('clickAdded at : '+new Date());
  }
  getDisplay(){
    return this.detailsDisplay == true ? 'block' : 'none';
  }
}
