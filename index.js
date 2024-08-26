import express from 'express';
import { pageHome } from './pages/pageHome.js';
import { page404 } from './pages/page404.js';
import { pageAbout } from './pages/pageAbout.js';

const app = express();
const port = 5017;

app.use(express.static('static'))
app.listen(port, () => {
    console.log(`server is on: http://localhost:${port}`)
})

app.get('/', (req, res) => {
    return res.send(pageHome())
})
app.get('/about', (req, res) => {
    return res.send(pageAbout())
})

app.get('*', (req, res) => {
    return res.send(page404())
})
