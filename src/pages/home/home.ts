import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ListaAlunoPage } from '../lista-aluno/lista-aluno';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aluno: any = {
    nome: "",
    dataNascimento: "",
    serie: "",
    cep: "",
    rua: "",
    numeroCasa: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    nomeMae: "",
    cpfMae: "",
    diaPagamento: "",
  }
  listaAlunos: any
  TodososAlunos: any
  

  formGroup: FormGroup;
  
  nome: AbstractControl
  data: AbstractControl
  serie: AbstractControl
  cep: AbstractControl
  rua: AbstractControl
  numeroCasa: AbstractControl
  bairro: AbstractControl
  cidade: AbstractControl
  estado: AbstractControl
  nomeMae: AbstractControl
  cpfMae: AbstractControl
  diaPagamento: AbstractControl
  

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    public navParams: NavParams,
    private formBuilder: FormBuilder) {

    this.formGroup = formBuilder.group({
      nome: ['', Validators.required],
      data: ['', Validators.required],
      serie: ['', Validators.required],
      cep: ['', Validators.required],
      rua: ['', Validators.required],
      numeroCasa: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      nomeMae: ['', Validators.required],
      cpfMae: ['', Validators.required],
      diaPagamento: ['', Validators.required]
    });
    this.nome = this.formGroup.controls['nome'];
    this.data = this.formGroup.controls['data'];
    this.serie = this.formGroup.controls['serie'];
    this.cep = this.formGroup.controls['cep'];
    this.rua = this.formGroup.controls['rua'];
    this.numeroCasa = this.formGroup.controls['numeroCasa'];
    this.bairro = this.formGroup.controls['bairro'];
    this.cidade = this.formGroup.controls['cidade'];
    this.estado = this.formGroup.controls['estado'];
    this.nomeMae = this.formGroup.controls['nomeMae'];
    this.cpfMae = this.formGroup.controls['cpfMae'];
    this.diaPagamento = this.formGroup.controls['diaPagamento'];


    this.listaAlunos = this.listaAlunos || []
    this.aluno = this.aluno || [];
    this.storage.get('alunos').then(alu => {
      for (let i = 0; i < alu.length; i++) {
        this.aluno.push([{
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
        }])

      }
      console.log("la:", typeof this.aluno)
    })
    this.storage.set("alunos", this.listaAlunos);

  }
  
  
  cadastrarAluno() {
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

    this.navCtrl.push(ListaAlunoPage, {
      nome: this.aluno.nome,
      serie: this.aluno.serie,
      listaAlunos: this.listaAlunos
    });

  }
}