

export class Person {

    // public name: string;
    // private address: string;

    constructor( 
        public name: string, 
        private address: string = 'No Address',
    ) {

        // this.name = name;
        // this.address = address;

    }

}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {

//         super( realName, 'Asgard' );

//     } 

// }

export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {

        // this.person = new Person(realName);

    } 

}

const loki = new Person('Loki','Asgard');

// const iroman = new Person('Loki','Asgard');
const iroman = new Hero('dios del engaño',30,'Loki',loki);

console.log(iroman);





/**
 * NOTAS DE LA CLASE
 * A LAS VARIABLES DENTRO DE LAS CLASES SE LES CONOCE COMO PROPIEDADES
 * A LAS FUNCIONES DENTRO DE LAS CLASES SE LES CONOCE COMO METODOS
 */