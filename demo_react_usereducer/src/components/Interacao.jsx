import { useReducer } from "react";


function reducer(estado, acao) {
    switch (acao.type) {
        case 'incremento': {
            return {contagem: estado.contagem + acao.valor};
        }
        case 'decremento': {
            return {contagem: estado.contagem - 1};
        }
        default: {
            throw new Error(`Tipo de ação desconhecida: ${acao.type}`);
        }
    }
}


export function Interacao() {
    const estadoInicial = {contagem: 0};
    const [estado, dispatch] = useReducer(reducer, estadoInicial);
    
    const handleClickMais = () => {
        dispatch({type:'incremento', valor:1});
    };


    const handleClickMenos= () => {
        dispatch({type:'decremento'});
    };


    return (
        <>
            <button onClick={handleClickMais}>👍</button>
            <button onClick={handleClickMenos}>👎</button>
            <span>Curtidas {estado.contagem}</span>
        </>
    );
}
