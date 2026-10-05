import { despesas, categorias  } from "./tipos";
import { totalGasto, maiordespesas } from "./despesas";

// Retorna o nome de exibição da categoria
export function descricaoCategoria(categoria: typeof categorias[number]): string {
  switch (categoria) {
    case "alimentacao":
      return "Alimentação";
    case "transporte":
      return "Transporte";
    case "lazer":
      return "Lazer";
    case "moradia":
      return "Moradia";
    default:
      throw new Error("Categoria inválida");
  }
}

// Retorna uma matriz [categoria][mes] com totais
export function matrizCategoriaMes(despesas: despesas[]): number[][] {
  const matriz: number[][] = [];

  // inicializa matriz com zeros
  for (let i = 0; i < categorias.length; i++) {
    const linha: number[] = [];
    for (let j = 0; j < 12; j++) {
      linha.push(0);
    }
    matriz.push(linha);
  }

  // acumula valores
  for (let i = 0; i < despesas.length; i++) {
    const d = despesas[i];
    if (!d) continue;

    const catIndex = categorias.indexOf(d.categoria);
    if (catIndex >= 0 && d.mes >= 1 && d.mes <= 12) {
      const linha = matriz[catIndex];
      const mesIndex = d.mes - 1;
      if (linha) {
        linha[mesIndex] = (linha[mesIndex] ?? 0) + d.valor;
      }
    }
  }

  return matriz;
}

// Retorna o texto formatado do relatório
export function formatarRelatorio(despesas: despesas[]): string {
  const matriz = matrizCategoriaMes(despesas);
  let relatorio = "RELATÓRIO DE DESPESAS\n".toUpperCase();

  for (let i = 0; i < categorias.length; i++) {
    const categoria = categorias[i];
    if (categoria === undefined) continue;

    const nome = descricaoCategoria(categoria);
    let totalCategoria = 0;
    let linha = nome.padEnd(15);

    for (let j = 0; j < 12; j++) {
      const valor = matriz[i]?.[j] ?? 0;
      totalCategoria += valor;
      linha += valor.toFixed(0).padStart(6);
    }

    linha += " | Total: " + totalCategoria.toFixed(2);
    relatorio += linha + "\n";
  }

  const total = totalGasto(despesas);
  const maior = maiordespesas(despesas);

  relatorio += "\nTotal geral: " + total.toFixed(2);
  if (maior) {
    relatorio += "\nMaior despesa: " + maior.descricao + " (" + maior.valor.toFixed(2) + ")";
  }

  return relatorio;
}
