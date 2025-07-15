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
    res.send(`testing collectibles ${index}.`);
   
//   if (index != collectibles) {
//     res.send(`This item is not yet in stock. Check back soon!`);
//     } else {
// res.send(`So, you want ${name}? For $${price}, it can be yours!`)
//     }

//localhost:3000/collectables?name='autographed picture of a dog'&price=10
});



//4. Filter Shoes by Query Parameters
//Task: Create a route /shoes that filters the list of shoes based on query parameters.



app.listen(3000, () => {
    console.log('Listening on port 3000')
});