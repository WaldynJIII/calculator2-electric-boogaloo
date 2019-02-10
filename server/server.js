const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
let answer = 0
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/calculate', (req, res) => {
    console.log(req.body);
    toSend = req.body;
    console.log(toSend);
    answer = 0
    if(toSend.funk == 'plus'){
        answer += Number(toSend.num1) + Number(toSend.num2)
    }
    else if (toSend.funk == 'minus') {
        answer += Number(toSend.num1) - Number(toSend.num2)
    }
    else if (toSend.funk == 'multiply') {
        answer += Number(toSend.num1) * Number(toSend.num2)
    }
    else if (toSend.funk == 'divide') {
        answer += Number(toSend.num1) / Number(toSend.num2)
    }
    res.sendStatus(201);
    console.log(toSend);

})
app.get('/answer', (req, res) => {
    res.send(answer.toString());
    console.log(answer,toString())
})


app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})