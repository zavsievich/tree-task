import { ProductType } from '../../types';

type ProductProps = ProductType & {
  className?: string;
};

import { useState } from 'react';

export const Product = ({ name, list, className }: ProductProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center">
        <div>{name}</div>
        {list && (
          <button className="ml-2 p-2" onClick={handleCollapse}>
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
          />
        ))}
    </div>
  );
};
