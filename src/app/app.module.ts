import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatePipe } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import { AlunoProvider } from '../providers/aluno/aluno';
import { EditarAlunoPage } from '../pages/editar-aluno/editar-aluno';
import { BrMaskerModule } from 'brmasker-ionic-3';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditarAlunoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    BrMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditarAlunoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
    AlunoProvider
  ]
})
export class AppModule {}
