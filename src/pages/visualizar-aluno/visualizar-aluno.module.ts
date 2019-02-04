import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualizarAlunoPage } from './visualizar-aluno';

@NgModule({
  declarations: [
    VisualizarAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(VisualizarAlunoPage),
  ],
})
export class VisualizarAlunoPageModule {}
