import React from 'react'
import './App.css'

export function App() {

  return(
    <>
    <header>
      <h1>Login</h1>
    </header>
    
    <main>
      <form action="">
        <div>
          <label htmlFor="usuario">Usuário</label>
          <input type="text" id="usuario" placeholder='Digite seu usuário'/>
        </div>
        <div>
        <label htmlFor="senha">Senha</label>
          <input type="text" id="senha" placeholder='Digite sua senha'/>
        </div>
        <button>
          <p>Entrar</p>
        </button>
      </form>
    </main>
    </>
  )

}