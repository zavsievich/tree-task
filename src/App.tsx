import './App.css';
import { products } from './data.ts';
import { ProductType } from './types.ts';
import { Product } from './components/product/product.tsx';

function App() {
  console.log(products);

  return (
    <main>
      <h1>Products</h1>
      {products.map((product: ProductType) => (
        <Product name={product.name} list={product.list} />
      ))}
    </main>
  );
}

export default App;
