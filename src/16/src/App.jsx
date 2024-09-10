import './App.css';

import Product from './components/Product/Product';

export default function App() {
  return (
    <div>
      <Product name="Jordan" price="889,90" />
      <Product name="Air Force" price="500,90" description="Tenis confortavel, para eventos casuais"/>
    </div>
  );
}
