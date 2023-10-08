import { useEffect, useState } from 'react';

export type ProductType = {
  name: string;
  list?: ProductType[];
};

type ProductProps = ProductType & {
  className?: string;
  checked?: boolean;
};

export const Product = ({ name, list, className, checked }: ProductProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const handleChecked = () => {
    setIsChecked((prevState) => !prevState);
  };

  // TODO: component rerenders twice after checking
  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);
  console.log('Product rerender', name, isChecked);

  return (
    <div className={`flex flex-col items-start text-xl ${className}`}>
      <div className="flex items-center mt-2">
        <label>
          <span>{name}</span>
          <input
            className="ml-2 w-4 h-4"
            type="checkbox"
            checked={isChecked}
            onChange={handleChecked}
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
