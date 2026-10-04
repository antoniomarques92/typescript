export interface despesas{
    readonly id: number;
    descricao: string;
    valor: number;
    data: Date;
    categoria: "alimentacao" | "transporte" | "saude" | "lazer" | "moradia" | "educacao" | "outros";
    mes: number;
    observacao?: string;
}

export const categorias: Array<despesas["categoria"]> = [
    "alimentacao",
    "transporte",
    "lazer",
    "moradia"
]