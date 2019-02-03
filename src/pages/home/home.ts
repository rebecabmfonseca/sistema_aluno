import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
  listaAlunos: any
  

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.listaAlunos = []
    this.storage.get('alunos').then(alu =>{
      for (let i = 0; i < alu.length; i++) {
        this.aluno.push({
            nome: alu[i].nome,
            data: alu[i].data,
            serie: alu[i].serie,
            cep: alu[i].cep,
            rua: alu[i].rua,
            numeroCasa: alu[i].numeroCasa,
            complemento: alu[i].complemento,
            bairro: alu[i].bairro,
            cidade: alu[i].cidade,
            estado: alu[i].estado,
            nomeMae: alu[i].nomeMae,
            cpfMae: alu[i].cpfMae,
            diaPagamento: alu[i].diaPagamento
        })
      }
    }) 
    this.storage.set("alunos", this.listaAlunos);
    
  }
  cadastrarAluno(){
    this.listaAlunos.push({
      nome: this.aluno.nome,
      data: this.aluno.data,
      serie: this.aluno.serie,
      cep: this.aluno.cep,
      rua: this.aluno.rua,
      numeroCasa: this.aluno.numeroCasa,
      complemento: this.aluno.complemento,
      bairro: this.aluno.bairro,
      cidade: this.aluno.cidade,
      estado: this.aluno.estado,
      nomeMae: this.aluno.nomeMae,
      cpfMae: this.aluno.cpfMae,
      diaPagamento: this.aluno.diaPagamento
      
    })
    this.storage.set("alunos", this.listaAlunos);
    console.log(this.listaAlunos)
  }

}
