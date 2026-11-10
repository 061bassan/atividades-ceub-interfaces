// Exercícios de fixação — Aula 2
function mostrar(id, msg, ok) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.className = "resultado " + (ok ? "ok" : "erro");
}

// Retorna o número válido ou null (campo vazio / inválido)
function lerNumero(id) {
  const texto = document.getElementById(id).value.trim();
  if (texto === "") return null;
  const n = Number(texto);
  return Number.isFinite(n) ? n : null;
}

// ---------- Exercício 1: par ou ímpar ----------
function parOuImpar(n) {
  if (n % 2 === 0) { return "par"; } else { return "ímpar"; }
}
// Testes pedidos (8 e 11) no console
console.log("Exercício 1 — 8 é " + parOuImpar(8));
console.log("Exercício 1 — 11 é " + parOuImpar(11));

document.getElementById("ex1-btn").addEventListener("click", function () {
  const n = lerNumero("ex1-num");
  if (n === null || !Number.isInteger(n)) {
    mostrar("ex1-out", "Informe um número inteiro válido.", false);
    return;
  }
  const r = parOuImpar(n);
  console.log(n + " é " + r);
  mostrar("ex1-out", n + " é " + r, true);
});

// ---------- Exercício 2: desconto de 10% a partir de R$ 200 ----------
function calcularTotal(valor) {
  if (valor >= 200) { return valor * 0.9; } else { return valor; }
}
// Testes pedidos (199 e 200) no console
console.log("Exercício 2 — 199 => " + calcularTotal(199).toFixed(2));
console.log("Exercício 2 — 200 => " + calcularTotal(200).toFixed(2));

document.getElementById("ex2-btn").addEventListener("click", function () {
  const valor = lerNumero("ex2-valor");
  if (valor === null || valor < 0) {
    mostrar("ex2-out", "Informe um valor de compra válido.", false);
    return;
  }
  const total = calcularTotal(valor);
  console.log("Total: R$ " + total.toFixed(2));
  const desconto = valor >= 200 ? " (com 10% de desconto)" : " (sem desconto)";
  mostrar("ex2-out", "Total: R$ " + total.toFixed(2) + desconto, true);
});

// ---------- Exercício 3: acesso (idade >= 18 E cadastro ativo) ----------
document.getElementById("ex3-btn").addEventListener("click", function () {
  const idade = lerNumero("ex3-idade");
  const ativo = document.getElementById("ex3-ativo").checked;
  if (idade === null || !Number.isInteger(idade) || idade < 0 || idade > 120) {
    mostrar("ex3-out", "Idade inválida.", false);
    return;
  }
  if (idade >= 18 && ativo) {
    mostrar("ex3-out", "Acesso permitido.", true);
  } else if (idade < 18) {
    mostrar("ex3-out", "Acesso negado: é preciso ter 18 anos ou mais.", false);
  } else {
    mostrar("ex3-out", "Acesso negado: cadastro inativo.", false);
  }
});

// ---------- Exercício 4: saudação no DOM ----------
document.getElementById("ex4-btn").addEventListener("click", function () {
  const nome = document.getElementById("ex4-nome").value.trim();
  if (nome === "") {
    mostrar("ex4-out", "Preencha o nome.", false);
    return;
  }
  mostrar("ex4-out", "Olá, " + nome + "!", true); // textContent não interpreta HTML
});

// ---------- Exercício 5: temperatura ----------
// abaixo de 18: Frio | 18 até menos de 28: Agradável | 28 ou mais: Quente
document.getElementById("ex5-btn").addEventListener("click", function () {
  const t = lerNumero("ex5-temp");
  if (t === null) {
    mostrar("ex5-out", "Informe uma temperatura válida.", false);
    return;
  }
  if (t < 18) {
    mostrar("ex5-out", "Frio", true);
  } else if (t < 28) {
    mostrar("ex5-out", "Agradável", true);
  } else {
    mostrar("ex5-out", "Quente", true);
  }
});
