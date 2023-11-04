import { useEffect, useState, useRef } from 'react';
import { countStore } from '../../store/countStore';

export type ProductType = {
  name: string;
  list?: ProductType[];
};

type ProductProps = ProductType & {
  className?: string;
  checked: boolean;
};

export const Product = ({ name, list, className, checked }: ProductProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const isMounted = useRef(false);

  const handleChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  useEffect(() => {
    if (isMounted.current) {
      console.log('will be changed', name, isChecked, isMounted.current);
      isChecked ? countStore.increment() : countStore.decrement();
    }
  }, [isChecked]);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    }
  }, []);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  console.log('isMounted', name, isMounted.current);

  return (
    <div className={`flex flex-col items-start text-xl ${className}`}>
      <div className="flex items-center mt-2">
        <label>
          <span>{name}</span>
          <input
            className="ml-2 w-4 h-4"
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
          />
        </label>
        {list && (
          <button className="ml-2 p-1 text-xs" onClick={handleCollapse}>
            {isCollapsed ? '➕' : '➖'}
          </button>
        )}
      </div>

      {!isCollapsed &&
        list?.map((item) => (
          <Product
            key={item.name}
            name={item.name}
            list={item.list}
            className="ml-4"
            checked={isChecked}
          />
        ))}
    </div>
  );
};
