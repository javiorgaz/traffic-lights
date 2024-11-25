import { useState } from 'react'
import './App.css';

function App() {
  const [color, setColor] = useState('yellow')


  return(

    <div className='wrapper'> 

          <div className='wrapper-semaforo'>

            <div className='palo'></div>
            <div className="traffic-lights">

              <div onClick={() => setColor('red')} className={`circle red ${color === 'red' ? 'glow' : ''}`}></div>
              <div onClick={() => setColor('yellow')} className={`circle yellow ${color === 'yellow' ? 'glow' : ''}`}></div>
              <div onClick={() => setColor('green')} className={`circle green ${color === 'green' ? 'glow' : ''}`}></div>

            </div>
          </div>

    </div>


  ) 
  
  
}

export default App
