import express from "express";
import { users } from "./data.mjs";
import { log } from "console";
import cors from "cors";


const app = express();
app.use(express.json())
app.use(cors())




const logRequest = (req) =>{
    log(`${req.headers.origin} ${req.method} ${req.path} ${JSON.stringify(req.body)}`);
}


app.post('/user/verify', (req, res) => {
    logRequest(req)
    let user = users[req.body.email]
    if (user && user.password==req.body.password) {
        res.status(200).json(user).send()
    } else {
        res.status(400).send()
    }
})
app.post('/user', (req, res) => {
    logRequest(req)
    let user = users[req.body.email]
    user? res.status(400).send() : (
        users[req.body.email] = {...req.body},
        res.status(200).json(user).send()
    )
})
app.put('/user', (req, res) => {
    logRequest(req)
    log(req.body.email)
    let user = users[req.body.email]
    user? (
        users[req.body.email] = {...req.body},
        res.status(200).send()
    ) : res.status(400).send()
})

app.listen(3000, () => {
    log('listening on port 3000');
})