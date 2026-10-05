import { despesas } from "./tipos";

// Adiciona uma nova despesas sem alterar o array original
export function adicionardespesas(despesas: despesas[], nova: despesas): despesas[] {
  if (nova.valor <= 0) {
    throw new Error("Valor da despesas deve ser maior que zero");
  }
  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error("Mês inválido, deve estar entre 1 e 12");
  }
  return [...despesas, nova];
}

// Remove despesas pelo id, retorna novo array
export function removerdespesas(despesas: despesas[], id: number): despesas[] {
  return despesas.filter(d => d.id !== id);
}

// Retorna apenas despesass da categoria informada
export function despesasDaCategoria(despesas: despesas[], categoria: despesas["categoria"]): despesas[] {
  return despesas.filter(d => d.categoria === categoria);
}

// Soma dos valores das despesass
export function totalGasto(despesas: despesas[]): number {
  return despesas.reduce((soma, d) => soma + d.valor, 0);
}

// Retorna a despesas de maior valor ou undefined se lista vazia
export function maiordespesas(despesas: despesas[]): despesas | undefined {
  if (despesas.length === 0) return undefined;
  return despesas.reduce((maior, d) => (d.valor > maior.valor ? d : maior));
}
