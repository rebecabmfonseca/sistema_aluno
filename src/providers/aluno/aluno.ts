import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class AlunoProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  public inserir(aluno: Aluno) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.salvar(key, aluno);
  }

  public atualizar(key: string, aluno: Aluno) {
    return this.salvar(key, aluno);
  }

  private salvar(key: string, aluno: Aluno) {
    return this.storage.set(key, aluno);
  }

  public remover(key: string) {
    return this.storage.remove(key);
  }

  public todosOsAlunos() {

    let alunos: AlunoLista[] = [];

    return this.storage.forEach((value: Aluno, key: string, i: number) => {
      let aluno = new AlunoLista();
      aluno.key = key;
      aluno.aluno = value;
      alunos.push(aluno);
    })
      .then(() => {
        return Promise.resolve(alunos);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export class Aluno {
  nome: string;
  dataNascimento: string;
  serie: string;
  cep: string;
  rua: string;
  numeroCasa: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  nomeMae: string;
  cpfMae: string;
  diaPagamento: string;
}

export class AlunoLista {
  key: string;
  aluno: Aluno;
}