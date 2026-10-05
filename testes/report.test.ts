import { describe, it, expect } from "vitest";
import {
    adicionardespesas,
    removerdespesas,
    despesasDaCategoria,
    totalGasto,
    maiordespesas
} from "../src/despesas";
import { despesas } from "../src/tipos";

const exemplo: despesas[] = [
    { id: 1, descricao: "mercado", valor: 100, categoria: "alimentacao", mes: 1, data: new Date() },
    { id: 2, descricao: "Ônibus", valor: 50, categoria: "transporte", mes: 5, data: new Date() }
];

describe("totalGasto", () => {
    it("soma os valores das despesas", () => {
        expect(totalGasto(exemplo)).toBe(150);
    });

    it("lista vazia retorna 0", () => {
        expect(totalGasto([])).toBe(0);
    });
});

describe("adicionardespesa", () => {
    it("adiciona uma nova despesa", () => {
        const nova: despesas = { id: 3, descricao: "cinema", valor: 30, categoria: "lazer", mes: 5, data: new Date() };
        const resultado = adicionardespesas(exemplo, nova);
        expect(resultado).toHaveLength(3);
        expect(exemplo).toHaveLength(2);
    });

    it("lança erro se o valor for <= 0", () => {
        const invalida: despesas = { id: 4, descricao: "erro", valor: 0, categoria: "lazer", mes: 5, data: new Date() };
        expect(() => adicionardespesas(exemplo, invalida)).toThrow();
    });
});

