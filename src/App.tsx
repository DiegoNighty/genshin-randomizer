import useTeam from './hook/useTeam'
import { Characters } from './component/Characters'
import './App.css'

function App (): JSX.Element {
  const [team, refreshTeam] = useTeam()

  return (
    <>
      <div className='page'>
        <div className='container'>
          <h1 className='title'>Randomizador de Equipos</h1>
          <Characters characterList={team} />
          <button className='royal-btn' onClick={() => refreshTeam()}>Generar Equipo</button>
        </div>
      </div>
    </>
  )
}

export default App
