import { useState, useEffect } from "react";

export function Relogio() {   // relogio que renderiza valor associado a estado externo do componente
    const [horario, alteraHorario] = useState(new Date())
    useEffect(() => {
        function tick(){
            alteraHorario(new Date())
        }
        const temporizador = setInterval(() => tick(), 1000)
        return () => clearInterval(temporizador)// faz a limpeza, para o temporizador
    }, [])


    return (
        <>
            <h1> Relógio: </h1>
            <h2>{horario.toLocaleTimeString()}</h2>
        </>

    );
}