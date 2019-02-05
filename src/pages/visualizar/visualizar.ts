import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Aluno } from '../../providers/aluno/aluno';


@IonicPage()
@Component({
  selector: 'page-visualizar',
  templateUrl: 'visualizar.html',
})
export class VisualizarPage {
  aluno: Aluno;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(this.navParams.data.aluno){
      this.aluno = this.navParams.data.aluno;
    }
  }


}
