export function head(title = '', styles = []) {
    return `
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        ${styles.map(a => `<link rel="stylesheet" href="/css/${a}.css" />`).join('')}
    </head>
    `
}