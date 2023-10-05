
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const skills = ['Bash','Counter','Healing'];

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: undefined
}

strider.hometown = 'Rivendell';

console.table({strider});


export {}; // Esto se hace para convertir el archivo en un modulo y evitar errores