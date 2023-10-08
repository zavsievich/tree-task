import './App.css';
import { products } from './data.ts';
import { Product, ProductType } from './components/product/product.tsx';

function App() {
  return (
    <main>
      <h1 className="text-xxl uppercase">Products</h1>
      {products.map((product: ProductType) => (
        <Product checked={false} name={product.name} list={product.list} />
      ))}
    </main>
  );
}

export default App;
