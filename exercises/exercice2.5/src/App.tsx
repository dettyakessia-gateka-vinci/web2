import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCounter from './components/ClickCounter'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <ClickCounter title='Counter' message = "You are a master in the art of clicking .!" messageMouseOncounter='Please click on me now!' />
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
