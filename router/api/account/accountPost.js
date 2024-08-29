import { accountsData } from "../../../data/accountsData.js";
import { isName } from "../../../lib/validations.js";

export function accountPost(req, res) {

    if (typeof req.body !== 'object' || Array.isArray(req.body) || req.body === null) {
        return res.json({
            status: 'error',
            message: 'not an object'
        });
    }
    let errorMessage = isName(req.body.name);

    if (errorMessage) {
        return res.json({
            status: 'error',
            message: errorMessage,
        });
    }

    accountsData.push({
        ...req.body,
        salary: '???'
    })
    res.json({
        status: 'sucess',
        message: 'Account created'
    });
}