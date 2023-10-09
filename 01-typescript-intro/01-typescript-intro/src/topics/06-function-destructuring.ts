
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Xiaomi 12 Pro',
    price: 110.000,
}

const tablet: Product = {
    description: 'Tablet de la CUC',
    price: 0,
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export const taxCalculation = ( options: TaxCalculationOptions ): [number, number] => {

    const { products, tax } = options;
    let total = 0;

    products.forEach( ({price}) => {
        total += price;
    })

    return [total, total * tax];

}

const shoppingCart = [phone, tablet];
const tax = 0.19;

const [ total, taxTotal ] = taxCalculation({
    products: shoppingCart,
    tax,
})

console.log(`Total ${total}`);
console.log(`Tax ${taxTotal}`);

// export {};