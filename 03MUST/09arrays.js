const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament: [
            'Intelligent',
            'Active',
            'Alert',
            'Faithful',
            'Trainable',
            'Instinctual',
        ],
    },
    {
        id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperament: ['Affectionate', 'Intelligent','Loyal', 'Faithful'],
    },
    {
        id: 'dog-3',
        name: 'Labrador Retriever',
        temperament: [
            'Intelligent',
            'Even tempered',
            'Kind',
            'Agile',
            'Outgoing',
            'Trusting',
            'Gentle'
        ],
    },
    {
        id: 'dog-4',
        name: 'Buldog',
        temperament: [
            'Silly',
            'Active',
            'Intelligent',
        ],
    },
    {
        id: 'dog-5',
        name: "Corgi",
        temperament: [
            'Playful',
            'Outgoing',
            'Trainable'
        ]

    }
]

console.log(dogs.find(dog => dog.name === 'bernese Mountain Dog'));
console.log(dogs.some(dog => dog.temperament.includes('Aggressive')));
console.log(dogs.some(dog => dog.temperamentl.includes('Trusting')));
console.log(dogs.every(dog => dog.temperament.includes('Trusting')));
console.log(dogs.every(dog => dog.temperament.includes('Intelligent')));
console.log(dogs.map(dog => dog.name));
console.log(dogs.filter(dog => dog.temperament.includes('Faithful')));
console.log(dogs.reduce((allTemperaments, dog) => {
    return [...allTemperaments, ...dog.temperament]
}, []));
console.log(dogs.find(dog => dog.id === 'dog-5'));
console.log(dogs.some(dog => dog.temperament.includes('Silly')));
console.log(dogs.find(dog => dog.name === 'Corgi'));