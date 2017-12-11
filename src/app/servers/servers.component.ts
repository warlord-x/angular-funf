import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServerAdd = false;
  serverAdded: string = "no server is added";

  constructor() {
    setTimeout(()=>{
      this.allowServerAdd = true;
    },2000);
  }

onServerAdd(){
    this.serverAdded="server is added";
}
  ngOnInit() {
  }



}
