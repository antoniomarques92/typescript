import { despesas } from "./tipos";
import { adicionardespesas, removerdespesas, despesasDaCategoria, totalGasto, maiordespesas } from "./despesas";
import { formatarRelatorio } from "./relatorio";

const lista: despesas[] = [
  { id: 1, descricao: "Mercado", valor: 250, data: new Date(2026, 0, 15), categoria: "alimentacao", mes: 1 },
  { id: 2, descricao: "Ônibus", valor: 80, data: new Date(2026, 0, 20), categoria: "transporte", mes: 1 },
  { id: 3, descricao: "Consulta médica", valor: 200, data: new Date(2026, 1, 5), categoria: "saude", mes: 2 },
  { id: 4, descricao: "Cinema", valor: 50, data: new Date(2026, 1, 10), categoria: "lazer", mes: 2 },
  { id: 5, descricao: "Aluguel", valor: 1200, data: new Date(2026, 0, 1), categoria: "moradia", mes: 1 },
  { id: 6, descricao: "Curso online", valor: 300, data: new Date(2026, 2, 12), categoria: "educacao", mes: 3 },
  { id: 7, descricao: "Restaurante", valor: 100, data: new Date(2026, 1, 18), categoria: "alimentacao", mes: 2 },
  { id: 8, descricao: "Gasolina", valor: 250, data: new Date(2026, 2, 20), categoria: "transporte", mes: 3 }
];

const nova: despesas = { id: 9, descricao: "Livro", valor: 60, data: new Date(2026, 2, 25), categoria: "educacao", mes: 3 };
const atualizadas = adicionardespesas(lista, nova);

console.log("Total gasto:", totalGasto(atualizadas));
console.log("Maior despesa:", maiordespesas(atualizadas));
console.log("Despesas de educação:", despesasDaCategoria(atualizadas, "educacao"));
console.log("\n" + formatarRelatorio(atualizadas));
