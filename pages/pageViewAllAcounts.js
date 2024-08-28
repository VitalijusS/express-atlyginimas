import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";
import { accountsData } from "../data/accountsData.js";

export function pageViewAllAccounts() {

    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('Accounts', ['main', 'header', 'table', 'button'])}
        <body>
            ${header('/allAccounts')}
            <main>
                <div>
                    <h1>All Accounts</h1>
                    <a class="btn"href="/createAccount">Create new</a>
                </div>
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
                        ${accountsData.map((item, i) => `
                            <tr>
                            <td>${i + 1}</td>
                            <td>${item.name}</td>
                            <td>${item.date}</td>
                            <td>${item.rate}</td>
                            <td>${item.salary}</td>
                        </tr>
                            `).join('')}
                    </tbody>
                </table>
            </main>
            ${footer()}
        </body>
        </html>
    `;
}