import './App.css';
import { useReducer, useSyncExternalStore } from 'react';
import { products } from './data.ts';
import { Product, ProductType } from './components/product/product.tsx';
import { Title } from './components/title/title.tsx';
import { countStore } from './store/countStore.ts';

type CounterActionType = {
  type: 'increment' | 'decrement';
};

const counterReducer = (state: number, action: CounterActionType) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement': {
      if (state === 0) {
        return state;
      }
      return state - 1;
    }
    default:
      console.log('Unknown action type');

      throw new Error();
  }
};

function App() {
  const countFromStore = useSyncExternalStore(
    countStore.subscribe,
    countStore.get
  );
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <main>
      <Title count={count} />
      {products.map((product: ProductType) => (
        <Product
          key={product.name}
          dispatch={dispatch}
          checked={false}
          name={product.name}
          list={product.list}
        />
      ))}
    </main>
  );
}

export default App;
