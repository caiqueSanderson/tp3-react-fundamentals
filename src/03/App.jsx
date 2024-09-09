import "./styles.css";
import Greeting from "./Greeting/Greeting";

const name = prompt('Insira seu nome: ');
const age = prompt('Insira seu idade: ');

export default function App(){
  return (
    <div className="container">
      <Greeting name={name} age={age}/>
    </div>
  );
}
