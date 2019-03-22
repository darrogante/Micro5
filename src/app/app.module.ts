import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { LibretaContactosPage } from '../pages/libreta-contactos/libreta-contactos';
import { NuevoContactoPage } from '../pages/nuevo-contacto/nuevo-contacto';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';

import { Contactos } from '../pages/contactos.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LibretaContactosPage,
    NuevoContactoPage,
    AcercaDePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LibretaContactosPage,
    NuevoContactoPage,
    AcercaDePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Contactos
  ]
})
export class AppModule {}
