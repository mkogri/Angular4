import { Item } from '../models/item';

export class Config {
	public static get APP_TITLE(): string { return 'Kogri';}
	public static get APP_VERSION(): number { return 1;}
	public static get FAKE_COLLECTION(): [Item] { return [
		new Item({reference : '123', name : 'Ali G', state : 0}),  
   		new Item({reference : '113', name : 'Boo', state : 1}),  
    	new Item({reference : '5678', name : 'Jake the dog', state : 2})
	]}

}