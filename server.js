const express = require('express');
const app = express()


// 1. Be Polite, Greet the User 
// Task: Create a route that responds to URLs like /greetings/<username-parameter>.
app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}!`);
});


//2. Rolling the Dice
// Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

app.get('/roll/:number', (req,res) => {
    if (!Number(res.send(${number}) {
        return res.send(“You must specify a number.”);
    }
        let response    
    return Math.floor(Math.random(number) 
    
      // 0< X < numberProvided
    ) 
    };
});





app.listen(3000, () => {
    console.log('Listening on port 3000')
});
