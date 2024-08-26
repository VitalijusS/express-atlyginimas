export function pageAbout() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>About</title>
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
            
        </body>
        </html>
    `;
}