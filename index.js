const express = require('express')
const cors = require('cors')

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello another node and express auto run with nodemon');
})

const users = [
    { id: 1, name: "Kabbir Khan", number: "01 fuck fuck" },
    { id: 2, name: "Dabbir Khan", number: "01 fuck fuck" },
    { id: 3, name: "Babbir Khan", number: "01 fuck fuck" },
    { id: 4, name: "Nabbir Khan", number: "01 fuck fuck" },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const result = users.filter(user => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

        res.send(result);
    }
    else {
        res.send(users)
    }

})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.json(newUser);
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(userr => userr.id === parseInt(id))
    res.send(user);
})

app.listen(port, () => {
    console.log("Listening to port", port);
})