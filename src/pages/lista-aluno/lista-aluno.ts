import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { VisualizarAlunoPage } from '../visualizar-aluno/visualizar-aluno';


/**
 * Generated class for the ListaAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-aluno',
  templateUrl: 'lista-aluno.html',
})
export class ListaAlunoPage {
  listaAlunos: any;
  nome: any
  serie: any

  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public storage: Storage, public alert: AlertController) {
    this.nome = navParams.get('nome')
    this.serie = navParams.get('serie')
    this.listaAlunos = navParams.get('listaAlunos')
    console.log(this.listaAlunos[0].nome)

  }

  removerAluno(i,item) {
    const confirma = this.alert.create({
        title: 'Remover aluno ?',
        message: 'Tem certeza que quer remover esse aluno ?',
        buttons: [
          {
            text: 'Não',
            handler: () => {
              
            }
          },
          {
            text: 'Sim',
            handler: () => {
              this.listaAlunos.splice(i,1);
              this.storage.set('alunos',this.listaAlunos);
              console.log(this.listaAlunos)
            }
          }
        ]
      });
      confirma.present();
    }

    visualizarAluno(i,item){
      
      this.navCtrl.push(VisualizarAlunoPage, { aluno: this.listaAlunos[i]})

    }

  

}
