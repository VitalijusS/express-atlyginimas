export function pageHome() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Atlyginimai</title>
            <link rel="stylesheet" href="/css/main.css" />
        </head>
        <body>
            <header>
                <img src="#" alt="logo">
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </nav>
            </header>
            <main>
                <h1>Welcome to "Atlyginimas" platform</h1>
                <p><a href="/create">Create account</a></p>
            </main>
            <footer>
                Copyrigth &copy; 2024
            </footer>
        </body>
        </html>
    `;
}