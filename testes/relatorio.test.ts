import {describe, it, expect} from "vitest";
import {descricaoCategoria, matrizCategoriaMes, formatarRelatorio} from "../src/relatorio";
import {despesas} from "../src/tipos";

const exemplo: despesas[] = [
    { id: 1, descricao: "mercado", valor: 100, categoria: "alimentacao", mes: 1, data: new Date() },
    { id: 2, descricao: "Ônibus", valor: 50, categoria: "transporte", mes: 5, data: new Date() },
    { id: 3, descricao: "cinema", valor: 30, categoria: "lazer", mes: 5, data: new Date() },
    { id: 4, descricao: "aluguel", valor: 500, categoria: "moradia", mes: 5, data: new Date() },
];
describe (""), () => {
    it("retorna a descrição correta para cada categoria"), () => {
        expect(descricaoCategoria("alimentacao")).toBe("Alimentação");
        expect(descricaoCategoria("transporte")).toBe("Transporte");
        expect(descricaoCategoria("lazer")).toBe("Lazer");
        expect(descricaoCategoria("moradia")).toBe("Moradia");
        expect(descricaoCategoria("educacao")).toBe("Educação");
        expect(descricaoCategoria("saude")).toBe("Saúde");
        expect(descricaoCategoria("outros")).toBe("Outros");
    } //descricao categoria deve retornar a descricao correta para cada categoria usando describe it e expect
}

describe("matrizCategoriaMes"), () => {
  it("gera matriz com totais por categoria e mês", () => {
    const matriz: number[][] = matrizCategoriaMes(exemplo);
    expect(matriz[0]![4]).toBe(100);
    expect(matriz[1]![4]).toBe(50);
    expect(matriz[2]![5]).toBe(30);
    expect(matriz[3]![4]).toBe(500);  
  });
  it ("matriz tem 4 linhas e 12 colunas"), () => {
    describe("matrizCategoriaMes"), () => {
        const matriz: number[][] = matrizCategoriaMes([]);
        expect(matriz).toHaveLength(4);
        expect(matriz[0]).toHaveLength(12);
    }
  }
}
describe("formatarRelatorio"), () => {
    it("retorna string com titulo em maiusculo"),() => {
        const relatorio: string = formatarRelatorio(exemplo);
        expect(relatorio).toContain("RELATÓRIO DE DESPESAS");
    }
    it("inclui total geral e maior despesa"), () =>{
        const relatorio = formatarRelatorio(exemplo);
        expect(relatorio).toContain("Total Geral");
        expect(relatorio).toContain("Maior Despesa");
    }
}