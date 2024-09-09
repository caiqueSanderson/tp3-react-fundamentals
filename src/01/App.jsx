import "./styles.css";
import Greeting from "./Greeting/Greeting";

export default function App() {
  const name = prompt('Insira seu nome: ')
    
  return (
    <div className="container">
      <Greeting name={name}/>
    </div>
  );
}
