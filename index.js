import express from 'express';
import { pageHome } from './pages/pageHome.js';
import { page404 } from './pages/page404.js';
import { pageAbout } from './pages/pageAbout.js';
import { pageViewAllAccounts } from './pages/pageViewAllAcounts.js';
import { pageCreateAccount } from './pages/pageCreateAccount.js';

const app = express();
const port = 5017;

app.use(express.static('static'))

// app.use((req, res, next) => {
//     console.log('>>>', req.url);
//     next();
// })

app.get('/', (req, res) => {
    return res.send(pageHome())
})
app.get('/about', (req, res) => {
    return res.send(pageAbout())
})
app.get('/allAccounts', (req, res) => {
    return res.send(pageViewAllAccounts())
})
app.get('/createAccount', (req, res) => {
    return res.send(pageCreateAccount())
})

app.get('*', (req, res) => {
    return res.send(page404())
})
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