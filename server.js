const express = require('express');
const app = express()

// 1. Be Polite, Greet the User 
app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}!`);
});

//2. Rolling the Dice

app.get('/roll/:number', (req, res) => {
    const number = req.params.number;
    if (isNaN(number)) {
        res.send(`You must specify a number.`);
    } else {
        const roll = Math.floor(Math.random() * (req.params.number));
        res.send(`You rolled a ${roll}.`)
    }
});

//3. I Want THAT One!

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index;
    const i = parseInt(index);
    if (!collectibles[i]) { // "if there is nothing there, return something at this index"
        res.send(`This item is not yet in stock. Check back soon!`);
    } else {
        res.send(`So, you want ${collectibles[i].name}? For $${collectibles[i].price}, it can be yours!`);
    }
});

//4. Filter Shoes by Query Parameters

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {

    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const type = req.query.type;

    if (minPrice || maxPrice || type) {
        const filteredShoes = shoes.filter((shoe) => {
            if (shoe.price <= maxPrice && shoe.price >= minPrice && shoe.type === type) {
                return shoe
            }
        });
            res.send(filteredShoes)
    } else {
        res.send(shoes)
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});