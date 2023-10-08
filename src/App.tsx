import './App.css';
import { useReducer } from 'react';
import { products } from './data.ts';
import { Product, ProductType } from './components/product/product.tsx';

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
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <main>
      <h1 className="text-xxl uppercase">Products count: {count}</h1>
      {products.map((product: ProductType) => (
        <Product
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
