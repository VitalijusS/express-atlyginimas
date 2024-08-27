export function header(page) {
    return `
    <header>
        <img src="/img/logo.png" alt="logo">
        <nav>
            <a class="${page === '/' ? "active" : ''}" href="/">Home</a>
            <a class="${page === '/about' ? "active" : ''}" href="/about">About</a>
            <a class="${page === '/allAccounts' ? "active" : ''}" href="/allAccounts">All accounts</a>
        </nav>
    </header>    
        `;

}