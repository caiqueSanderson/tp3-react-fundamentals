import './App.css';

import StatusBadge from './components/StatusBadge/StatusBadge';

export default function App() {
  return (
    <div>
      <StatusBadge status='ativo'/>
      <StatusBadge status='inativo'/>
      <StatusBadge status='pendente'/>
      <StatusBadge status=''/>
    </div>
  );
}
