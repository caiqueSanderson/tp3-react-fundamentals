import './App.css';
import { useState, useEffect } from 'react';

import ProfileCard from './components/ProfileCard/ProfileCard';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [ageBoolean, setAgeBoolean] = useState(false);

  useEffect(() => {
    const userName = prompt('Digite o seu nome: ');
    const userAge = prompt('Digite a sua idade: ');

    if (userName) setName(userName);
    if (userAge && !isNaN(userAge)) {
      const parsedAge = Number(userAge);
      setAge(parsedAge);
      setAgeBoolean(true);
    }
  }, []);

  return (
    <div>
      <ProfileCard name={name} ageBoolean={ageBoolean} age={age} />
    </div>
  );
}
