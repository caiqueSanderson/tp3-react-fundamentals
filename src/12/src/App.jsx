import './App.css'

import List from './components/List/List'

export default function App() {
  const numbers = [];

  return (
    <div className='container_components'>
      <List numbers={numbers}/>
    </div>
  )
}
