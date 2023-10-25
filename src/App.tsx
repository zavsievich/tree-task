import './App.css';
import { useSyncExternalStore } from 'react';
import { products } from './data.ts';
import { Product, ProductType } from './components/product/product.tsx';
import { Title } from './components/title/title.tsx';
import { countStore } from './store/countStore.ts';

function App() {
  const countFromStore = useSyncExternalStore(
    countStore.subscribe,
    countStore.getSnapshot
  );

  return (
    <main>
      <Title count={countFromStore} />
      {products.map((product: ProductType) => (
        <Product
          key={product.name}
          actions={{
            increment: countStore.increment,
            decrement: countStore.decrement,
          }}
          checked={false}
          name={product.name}
          list={product.list}
        />
      ))}
    </main>
  );
}

export default App;
