import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent implements OnInit {
links: Array<Object>;
title: string;
showLink: boolean;
constructor(private appService:AppService){

}
ngOnInit(){

this.title = 'hello you!';
this.link = [
  {text:'Ronnie', href:'http://google.com'},
  {text:'lass', href:'http://google.com'},
  {text:'Mary', href:'http://google.com'},
  {text:'John', href:'http://google.com'},
  {text:'Link 1', href:'http://google.com'},
  {text:'Link 1', href:'http://google.com'},
  {text:'Link 1', href:'http://google.com'},
  {text:'Link 1', href:'http://google.com'},
  {text:'Link 1', href:'http://google.com'},
  {text:'Link 1', href:'http://google.com'},
  {text:'Link 1', href:'http://google.com'}
]
this.showLink = true;
}

toggleLink(){
this.showLink = this.appService.toggle(this.showLink);
console.log('this.showLink is ...', this.showLink);
}
