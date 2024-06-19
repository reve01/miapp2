
import './App.css'
import Datos from './Datos'

function App() {

  const alumno={
    nombre:'Gonzalo',
    edad:25
  }

  const carrera={
    nomcarrera:'Infomatica',
    year:2024
  }

  return (
    <Datos alumno={alumno} carrera={carrera}/>
  )
}

export default App
