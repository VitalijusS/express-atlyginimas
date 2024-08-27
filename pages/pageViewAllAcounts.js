import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageViewAllAccounts() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('Accounts', ['main', 'header', 'table'])}
        <body>
            ${header('/allAccounts')}
            <main>
                <h1>All Accounts</h1>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Vardas</td>
                            <td>Isidarbinimo data</td>
                            <td>Valandinis</td>
                            <td>Atlyginimas</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Jonas</td>
                            <td>2022-02-02</td>
                            <td>7.5</td>
                            <td>---</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Maryte</td>
                            <td>2021-12-12</td>
                            <td>10</td>
                            <td>---</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ona</td>
                            <td>2000-01-01</td>
                            <td>69</td>
                            <td>---</td>
                        </tr>
                    </tbody>
                </table>
            </main>
            ${footer()}
        </body>
        </html>
    `;
}