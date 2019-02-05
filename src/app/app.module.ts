import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonicStorageModule } from '@ionic/storage';
import { ListaAlunoPage } from '../pages/lista-aluno/lista-aluno';
import { VisualizarAlunoPage } from '../pages/visualizar-aluno/visualizar-aluno';
import { BrMaskerModule } from 'brmasker-ionic-3';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaAlunoPage,
    VisualizarAlunoPage
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
    ListaAlunoPage,
    VisualizarAlunoPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
