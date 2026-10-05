import { despesas } from "./tipos";

export function adicionardespesas(despesas: despesas[], nova: despesas): despesas[] {
  if (nova.valor <= 0) {
    throw new Error("Valor da despesas deve ser maior que zero");
  }
  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error("Mês inválido, deve estar entre 1 e 12");
  }
  return [...despesas, nova];
}

export function removerdespesas(despesas: despesas[], id: number): despesas[] {
  return despesas.filter(d => d.id !== id);
}

export function despesasDaCategoria(despesas: despesas[], categoria: despesas["categoria"]): despesas[] {
  return despesas.filter(d => d.categoria === categoria);
}

export function totalGasto(despesas: despesas[]): number {
  return despesas.reduce((soma, d) => soma + d.valor, 0);
}

export function maiordespesas(despesas: despesas[]): despesas | undefined {
  if (despesas.length === 0) return undefined;
  return despesas.reduce((maior, d) => (d.valor > maior.valor ? d : maior));
}
