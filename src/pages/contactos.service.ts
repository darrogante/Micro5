import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

export class Item {

 	nombre: string;
 	organizacion: string;
 	numero: string;
 	correo: string;
 }


@Injectable()
export class Contactos {

	public items: Item[] = [];

	constructor() {

	}

	getContactos(): Observable<Item[]> {

		return of(this.items);
	}

	addContacto(item: Item): void{

		this.items.push(item);
		console.log("Lala?");
	}

}