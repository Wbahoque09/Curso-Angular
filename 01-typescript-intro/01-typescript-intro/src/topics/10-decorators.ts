function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {

    return class extends constructor {
        newProperty = 'Nw';
        hello = 'hl';
    }

}

@classDecorator
export class SuperClass {
    
    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo');
    }

}

console.log( SuperClass );

const myClass = new SuperClass(); // Instancia de la clase
console.log( myClass );