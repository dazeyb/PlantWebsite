const db = require("../models"); //require models which has db

const plants = [
    {name: "Snake Plant", 
    description: "Dracaena trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known as the snake plant, Saint George's sword, mother-in-law's tongue, and viper's bowstring hemp, among other names. ",
    light: 1,
    price: 13,
    },

    {name: "Money Tree", 
    description: "The Pachira is an evergreen broadleaf tree with hand-shaped compound leaves consisting of up to 9 leaflets. In their natural habitat the trees can grow up to 20 meters (65ft) tall. Money trees often have a slightly swollen trunk base, which also serves as a water reservoir, and the bark is brown to grey. ",
    light: 2,
    price: 31,
    },

    {name: "Orchid", 
    description: "The Orchidaceae are a diverse and widespread family of flowering plants, with blooms that are often colourful and fragrant, commonly known as the orchid family. Along with the Asteraceae, they are one of the two largest families of flowering plants.",
    light: 3,
    price: 22,
    },

    {name: "Basil", 
    description: "Basil, also called great basil, is a culinary herb of the family Lamiaceae. Basil is native to tropical regions from central Africa to Southeast Asia. It is a tender plant, and is used in cuisines worldwide.",
    light: 3,
    price: 4,
    },

    {name: "Lucky Bamboo", 
    description: 'Dracaena sanderiana is a species of flowering plant in the family Asparagaceae, native to Central Africa. It was named after the German–English gardener Henry Frederick Conrad Sander. The plant is commonly marketed as "lucky bamboo".',
    light: 2,
    price: 18,
    },

    

    // {name: "bonsai"},
];

db.PlantsCollection.insertMany(plants, function(err, createdPlant) {
    if (err) return console.log(err);
    console.log({ createdPlant });
    process.exit(); //this will exit the file when this line is hit
});