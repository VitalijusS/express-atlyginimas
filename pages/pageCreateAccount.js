import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageCreateAccount() {
    const date = new Date();
    const today = `${date.getFullYear()}-${((date.getMonth() + 1) + '').padStart(2, '0')}-${(date.getDate() + '').padStart(2, '0')}`

    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head('Create', ['main', 'header', 'form'])}
        <body>
            ${header('/')}
            <main>
                <h1>Create account</h1>
                <form class="form" action="" method="">
                    <div class="form-row">
                        <lable for="name">Name</lable>
                        <input id="name" type="text" />
                    </div>
                    <div class="form-row">
                        <lable for="date">First day date</lable>
                        <input id="date" type="date" value="${today}" max="${today}"/>
                    </div>
                    <div class="form-row">
                        <lable for="rate">Rate</lable>
                        <input id="rate" type="number" min="0" max="999" value="6.9" step="0.01"/>
                    </div>
                    <div class="form-row">
                        <button type="submit">Create</button>
                    </div>
                </form>
            </main>
            ${footer()}
            <script src="/js/createAccount.js" type="module"></script>
        </body>
        </html>
    `;
}