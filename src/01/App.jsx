import "./styles.css";
import Greeting from "./Greeting/Greeting";

const name = prompt('Insira seu nome: ')

export default function App(){
  return (
    <div className="container">
      <Greeting name={name}/>
    </div>
  );
}
