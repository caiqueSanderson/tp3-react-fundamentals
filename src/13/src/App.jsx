import './App.css'

import Temperature from './components/Temperature/Temperature'

const answer = prompt('Digite a temperatura: ');

export default function App() { 
  return (
    <div>
      <Temperature answer={answer}/>
    </div>
  )
}
