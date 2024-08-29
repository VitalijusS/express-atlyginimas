import express from 'express';
import { routerMain } from './router/routerMain.js';

const app = express();
const port = 5017;

app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({ extended: true }))

app.use(express.static('static'))

app.use('/', routerMain);

// app.use((req, res, next) => {
//     console.log('>>>', req.url);
//     next();
// })

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log(`server is on: http://localhost:${port}`)
})