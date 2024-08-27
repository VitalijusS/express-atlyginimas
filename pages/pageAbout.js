import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageAbout() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('About', ['main', 'header'])}
        <body>
            ${header('/about')}
            <main>
                <h1>About us</h1>
                <h2>Galima:</h2>
                <ul>
                <li>Sukurti profili</li>
                <li>Pamatytui darbuotoju sarasa</li>
                <li>Pasalinti darbuotoja</li>
                <li>Redaguoti varda</li>
                <li>Redaguoti pavarde</li>
                </ul>
            </main>
            ${footer()}
        </body>
        </html>
    `;
}