import { accountsData } from "../../../data/accountsData.js";
import { isName, isDate, isRate } from "../../../lib/validations.js";

export function accountPost(req, res) {

    if (typeof req.body !== 'object' || Array.isArray(req.body) || req.body === null) {
        return res.json({
            status: 'error',
            message: 'not an object'
        });
    }

    const validation = {
        name: {
            func: isName,
            trans: 'vardas',
        },
        date: {
            func: isDate,
            trans: 'isidarbinimo data',
        },
        rate: {
            func: isRate,
            trans: 'valandinis atlyginimas',
        },
    }
    const requiredDataKeysCount = Object.keys(validation).length;
    if (Object.keys(req.body).length !== requiredDataKeysCount) {

        let sizeErrorMessage = '';
        const keys = Object.keys(validation);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            sizeErrorMessage += `${key} (${validation[key].trans})`
            if (keys.length > 1) {
                if (keys.length === i + 2) {
                    sizeErrorMessage += " ir ";
                } else if (keys.length - 2 > i) {
                    sizeErrorMessage += ', ';
                }
            }
        }

        return res.json({
            status: 'error',
            message: `Object needs to have ${requiredDataKeysCount} keys: ${sizeErrorMessage}`
        });
    }


    for (const key in validation) {
        let errorMessage = validation[key].func(req.body[key]);
        if (errorMessage) {
            return res.json({
                status: 'error',
                message: errorMessage,
            });
        }
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