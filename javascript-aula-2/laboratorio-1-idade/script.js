// Laboratório 1 — Verificador de idade
const campoIdade = document.getElementById("idade");
const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
  // Entrada de dados sempre chega como texto (string)
  const texto = campoIdade.value.trim();

  // Validação 1: campo vazio (Number("") daria 0, por isso testamos antes)
  if (texto === "") {
    resultado.textContent = "Informe a idade.";
    return;
  }

  // Conversão para número
  const idade = Number(texto);

  // Validação 2: inteiro entre 0 e 120 (Number.isInteger barra 18.5 e NaN)
  if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
    resultado.textContent = "Idade inválida.";
    return;
  }

  // Decisão
  if (idade >= 18) {
    resultado.textContent = "Maior de idade.";
  } else {
    resultado.textContent = "Menor de idade.";
    // Desafio extra: quantos anos faltam para 18
    const falta = 18 - idade;
    resultado.textContent += " Falta" + (falta === 1 ? " 1 ano" : "m " + falta + " anos") + " para completar 18.";
  }
});
