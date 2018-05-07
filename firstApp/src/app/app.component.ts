import { Component } from '@angular/core';
import { Item } from './models/item';
import { Config } from './config/config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;

  private reference : string ;
  private name: string ;
  private state : number;
  private collect: [any];
  private client: [any];
  private collection: [Item];
  private newItem: Item;

  
  constructor(){
  this.title = Config.APP_TITLE;
	this.collect  =  [
    {reference : '123', name : 'Ali G', state : 0},  
    {reference : '113', name : 'Boo', state : 1},  
    {reference : '5678', name : 'Jake the dog', state : 2} 
  ] ;
  this.client = [
    'Ali G',
    'Jake the dog',
    'Boo'
  ];
  this.collection  = Config.FAKE_COLLECTION;

  this.resetNewItem();

  }
resetNewItem(){
  this.newItem =new Item({reference : '', name :'', state : 0}) ;
}

onGetDetails(item) { 
  console.log(item); 
}


createObject(){
	let ob = {reference : this.reference, name : this.name, state : this.state} ;
	this.collect.unshift(ob) ;
} 
createObjectOpti(){
  let ob = {reference : this.reference, name : this.name, state : this.state};
  this.collection.unshift(ob);
  this.client.unshift(ob.name);
} 

deleteObject(){ 
	var j=-1;
	for(var i = 0, len = this.collection.length; i < len; i++) {
    	if (this.collection[i].reference == this.reference) {
        	console.log(i);
        	this.collect.splice(i,1);
          this.collection.splice(i,1);
          this.client.splice(i);
        }
        else {console.log("Client non réferencé ");}
	}
}

annuleObject(){
	this.collect.pop() ;
} 

}



