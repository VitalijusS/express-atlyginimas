import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageHome() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('Atlyginimai', ['main', 'header', 'button'])}
        <body>
            ${header('/')}
            <main>
                <h1>Welcome to "Atlyginimas" platform</h1>
                <p>
                    <a class="btn" href="/createAccount">Create account</a>
                    <a class="btn" href="/allAccounts">View all accounts</a>
                </p>
            </main>
            ${footer()}
        </body>
        </html>
    `;
}