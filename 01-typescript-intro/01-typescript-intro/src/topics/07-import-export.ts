
import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Samsung',
        price: 2500000,
    },
    {
        description: 'iPad',
        price: 1500000,
    }
];

const [ total, fax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15,
});

console.log(`Total ${total}`);
console.log(`Total ${fax}`);