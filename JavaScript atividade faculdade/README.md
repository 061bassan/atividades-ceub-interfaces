# JavaScript — Aula 2: Entrada de dados, DOM e condicionais

Desenvolvimento de Interface · ADS · CEUB · Profa. Kadidja Valéria

## Conteúdo
| Pasta | Descrição |
|---|---|
| `laboratorio-1-idade/` | Verificador de idade (com desafio extra: "Faltam X anos para completar 18") |
| `laboratorio-2-media/` | Calculadora de média de 3 notas, com situação Aprovado/Recuperação |
| `exercicios/` | Exercícios de fixação 1 a 5 (o 6 é a validação do Lab. 2) |

Abra `index.html` (nesta pasta) no navegador ou com o Live Server do VS Code.

## Casos de teste
**Laboratório 1:** 17 → Menor de idade · 18 → Maior de idade · 0 → Menor de idade · -2 → Idade inválida · 18.5 → Idade inválida · vazio → Informe a idade.

**Laboratório 2:** 8, 7, 9 → 8.00 Aprovado · 6, 6, 6 → 6.00 Aprovado · 5, 5, 5 → 5.00 Recuperação · 0, 0, 0 → 0.00 Recuperação · 12, 8, 9 → erro (nota fora da faixa) · 8, vazio, 9 → erro (campo vazio).

## Conceitos usados
`getElementById`, `.value`, `.trim()`, `Number()`, `Number.isInteger()`, `Number.isFinite()`, `addEventListener("click", ...)`, `if / else if / else`, `&&`, `||`, `textContent`, `toFixed(2)`.
