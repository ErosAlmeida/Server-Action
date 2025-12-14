import { useState } from 'react'
import './App.css'
import { helloAction } from './actions/HelloActions'


function App() {
  const [name, setName] = useState('')
  const [result, setResult] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const r = await helloAction(name)
    setResult(r)
  }

  return (
    <>
      <h1>Server Action (simulada)</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input 
          type="text"
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      {result && (
        <p style={{ marginTop: 20 }}>
          <strong>Resposta:</strong> {result}
        </p>
      )}
    </>
  )
}

export default App
