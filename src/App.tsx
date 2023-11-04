import './App.css';
import { products } from './data.ts';
import { Product, ProductType } from './components/product/product.tsx';
import { Title } from './components/title/title.tsx';

function App() {
  return (
    <main>
      <Title />
      {products.map((product: ProductType) => (
        <Product
          key={product.name}
          checked={false}
          name={product.name}
          list={product.list}
        />
      ))}
    </main>
  );
}

export default App;
