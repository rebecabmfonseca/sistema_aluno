import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { AlunoLista, AlunoProvider } from '../../providers/aluno/aluno';
import { EditarAlunoPage } from '../editar-aluno/editar-aluno';
import { VisualizarPage } from '../visualizar/visualizar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  alunos: AlunoLista[];

  constructor(public navCtrl: NavController, public alert:AlertController,
    private toast: ToastController,public alunoProvider: AlunoProvider) { }

  ionViewDidEnter() {
    this.alunoProvider.todosOsAlunos()
      .then((resultado) => {
        this.alunos = resultado;
      });
      
  }
  visualizarAluno(item){
    this.navCtrl.push(VisualizarPage, {aluno:item.aluno});
    console.log(item.aluno)
  }

  addAluno() {
    this.navCtrl.push(EditarAlunoPage);
  }

  editarAluno(item: AlunoLista) {
    this.navCtrl.push(EditarAlunoPage, { key: item.key, aluno: item.aluno });
  }

  removerAluno(item: AlunoLista) {

    const confirma = this.alert.create({
      message: 'Tem certeza que quer remover ?',
      buttons:[
        {
          text: 'Cancelar',
          handler:() =>{

          }
        },
        {
          text: 'Confirmo',
          handler:() =>{
            this.alunoProvider.remover(item.key)
            .then(() => {
              var index = this.alunos.indexOf(item);
              this.alunos.splice(index, 1);
              this.toast.create({ message: 'Aluno removido.', duration: 3000, position: 'botton' }).present();
            })
          }
        }
      ]
    })
    confirma.present();

    
  }

}