import { useState } from 'react'
import './App.css';
import AlumnoMap from './assets/components/AlumnoMap';
import AlumnoFilter from './assets/components/AlumnoFilter';
import AlumnoSort from './assets/components/AlumnoSort';
import AsistenciasComponent from './assets/components/AsistenciasComponent';

function App() {
  
  const [intentos, setIntentos] = useState(5)

  const restaIntento = ()=>{
    setIntentos(intentos - 1)
  }


//   const ejemploFirma = [ 
//     { id: 1, alumno: "Gaby", edad: 24 },
//     { id: 2, alumno: "Andy", edad: 22 },
//     { id: 3, alumno: "Cris", edad: 18 },
//     { id: 4, alumno: "Dany", edad: 31 },
//     { id: 5, alumno: "Alex", edad: 41 },
//     { id: 6, alumno: "Emma", edad: 30 },
// ]
// [ // Este JSON lo podemos colocar en un servidor de Express o en json-server para seguir los ejemplos
//     { "id": 1, "alumno": "Gaby", "edad": 24 }, 
//     { "id": 2, "alumno": "Andy", "edad": 22 },
//     { "id": 3, "alumno": "Cris", "edad": 18 },
//     { "id": 4, "alumno": "Dany", "edad": 31 },
//     { "id": 5, "alumno": "Alex", "edad": 41 },
//     { "id": 6, "alumno": "Emma", "edad": 30 }
// ]


  // condicion ? verdadero : falso;
  return (
 
    <div>
      {/* <p>
        {intentos < 1
          ? "Ya no quedan intentos"
          : intentos === 1
          ? `Le queda ${intentos} intento.`
          : `Le quedan ${intentos} intentos.`}
      </p>
      <button disabled={intentos < 1} onClick={restaIntento}>
        Intentar
      </button> */}

      <AlumnoMap/>
      {/* <AlumnoFilter/> */}
      {/* <AlumnoSort/> */}
      {/* <AsistenciasComponent/> */}
    </div>
  )
}

export default App