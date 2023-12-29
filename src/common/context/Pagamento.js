import { createContext, useContext, useState } from "react";

export const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({ children }) => {

    const tiposPagamento = [
        {
            nome: "PIX",
            juros: 1,
            id: 1,
            porcentagemJuros: "Sem juros"
        },
        {
            nome: "Cartão de crédito",
            juros: 1.3,
            id: 2,
            porcentagemJuros: "30% de Juros"
        },
        {
            nome: "Boleto",
            juros: 1,
            id: 3,
            porcentagemJuros: "Sem juros"
        },
        {
            nome: "Crediário",
            juros: 1.5,
            id: 4,
            porcentagemJuros: "50% de Juros"
        }
    ];

    const [formaPagamento, setFormaPagamento] = useState(tiposPagamento[0]);

    return (
        <PagamentoContext.Provider value={{
            tiposPagamento,
            formaPagamento,
            setFormaPagamento
        }}>
            {children}
        </PagamentoContext.Provider>
    )
}
;
export const usePagamentoContext = () => {
    const { tiposPagamento, formaPagamento, setFormaPagamento } = useContext(PagamentoContext);

    function mudarFormaPagamento(id){
        const pagamentoAtual = tiposPagamento.find(pagamento => pagamento.id === id);

        setFormaPagamento(pagamentoAtual);
    }

    return {
        tiposPagamento,
        formaPagamento,
        mudarFormaPagamento
    }
};