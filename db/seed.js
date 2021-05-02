const db = require("../models"); //require models which has db

const plants = [
    {name: "Snake Plant", 
    description: "Dracaena trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known as the snake plant, Saint George's sword, mother-in-law's tongue, and viper's bowstring hemp, among other names.",
    light: 1,
    price: 2,
    image: "https://cdn.shopify.com/s/files/1/0315/1514/8419/products/Snake-Plant-Laurentii_D-155894.jpg?v=1614703120",
    },

    {name: "Money Tree", 
    description: "The Pachira is an evergreen broadleaf tree with hand-shaped compound leaves consisting of up to 9 leaflets. In their natural habitat the trees can grow up to 20 meters (65ft) tall. Money trees often have a slightly swollen trunk base, which also serves as a water reservoir, and the bark is brown to grey.",
    light: 2,
    price: 4,
    image: "https://cdn.shopify.com/s/files/1/0315/1514/8419/products/Braided-Money-Tree_D-287390_1024x1024.jpg?v=1605985677",
    },

    {name: "Orchid", 
    description: "The Orchidaceae are a diverse and widespread family of flowering plants, with blooms that are often colourful and fragrant, commonly known as the orchid family. Along with the Asteraceae, they are one of the two largest families of flowering plants.",
    light: 3,
    price: 3,
    image: "https://ak1.ostkcdn.com/images/products/27622750/L32775821.jpg?imwidth=400&impolicy=medium",
    },

    {name: "Lucky Bamboo", 
    description: 'Dracaena sanderiana is a species of flowering plant in the family Asparagaceae, native to Central Africa. It was named after the German–English gardener Henry Frederick Conrad Sander. The plant is commonly marketed as "lucky bamboo".',
    light: 2,
    price: 2,
    image: "https://i.pinimg.com/originals/cf/a5/41/cfa5415b72cd97a9518d0fed68675613.jpg",
    },

    {name: "Peace Lily", 
    description: 'Spathiphyllum is a genus of about 47 species of monocotyledonous flowering plants in the family Araceae, native to tropical regions of the Americas and southeastern Asia. Certain species of Spathiphyllum are commonly known as spath or peace lilies.',
    light: 1,
    price: 3,
    image: "https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNjA1MTg4Ni9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY1NDY5MTk0M30.ZP3sFt_n094YBmDEa5CslOvflNDGFCn-Q7PUXO8wgjE/image.jpg?quality=80&width=704",
    },

    {name: "ZZ-Plant", 
    description: 'Zamioculcas is a genus of flowering plants in the family Araceae, containing the single species Zamioculcas zamiifolia. It is a tropical perennial plant native to eastern Africa, from southern Kenya to northeastern South Africa.',
    light: 2,
    price: 3,
    image: "https://cdn.shopify.com/s/files/1/0315/1514/8419/products/ZZ-Plant_D_1024x1024.jpg?v=1605625400",
    },  

    // {name: "bonsai"},
];

db.PlantsCollection.insertMany(plants, function(err, createdPlant) {
    if (err) return console.log(err);
    console.log({ createdPlant });
    process.exit(); //this will exit the file when this line is hit
});