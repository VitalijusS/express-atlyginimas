export function page404() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>404</title>
            <link rel="stylesheet" href="/css/main.css" />
        </head>
        <body>
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>
                Go to <a href="/"> main page</a>
            <p>
        </body>
        </html>
    `;
}