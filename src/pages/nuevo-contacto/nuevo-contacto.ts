import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contactos, Item } from '../../pages/contactos.service';
/**
 * Generated class for the NuevoContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-nuevo-contacto',
	templateUrl: 'nuevo-contacto.html',
})
export class NuevoContactoPage {

	public todo = new Item();

	constructor(public navCtrl: NavController, public navParams: NavParams,
		public myContactos: Contactos) {

	}

	ionViewDidLoad() {

		console.log('ionViewDidLoad NuevoContactoPage');
	}

	logForm() {

		console.log(this.myContactos.items);
		this.myContactos.addContacto(this.todo);
		console.log(this.todo);
		this.navCtrl.pop();
	}

}
