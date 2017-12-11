import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  username: string = '';
  userNameEmpty: boolean = true;
  constructor() { }


  ngOnInit() {
  }

  onUserNameEntry(event: any){

    if(event.target.value.length==0)
      this.userNameEmpty = true;
    else
      this.userNameEmpty = false;
  }

  onResetClick(){
    this.username='';
    this.userNameEmpty=true;
  }
}
