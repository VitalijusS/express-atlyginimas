import express from 'express';
import { pageHome } from '../pages/pageHome.js';
import { page404 } from '../pages/page404.js';
import { pageAbout } from '../pages/pageAbout.js';
import { pageViewAllAccounts } from '../pages/pageViewAllAcounts.js';
import { pageCreateAccount } from '../pages/pageCreateAccount.js';
import { routerApi } from './api/roputerApi.js';

export const routerMain = express.Router();

routerMain.use('/api', routerApi)

routerMain.get('/', (req, res) => {
    return res.send(pageHome())
})
routerMain.get('/about', (req, res) => {
    return res.send(pageAbout())
})

routerMain.get('/allAccounts', (req, res) => {
    return res.send(pageViewAllAccounts())
})
routerMain.get('/createAccount', (req, res) => {
    return res.send(pageCreateAccount())
})

routerMain.get('*', (req, res) => {
    return res.send(page404())
})
