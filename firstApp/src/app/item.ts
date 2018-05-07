import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Item as ItemModel} from './models/item';

@Component({
  selector: 'item',
  templateUrl: './item.html',
  styleUrls: ['./app.component.css']
})
export class Item {
	@Input() item: ItemModel;
	@Output() onGetDetails = new EventEmitter();

	myStyle_0 = {
    	'font-size': '20px',
    	'font-weight': 'bold',
    	'color' : 'red',
    	'border-radius' : '25px',
  	}
  	myStyle_1 = {
    	'font-size': '20px',
    	'font-weight': 'bold',
    	'color' : 'blue',
    	'border-radius' : '25px',
  	}
  	myStyle_2 = {
    	'font-size': '20px',
    	'font-weight': 'bold',
    	'color' : 'green',
    	'border-radius' : '25px',
  	}

	getDetails(event : Event) { 
	   event.preventDefault();  
	   this.onGetDetails.emit(this.item);
	}
}

