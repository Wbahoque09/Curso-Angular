

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'William',
}

const passenger2: Passenger = {
    name: 'Luz D.',
    children: ['David','Daniela'],
}

const printChildren = ( passenger: Passenger ) => {

    // const howManyChildren = passenger.children?.length || 0;  El encadenamiento opcional es el signo de interrogacion

    const howManyChildren = passenger.children!.length || 0; // El signo de interrogacion es para decirle a typescript que siempre viene algo
    console.log( passenger.name, howManyChildren );

}

printChildren( passenger1 );
