const express = require('express');
const app = express()


// 1. Be Polite, Greet the User 
// Task: Create a route that responds to URLs like /greetings/<username-parameter>.
app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}!`);
});


//2. Rolling the Dice
// Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

// app.get('/roll/:number', (req,res) => {
//     //res.send(`testing roll dice ${req.params.number}`);
//     const number = req.params.number;
//     if number = isNaN {
//         res.send(`You must specify a number.`);
//     } else {
//       // 0< X < numberProvided
//         const roll = Math.floor(Math.random() * (req.params.number));
//         res.send(`You rolled a ${roll}.`)
//     }
//  });
 //not working.....why?

//3. I Want THAT One!
//Task: Create a route for URLs like /collectibles/<index-parameter>.

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
        const name = req.query.name;
        const pice = req.query.price;
        res.send(`So, you want ${collectibles[i].name}? For $${collectibles[i].price}, it can be yours!`);
    }

//localhost:3000/collectibles?name=shiny%20ball&price=5.95 
//  //is throwing an error
    //How do I get collectibeles into else? need to stringify? 
});



//4. Filter Shoes by Query Parameters
//Task: Create a route /shoes that filters the list of shoes based on query parameters.

//   const shoes = [
//       { name: "Birkenstocks", price: 50, type: "sandal" },
//       { name: "Air Jordans", price: 500, type: "sneaker" },
//       { name: "Air Mahomeses", price: 501, type: "sneaker" },
//       { name: "Utility Boots", price: 20, type: "boot" },
//       { name: "Velcro Sandals", price: 15, type: "sandal" },
//       { name: "Jet Boots", price: 1000, type: "boot" },
//       { name: "Fifty-Inch Heels", price: 175, type: "heel" }
//   ];


// app.get('/shoes', (req, res)=> {
    
//     let min-price =
//     let max-price = 
//     if 
// })







app.listen(3000, () => {
    console.log('Listening on port 3000')
});