import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-visualizar-aluno',
  templateUrl: 'visualizar-aluno.html',
})
export class VisualizarAlunoPage {
  aluno: any = {
    nome: "",
    dataNascimento: "",
    serie:"",
    cep:"",
    rua:"",
    numeroCasa:"",
    complemento:"",
    bairro:"",
    cidade:"",
    estado:"",
    nomeMae:"",
    cpfMae:"",
    diaPagamento:"",

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.aluno = navParams.get('aluno')
    console.log(this.aluno)
  }

  

}
