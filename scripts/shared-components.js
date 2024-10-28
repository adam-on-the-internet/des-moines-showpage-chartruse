import {replaceDivContent} from "./document-builder.js"

export async function buildGenericComponents() {
    buildNavbarComponent();
    buildFooterComponent();
}

export async function buildNavbarComponent() {
    const content = `
    <nav>
        <h3>Des Moines Showpage</h3>
        <ul>
            <li>
                        <a href="./index.html">Upcoming Shows</a>
            </li>
            <li>
                        <a href="./all-shows.html">All Shows</a> 
            </li>
            <li>
                        <a href="./about.html">About</a>
            </li>
        </ul>
    </nav>
`
    const id = "navbar";
    replaceDivContent(id, content);
}

export async function buildFooterComponent() {
    const currentYear = new Date().getFullYear();
    const content = `
        <div id="footer-content">  
        <p>
            <a href="https://www.iowatransmutualaidfund.org/" target="_blank">
            Donate to Iowa Trans Mutual Aid Fund
            </a>
        </p>
        <p>
            <a href="https://www.adamontheinternet.com" target="_blank">
            © Adam on the Internet ${currentYear} 
            </a>
        </p>
        </div>`
    const id = "footer";
    replaceDivContent(id, content);
}
