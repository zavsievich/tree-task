import { ProductType } from './components/product/product';

const products: ProductType[] = [
  {
    name: 'Phones',
    list: [
      {
        name: 'Apple',
        list: [
          {
            name: 'iPhone 12',
            list: [{ name: '256gb' }, { name: '512gb' }, { name: '1tb' }],
          },
          {
            name: 'iPhone 12 Pro',
            list: [{ name: '256gb' }, { name: '512gb' }, { name: '1tb' }],
          },
          {
            name: 'iPhone 12 Pro Max',
            list: [{ name: '256gb' }, { name: '512gb' }, { name: '1tb' }],
          },
          {
            name: 'iPhone 12 Mini',
            list: [{ name: '256gb' }, { name: '512gb' }, { name: '1tb' }],
          },
        ],
      },
      {
        name: 'Google',
        list: [
          {
            name: 'Pixel 5',
            list: [{ name: '256gb' }, { name: '512gb' }, { name: '1tb' }],
          },
          {
            name: 'Pixel 4a',
            list: [{ name: '256gb' }, { name: '512gb' }, { name: '1tb' }],
          },
        ],
      },
    ],
  },
];

export { products };
