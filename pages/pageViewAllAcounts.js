import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageViewAllAccounts() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('Accounts', ['main', 'header'])}
        <body>
            ${header('/allAccounts')}
            <main>
                <h1>All Accounts</h1>
            </main>
            ${footer()}
        </body>
        </html>
    `;
}