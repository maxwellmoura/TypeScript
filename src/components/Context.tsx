//Colocando o useContext para conseguir utilizar o Hook
import React, { useContext } from 'react'
//importando AppContext la do App.tsx para consumir
import { AppContext } from '../App'

const Context: React.FC = () => {
    //unir hook e o context 
    const details = useContext(AppContext)
    return (
        <>
            {/* Consumindo o useContext e o AppContext  
            Eu so vou preencher isso se tiver detalhes se o contexto estiver vazio não vou exibir nada */}
            {details && (
                <div>
                    <h2>Linguagem: {details.linguagem}</h2>
                    <h3>FW: {details.framework}</h3>
                    <p>QTD: {details.projetos}</p>
                </div>
            )}
            
        </>
    )
    
}
export default Context