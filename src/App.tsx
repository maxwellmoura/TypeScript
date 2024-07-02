import React, { createContext } from 'react'
import './App.css'
//Components
import FristComponent from './components/FristComponent'
//Componente Destruturing
import SecondComponent from './components/SecondComponent'
import Destructuring, { Category } from './components/Destructuring'
//useState
import State from './components/State'
import Context from './components/Context'
//Type
type textOrNull = string | null

//Contexto API
interface IAppContext {
  linguagem: string,
  framework: string,
  projetos: number
}
export const AppContext = createContext<IAppContext | null>(null)
function App() {
  //Variáveis
  const name: string = "Maxwell"
  const age: number = 40
  const trabalhando: boolean = true
  const local: string = "Imagem Segurança"
  //Funções
  const useGreeting = (name: string): string => {
    return `Olá, ${name}`
  }
  //Type
  const myText: textOrNull = "Algum texto aqui"
  let mySecondText: textOrNull = null

  mySecondText = "Opa"
  //Context API
  const contextValue: IAppContext = {
    linguagem: "JavaScript",
    framework: "React",
    projetos: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
      <>
        <h1>TypeScript Com React</h1>
        {/* Chamando Variáveis */}
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {trabalhando && (
          <div>
            <p>Esta Trabalhando na <span>{local}</span></p>
          </div>
        )}
        {/* Função */}
        <h3>{useGreeting(name)}</h3>
        <FristComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title='Primeiro Post'
          content='Algum conteúdo'
          commentsQty={10}
          tags={['Post', 'Teste']}
          category={Category.TS}
        />
        <Destructuring
          title='Segundo Post'
          content='Mais conteúdo'
          commentsQty={5}
          tags={['Desestruração']}
          category={Category.RC}
        />
        <State />
        {myText && <p>Tem um texto aqui</p>}
        {mySecondText && <p>Novo Texto aqui</p>}
        <Context />
      </>
    </AppContext.Provider>
  )
}

export default App
