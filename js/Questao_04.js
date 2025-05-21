class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }

  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao() {
    if (this.media() > 6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
}

const alunos = [
  new Aluno("João", "Silva", 7, 8.5),
  new Aluno("Maria", "Santos", 6, 5),
  new Aluno("Gabriel", "Souza", 9, 8),
  new Aluno("Ana", "Souza", 4, 6),
  new Aluno("Lucas", "Pereira", 10, 9.5)
];

alunos.forEach(aluno => {
  alert(
    `Aluno: ${aluno.nomeCompleto()}\n` +
    `Nota 1: ${aluno.primeiraNota}\n` +
    `Nota 2: ${aluno.segundaNota}\n` +
    `Média: ${aluno.media().toFixed(2)}\n` +
    `Situação: ${aluno.situacao()}`
  );
});
