

function criaPessoa(nome, sobrenome) {
  return {
    nome, sobrenome,
    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    }

  };
}
const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.fala('Falando sobre JS'))