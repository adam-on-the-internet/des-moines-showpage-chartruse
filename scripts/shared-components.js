import {addContentToDiv} from "./document-builder.js"

export async function buildFooterComponent() {
    const currentYear = new Date().getFullYear();
    const footerContent = `
        <hr>
        <p>
            <a href="/des_moines_showpage/index.html">Upcoming Shows</a>
        </p>
        <p>
            <a href="/des_moines_showpage/all-shows.html">All Shows</a>
        </p>
        <p>
            <a href="/des_moines_showpage/about.html">About</a>
        </p>
        <hr>
        <p>
            <a href="https://www.adamontheinternet.com" target="_blank">
            © Adam on the Internet ${currentYear} 
            </a>
        </p>`
    const footerId = "footer";
    addContentToDiv(footerId, footerContent);
}
