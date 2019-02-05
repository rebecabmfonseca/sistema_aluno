import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Aluno, AlunoProvider } from '../../providers/aluno/aluno';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-editar-aluno',
  templateUrl: 'editar-aluno.html',
})
export class EditarAlunoPage {
  model: Aluno;
  key: string;

  formGroup: FormGroup;
  nome: AbstractControl
  dataNascimento: AbstractControl
  serie: AbstractControl
  cep: AbstractControl
  rua: AbstractControl
  numeroCasa: AbstractControl
  bairro: AbstractControl
  complemento: AbstractControl
  cidade: AbstractControl
  estado: AbstractControl
  nomeMae: AbstractControl
  cpfMae: AbstractControl
  diaPagamento: AbstractControl


  constructor(public navCtrl: NavController, public toast: ToastController, public formBuilder: FormBuilder,
    public navParams: NavParams, public alunoProvider: AlunoProvider ){
      if (this.navParams.data.aluno && this.navParams.data.key) {
        this.model = this.navParams.data.aluno;
        this.key =  this.navParams.data.key;
      } else {
        this.model = new Aluno();
      }
      this.formGroup = formBuilder.group({
        nome: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
        dataNascimento: ['', Validators.required],
        serie: ['', Validators.required],
        cep: ['', Validators.required],
        rua: ['', Validators.compose([Validators.required, Validators.maxLength(120)])],
        numeroCasa: ['', Validators.required],
        bairro: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
        complemento: ['', Validators.maxLength(50)],
        cidade: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
        estado: ['', Validators.required],
        nomeMae: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
        cpfMae: ['', Validators.required],
        diaPagamento: ['', Validators.compose([Validators.required, Validators.max(30), Validators.min(1)])]
      });
      this.nome = this.formGroup.controls['nome'];
      this.dataNascimento = this.formGroup.controls['dataNascimento'];
      this.serie = this.formGroup.controls['serie'];
      this.cep = this.formGroup.controls['cep'];
      this.rua = this.formGroup.controls['rua'];
      this.numeroCasa = this.formGroup.controls['numeroCasa'];
      this.bairro = this.formGroup.controls['bairro'];
      this.complemento = this.formGroup.controls['complemento'];
      this.cidade = this.formGroup.controls['cidade'];
      this.estado = this.formGroup.controls['estado'];
      this.nomeMae = this.formGroup.controls['nomeMae'];
      this.cpfMae = this.formGroup.controls['cpfMae'];
      this.diaPagamento = this.formGroup.controls['diaPagamento'];
  
    }
  
    salvar() {
      this.salvarAluno()
        .then(() => {
          this.toast.create({ message: 'Aluno salvo.', duration: 3000, position: 'botton' }).present();
          this.navCtrl.pop();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao salvar o aluno.', duration: 3000, position: 'botton' }).present();
        });
    }
  
    private salvarAluno() {
      if (this.key) {
        return this.alunoProvider.atualizar(this.key, this.model);
      } else {
        return this.alunoProvider.inserir(this.model);
      }
    }
  
  }