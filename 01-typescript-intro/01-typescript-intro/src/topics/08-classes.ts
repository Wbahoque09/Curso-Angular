

export class Person {

    public name: string;
    private address: string;

    constructor( name: string, address: string ) {

        this.name = name;
        this.address = address;

    }

}

const iroman = new Person('Loki','Asgard');

console.log(iroman);





/**
 * NOTAS DE LA CLASE
 * A LAS VARIABLES DENTRO DE LAS CLASES SE LES CONOCE COMO PROPIEDADES
 * A LAS FUNCIONES DENTRO DE LAS CLASES SE LES CONOCE COMO METODOS
 */