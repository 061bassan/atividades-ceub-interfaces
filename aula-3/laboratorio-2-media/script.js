// Laboratório 2 — Calculadora de média e situação
// Algoritmo:
// 1. Ler os três textos dos campos.
// 2. Se algum estiver vazio, mostrar mensagem e encerrar.
// 3. Converter para número.
// 4. Verificar se são finitos e estão entre 0 e 10.
// 5. Calcular (n1 + n2 + n3) / 3.
// 6. Média >= 6: Aprovado; senão: Recuperação.
// 7. Exibir a média com 2 casas decimais (toFixed(2)).
const botao = document.getElementById("calcular");
const saida = document.getElementById("resultado");

function mostrar(mensagem, ok) {
  saida.textContent = mensagem;
  saida.className = "resultado " + (ok ? "ok" : "erro");
}

botao.addEventListener("click", function () {
  const t1 = document.getElementById("n1").value.trim();
  const t2 = document.getElementById("n2").value.trim();
  const t3 = document.getElementById("n3").value.trim();

  // Campo vazio
  if (t1 === "" || t2 === "" || t3 === "") {
    mostrar("Erro: campo vazio. Preencha as três notas.", false);
    return;
  }

  const n1 = Number(t1);
  const n2 = Number(t2);
  const n3 = Number(t3);

  // Validação: finito e entre 0 e 10 (informa qual nota está inválida)
  const notas = [n1, n2, n3];
  for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
      mostrar("Erro: a nota " + (i + 1) + " é inválida (use valores de 0 a 10).", false);
      return;
    }
  }

  const media = (n1 + n2 + n3) / 3;

  if (media >= 6) {
    mostrar("Média " + media.toFixed(2) + " — Aprovado", true);
  } else {
    mostrar("Média " + media.toFixed(2) + " — Recuperação", false);
  }
});
