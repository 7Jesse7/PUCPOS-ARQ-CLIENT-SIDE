import { useState} from 'react';

export function Curtir () {
    const [contagemEstadoAtual, setContagem] = useState(0);

    // funcção para disparar a alteração de estado
    function handleClick() {
        // setContagem(contagemEstadoAtual + 1);
        setContagem(contagemEstadoAtual => contagemEstadoAtual + 1);
    }

    return (
        <>
            <button onClick={handleClick}> ❤️ </button>
            <span>Número de Curtidas {contagemEstadoAtual}</span>
        </>
    );
}