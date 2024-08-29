import express from 'express';
import { accountPost } from './accountPost.js';
import { accountGet } from './accountGet.js';
import { accountPut } from './accountPut.js';
import { accountDelete } from './accountDelete.js';

export const routerApiAccount = express.Router();

// routerApiAccount.post('/', accountPost)
// routerApiAccount.get('/', accountGet)
// routerApiAccount.put('/', accountPut)
// routerApiAccount.delete('/', accountDelete)

routerApiAccount
    .route('/')
    .get(accountGet)
    .post(accountPost)
    .put(accountPut)
    .delete(accountDelete)
